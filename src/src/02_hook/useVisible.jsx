import { useState } from "react";

export const useVisible = () => {
    // useStateを設定
    const [isVisible, setIsVisible] = useState(true);
    
    // inputのElementを取得
    // const inputEle = document.getElementById("inputname");

    const handleButtonClick = () => {
        setIsVisible(prevState => !prevState); 
      };

    return [ isVisible, setIsVisible, handleButtonClick ]

}