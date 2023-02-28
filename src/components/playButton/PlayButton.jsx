import React, { useContext, useState } from 'react'
import style from './PlayButton.module.css'
import { getRandomColor, randomRange } from '../../helper/HelperFunction'
import { GameLogicContext } from '../../provider/GameLogicProvider';
import { UIContext } from '../../provider/UIProvider';


export default function PlayButton({ onclick, text = "Play" }) {

    let [ btnStyle, setBtnStyle ] = useState({});
    const [ gameLogic, setGameLogic ] = useContext(GameLogicContext);
    const [ ui, setUi ] = useContext(UIContext);

    return (
        <button disabled={ui.disablePlayButton} style={btnStyle} onClick={() => {
            let randomColor = getRandomColor();
            let backgroundColor = randomColor;
            // btn.style.boxShadow = `6px 0px 0px ${getRandomColor()}, 0px 7px 0px ${getRandomColor()}`;
            let boxShadow = `6px 7px 0px rgba(0,0,0,.3), 6px 7px 0px ${randomColor}`;
            setBtnStyle({ ...btnStyle, backgroundColor, boxShadow });
            clickLogic(gameLogic, setGameLogic, randomColor, ui, setUi)
        }} className={`${style[ "btn-style" ]}`}>{gameLogic.yourAttempts === 0 ? "Play" : gameLogic.curScore}</button>
    )
}


const clickLogic = (gameLogic, setGameLogic, randomColor, ui, setUi) => {
    gameLogic.yourAttempts = gameLogic.yourAttempts + 1;
    checkAttempts(gameLogic, setGameLogic, ui, setUi)
    gameLogic.curScore = randomRange(1, 5);

    if (((gameLogic.score + gameLogic.curScore) <= gameLogic.target) && gameLogic.yourAttempts <= gameLogic.maxAttempts) {

        let tmpScore = gameLogic.score;
        gameLogic.score += gameLogic.curScore;

        checkScore(gameLogic, setGameLogic, ui, setUi);
        for (let i = 0; i < gameLogic.curScore; i++) {


            let number = tmpScore + i + 1;
            let delay = `${(i) * 0.2}s`;
            gameLogic.balls.push({ number, randomColor, delay })



        }


    }


    setGameLogic({ ...gameLogic })

}

const checkAttempts = (gameLogic, setGameLogic, ui, setUi) => {

    if ((!(gameLogic.yourAttempts < gameLogic.maxAttempts)) && gameLogic.score !== gameLogic.target) {
        ui.disablePlayButton = true;

        ui.modalText = "You Lose!!!!!";
        ui.modalColor = "rgba(255, 0, 0, 0.85)";

        // gameLogic.level = 0;
        gameLogic.level = Math.max(0, --gameLogic.level);
        localStorage.setItem("level", gameLogic.level)


        setTimeout(() => {
            ui.disablePlayButton = false;
            ui.showModal = true;
            setUi({ ...ui });
            reset(gameLogic, setGameLogic, ui, setUi);
        }, 200);








    }



}
const checkScore = (gameLogic, setGameLogic, ui, setUi) => {

    if (gameLogic.score === gameLogic.target) {
        ui.disablePlayButton = true;
        gameLogic.level = ++gameLogic.level;
        localStorage.setItem('level', gameLogic.level);

        ui.modalText = "You Won!!!!!";
        ui.modalColor = "rgba(0, 255, 85, 0.85)";
        setTimeout(() => {

            ui.disablePlayButton = false;
            ui.showModal = true;
            setUi({ ...ui });

            reset(gameLogic, setGameLogic, ui, setUi);


        }, 1300);


    }


}


const reset = (gameLogic, setGameLogic, ui, setUi) => {

    setGameLogic({
        level: localStorage.getItem('level') || 0,
        target: randomRange(25, 50),
        maxAttempts: randomRange(0, 25),
        yourAttempts: 0,
        score: 0,
        curScore: 0,
        balls: []
    })
}