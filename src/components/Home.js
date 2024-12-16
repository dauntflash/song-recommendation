import { useState } from "react";
import Search from "./Search";
import useFiles from "./Mydata";


const Home = () => {
    const [Result, setResult] = useState('');
    const [MyValue, setMyValue] = useState(5)


    const {suggestions}=useFiles({Result,maxValue:MyValue});
    return ( 
    <div className="home">
        <h2>SEARCH:</h2>
        <div className="container">
            <input type="text" onChange={(e) => setResult(e.target.value)} placeholder="Enter song or artist name"/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        
        {suggestions.length > 0 && (
        <div>
        <h3>Recommendations: </h3>
        {suggestions.map((item,index)=>(
            <div key={index}>
                <Search file={item}/>
            </div>
        ))}
        </div>
           
      )}
      {suggestions.length === 0 && Result && <h3>No results found for {Result}</h3>}

    </div>
);
}
 
export default Home;