import { useEffect, useState } from "react";
const useValue = () => {
    const storedValue = localStorage.getItem("myValue");
    const initialValue = storedValue ? parseInt(storedValue, 10) : 5;

    const [myValue, setMyValue] = useState(initialValue);

    // Sync myValue with localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("myValue", myValue);
    }, [myValue]);

    const increaseValue = () =>{
        const newValue= myValue >= 10 ? 10 : myValue + 1 ;
        setMyValue(newValue);
    } 
    const decreaseValue = () => {
        const newValue= myValue <= 3 ? 3 : myValue - 1;
        setMyValue(newValue);
    }
    return {
        myValue,
        increaseValue,
        decreaseValue
    };
}
 
export default useValue;