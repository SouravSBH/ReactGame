import React, { useContext } from 'react';
import styles from './ScoreBoard.module.css'
import Ball from '../ball/Ball';
import { GameLogicContext } from '../../provider/GameLogicProvider';



export default function ScoreBoard() {
    // const balls = new Array(10).fill()

    const [ gameLogic, ] = useContext(GameLogicContext);

    return (
        <div className={styles[ "score-wrapper" ]}>
            <div className={styles[ "score-board" ]}>
                {gameLogic.balls.map((el, index) =>
                    <Ball key={index} delay={el.delay} randomColor={el.randomColor} number={el.number}></Ball>
                )}
            </div>
        </div>
    )
}

