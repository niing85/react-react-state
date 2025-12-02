import { useState } from "react";

export function HandleClick (){
    const [greeting, setGreeting] = useState("Greeting Message");

    const helloClick = () => {
        setGreeting("สวัสดี!");
    }

    const hiClick = () => {
        setGreeting("Hi!");
    }
    
    const chineseClick = () => {
        setGreeting("你好!");
    }

    return (
        <div className="App">
            <div className="greeting-container">{greeting}</div>
            <div className="buttons">
                <button onClick={helloClick}>สวัสดี!</button>
                <button onClick={hiClick}>Hi!</button>
                <button onClick={chineseClick}>你好!</button>
            </div>
        </div>
        
    );
}