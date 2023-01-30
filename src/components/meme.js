import {useState} from "react";
import memeData from "../memesData"


export default function Meme() {
    const [memeImage, setMemeImage] = useState("");

    function clickHandler() {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomNumber].url;
        console.log(randomUrl);
        setMemeImage(randomUrl);

    }
    return(
        <main className="main">
            <div className="meme">
            <input className="input" type="text"  placeholder="top text"/>

            <input className="input" type="text" placeholder="bottom text"/>

            <button className="button" onClick={clickHandler}>Get a new meme image</button>
            </div>

            <img className="meme-image" src={memeImage} alt="meme" />
        </main>
    )
}