import {useNavigate} from "react-router-dom";
import React from "react";

interface DepositProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Deposit(props: DepositProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className="m-text-bottom">
                <h3>Ei voida tallettaa</h3>
            </div>
        </>
    )
}
