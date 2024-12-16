import { useState, useEffect } from "react";
import db from "./db";
import useValue from "./handleValue";
const useFiles = ({Result=""}) => {
  const [files, setFiles] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const keyword = Result.trim();
  const {myValue}= useValue();
  const maxValue=myValue

  const fetchFiles = async () => {
    const storedFiles = await db.files.toArray();
    setFiles(storedFiles);
  };

  const handleFileAdd = async (file, fileInput) => {
    const fileName = file.name;
    const fileExists = await db.files.where("fileName").equals(fileName).first();
    if (fileExists) {
      setPopUp(true);
      fileInput.current.value = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileContent = event.target.result;
      await db.files.add({ fileName, fileContent });
      await fetchFiles();
      fileInput.current.value = null;
    };
    reader.readAsText(file);
  };

  const deleteFile = async (id) => {
    await db.files.delete(id);
    await fetchFiles();
  };
  const fetchSuggestions = async () => {
    if (!keyword.trim()) { // Check if the keyword is empty or only spaces
      setSuggestions([]);
      return;
    }
  
    const allFiles = await db.files.toArray(); // Retrieve all files from the database
    const uniqueIndices = new Set(); // Use a Set to ensure unique indices
    let recommendations = []; // Reset recommendations
  
    for (let i = 0; i < allFiles.length; i++) {
      const file = allFiles[i];
      try {
        const content = JSON.parse(file.fileContent); // Assuming the content is JSON
  
        for (let j = 0; j < content.length; j++) {
          const item = content[j];
  
          // Check if the item matches the keyword in either artist or song title
          if (
            item.artist && item.song && keyword.trim() && // Ensure properties exist and keyword isn't empty
            (item.artist.toLowerCase().includes(keyword.toLowerCase()) ||
              item.song.toLowerCase().includes(keyword.toLowerCase()))
          ) {
            // Add random unique indices until we reach the maxValue
            while (uniqueIndices.size < maxValue) {
              const randomIdx = Math.floor(Math.random() * content.length);
              const randomItem = content[randomIdx];
  
              // Ensure the random item is valid and contains necessary properties
              if (
                randomItem &&
                randomItem.song &&
                randomItem.artist &&
                randomItem.album_cover
              ) {
                uniqueIndices.add(randomIdx); // Add unique index to the Set
              }
            }
  
            // Add recommendations based on uniqueIndices
            uniqueIndices.forEach((idx) => {
              const recommendationItem = content[idx];
              if (recommendationItem) {
                recommendations.push(recommendationItem);
              }
            });
  
            // Exit early if we've reached the maxValue
            if (recommendations.length >= maxValue) break;
          }
        }
  
        // Exit early if we've reached the maxValue
        if (recommendations.length >= maxValue) break;
      } catch (error) {
        console.error("Error parsing file content:", error); // Handle JSON parse errors
      }
    }
  
    // Ensure recommendations are capped at maxValue
    recommendations = recommendations.slice(0, maxValue);
    
    // Step 3: Set the Matching Suggestions into State
    setSuggestions(recommendations); // Reset with the correct recommendations
  };
  
  
  useEffect(() => {
    fetchSuggestions();
    // console.log(suggestions)
  }, [keyword, maxValue]);  

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    if (popUp) {
      const timer = setTimeout(() => {
        setPopUp(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [popUp]);

  return {
    files,
    popUp,
    setPopUp,
    handleFileAdd,
    deleteFile,
    suggestions,
  };
};

export default useFiles;