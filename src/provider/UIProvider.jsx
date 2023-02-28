import { createContext, useState } from "react";


export const UIContext = createContext(null);


import React from 'react'

export default function UIProvider({ children }) {
    const ui = {
        showModal: false,
        modalColor: "",
        modalText: "Cannot Compute",
        disablePlayButton: false,
        attemptColor: "#000",
        scoreColor: "#000"
    }

    return (
        <UIContext.Provider value={useState(ui)}>{children}</UIContext.Provider>
    )
}
