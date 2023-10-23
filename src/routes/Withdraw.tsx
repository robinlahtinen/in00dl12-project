import {useNavigate} from "react-router-dom";
import React from "react";

interface WithdrawProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Withdraw(props: WithdrawProps) {
    const navigate = useNavigate();

    return (
        <div className="m-text-bottom">
            <h3>Kortti lukittu</h3>
        </div>
    )
}
