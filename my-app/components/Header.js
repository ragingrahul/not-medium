import React from "react";
import { ConnectButton } from "./ConnectButton";

export function Header(){

    return(
        <nav className="w-full flex md:justify-center justify-between items-center bg-sky-500 p-4">
            <div className="flex-none justify-center items-center">
                <img src="./medium-black.png" alt="logo" className="w-32 cursor-pointer"/>
            </div>
            <div className="flex flex-row justify-between items-center flex-initial">
                <h1>Orbis1</h1>
                <h1>Orbis1</h1>
                <h1>Orbis1</h1>
                <ConnectButton />
            </div>
        </nav>
    )
}

//export default Header