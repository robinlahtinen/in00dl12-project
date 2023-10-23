import {useNavigate} from "react-router-dom";
import React from "react";

interface SaldoProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    balance: number
}

export default function Saldo(props: SaldoProps) {
    const navigate = useNavigate();

    return (
        <>
            <p className="keypad-print" style={{height:"75%"}}><span style={{color:"gold"}}>{props.balance} €</span></p>
            <div className="m-text-bottom">
                <h3>Poista kortti</h3>
            </div>
        </>
        );
}
