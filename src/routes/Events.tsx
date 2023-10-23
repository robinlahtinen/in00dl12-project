import {useNavigate} from "react-router-dom";
import React from "react";

interface EventsProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Events(props: EventsProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className="m-text-bottom">
                <h3>Ei tapahtumia</h3>
            </div>
        </>
    )
}
