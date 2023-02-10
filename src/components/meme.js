import {useState, useEffect} from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomUrl: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allmemes, setAllMemes] = useState([]);

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function clickHandler() {
        const randomNumber = Math.floor(Math.random() * allmemes.length);
        const randomUrl = allmemes[randomNumber].url;
        setMeme(prevSetMeme => ({
            ...prevSetMeme,
            topText: "",
            bottomText: "",
            randomUrl
        }))
    }

    function onChangeHandler(event) {
        const {name, value} = event.target;
        setMeme(prevSetMeme => ({
            ...prevSetMeme,
            [name]: value
        }))
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