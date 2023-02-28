import { createContext, useState } from "react";


import { randomRange } from '../helper/HelperFunction'



export const GameLogicContext = createContext(null);



export default function GameLogicProvider({ children }) {
    const gameLogic = {
        level: localStorage.getItem('level') || 0,
        target: randomRange(25, 50),
        maxAttempts: randomRange(0, 25),
        yourAttempts: 0,
        score: 0,
        curScore: 0,
        balls: []
    }

    return (
        <GameLogicContext.Provider value={useState(gameLogic)}>{children}</GameLogicContext.Provider>
    )
}
