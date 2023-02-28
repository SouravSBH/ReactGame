import React, { useState, createContext } from 'react'
import PlayButton from '../../components/playButton/PlayButton'
import Target from '../../components/target/Target'
import Score from '../../components/score/Score'
import ScoreBoard from '../../components/scoreBoard/ScoreBoard'
import style from "./Home.module.css"

import GameLogicProvider from '../../provider/GameLogicProvider'

import ModalComponent from '../../components/modal/ModalComponent'

import UIProvider, { UIContext } from '../../provider/UIProvider'

export default function Home() {

    return (
        <>

            <header><h1>React Game</h1></header>
            <UIProvider>
                <ModalComponent></ModalComponent>
                <main>
                    <GameLogicProvider>
                        <Target></Target>
                        <PlayButton></PlayButton>
                        <Score></Score>
                        <ScoreBoard></ScoreBoard>
                    </GameLogicProvider>
                </main>
            </UIProvider>


        </>
    )
}
