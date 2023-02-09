import {useState} from "react";
import memeData from "../memesData"


export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomUrl: "https://i.imgflip.com/30b1gx.jpg"
    })

    console.log(meme);

    function onChangeHandler(event) {
        const {name, value} = event.target;
        setMeme((prevSetMeme) => ({
            ...prevSetMeme,
            [name]: value
        }))
    }
    function clickHandler() {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomNumber].url;
        setMeme((prevSetMeme) => ({
            ...prevSetMeme,
            topText: "",
            bottomText: "",
            randomUrl
        }));

    }
    return(
        <main className="main">
            <div className="meme">

            <input 
            className="input" 
            type="text"  
            placeholder="top text"
            name="topText"
            onChange={onChangeHandler}
            value={meme.topText}
            />

            <input 
            className="input" 
            type="text" 
            placeholder="bottom text"
            name="bottomText"
            onChange={onChangeHandler}
            value={meme.bottomText}
            />

            <button className="button" onClick={clickHandler}>
                Get a new meme image
            </button>
            </div>

            <div className="meme-image-container">
                <img className="meme-image" src={meme.randomUrl} alt="meme" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

            
        </main>
    )
}