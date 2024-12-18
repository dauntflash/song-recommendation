import React, { useRef, useState } from "react";
import Show from "./Show";
import useFiles from "./Mydata";
import { useNavigate } from "react-router-dom";
const Files = () => {
  const [fileInput] = useState(useRef(null));
  const { files, popUp, handleFileAdd, deleteFile } = useFiles({Result:""});
  

  const handleChange = (e) => {
    const file = fileInput.current.files[0];
    if (file) {
      handleFileAdd(file, fileInput);
    }
  };

  return (
    <div className="upload">
      <div className="files">
        <h2>My Database</h2>
        {popUp && <Show message="File already exists" icon={<i className="fa-solid fa-circle-exclamation" />} />}
        {files.length > 0 ? (
          <div className="database">
            <ol>{files.map((file) => <li key={file.id}>{file.fileName}<i onClick={() => deleteFile(file.id)} className="fa fa-trash" aria-hidden="true"></i></li>)}</ol>
          </div>
        ) : (
          <div className="no-file">
            <p>nothing here yet, upload a file</p>
          </div>
        )}
      </div>
      <button onClick={() => fileInput.current.click()}>
        <input type="file" accept=".json" ref={fileInput} style={{ display: "none" }} onChange={handleChange} />
        Upload file
      </button>
    </div>
  );
};

export default Files;

