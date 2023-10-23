import React, {useEffect} from "react";

interface MenuProps {
    keypadPresses: number[]
    setKeypadPresses: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Menu(props: MenuProps) {
    useEffect(() => {
        console.log(props.keypadPresses[props.keypadPresses.length - 1]);
    }, [props])

    return (
        <>
            <div className="m-notice-top">
                <h2>Valitse</h2>
                <h3>Voit lopettaa STOP-näppäimellä</h3>
            </div>
            <nav className="m-nav">
                <div>
                    <p><span>&#129084;</span> Setelin talletus</p>
                </div>
                <div className="end">
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="end">
                    <p>Otto <span>&#129086;</span></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="end">
                    <p>Saldo <span>&#129086;</span></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="end">
                    <p>Tapahtumat <span>&#129086;</span></p>
                </div>
            </nav>
        </>
    )
}
