import "../assets/css/main.scss";
import React, {useMemo} from "react";
import {Outlet, useNavigate} from "react-router-dom";

interface MainLayoutProps {
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    keypadPresses: number[]
    setKeypadPresses: React.Dispatch<React.SetStateAction<number[]>>
}

export default function MainLayout(props: MainLayoutProps) {
    const buttonSound = useMemo(() => new Audio("/assets/sound/btn.wav"), []);
    const errorSound = useMemo(() => new Audio("/assets/sound/error.wav"), []);
    const beepSound = useMemo(() => new Audio("/assets/sound/beep.mp3"), []);
    const winMusic = useMemo(() => new Audio("/assets/sound/win.wav"), []);
    const waitMusic = useMemo(() => new Audio("/assets/sound/wait.wav"), []);
    const setLoggedIn = props.setLoggedIn;
    const keypadPresses = props.keypadPresses;
    const setKeypadPresses = props.setKeypadPresses;
    const navigate = useNavigate();

    function button() {
        buttonSound.currentTime = 0;
        void buttonSound.play();
    }

    function keypadPress(number: number) {
        if (!props.loggedIn) {
            if (keypadPresses.length < 1 && waitMusic.paused) {
                void waitMusic.play();
                waitMusic.loop = true;
            }

            if (keypadPresses.length >= 4) {
                errorSound.currentTime = 0;
                void errorSound.play();

                return;
            }
        }

        beepSound.currentTime = 0;
        void beepSound.play();

        setKeypadPresses(keypadPresses.concat([number]));
    }

    return (
        <>
            <header>
                <div className="header-inside">
                    <h1>Säät-ö-Matic</h1>
                </div>
            </header>
            <div className="header-bottom"></div>
            <div className="middle">
                <div className="monitor-panel">
                    <div className="monitor-buttons monitor-buttons-left">
                        <button type="button" onClick={() => {button();navigate("/deposit")}}></button>
                        <button onClick={() => {button();navigate("/menu")}}></button>
                        <button onClick={() => {button();navigate("/menu")}}></button>
                        <button onClick={() => {button();navigate("/menu")}}></button>
                    </div>
                    <div className="monitor-container">
                        <main className="monitor">
                            <Outlet/>
                        </main>
                    </div>
                    <div className="monitor-buttons monitor-buttons-right">
                        <button onClick={() => {button();navigate("/menu")}}></button>
                        <button onClick={() => {button();navigate("/withdraw")}}></button>
                        <button onClick={() => {button();navigate("/saldo")}}></button>
                        <button onClick={() => {button();navigate("/events")}}></button>
                    </div>
                </div>
                <aside>
                    <div className="aside-top">
                        <div className="cardholder">

                        </div>
                    </div>
                </aside>
            </div>
            <footer>
                <div className="buttons-container">
                    <div className="buttons">
                        <div className="keypad">
                            <button onClick={() => {
                                keypadPress(1)
                            }}>1
                            </button>
                            <button onClick={() => {
                                keypadPress(2)
                            }}>2
                            </button>
                            <button onClick={() => {
                                keypadPress(3)
                            }}>3
                            </button>
                            <button onClick={() => {
                                keypadPress(4)
                            }}>4
                            </button>
                            <button onClick={() => {
                                keypadPress(5)
                            }}>5
                            </button>
                            <button onClick={() => {
                                keypadPress(6)
                            }}>6
                            </button>
                            <button onClick={() => {
                                keypadPress(7)
                            }}>7
                            </button>
                            <button onClick={() => {
                                keypadPress(8)
                            }}>8
                            </button>
                            <button onClick={() => {
                                keypadPress(9)
                            }}>9
                            </button>
                            <button className="btn-special">-</button>
                            <button>0</button>
                            <button className="btn-special">+</button>
                        </div>
                        <div className="primary-buttons">
                            <button className="btn-red" onClick={() => {
                                buttonSound.currentTime = 0;
                                void buttonSound.play();
                                setKeypadPresses([]);

                                if (props.loggedIn) {
                                    setLoggedIn(false);
                                    winMusic.currentTime = 0;
                                    winMusic.pause();
                                }
                            }}></button>
                            <button className="btn-yellow"></button>
                            <button></button>
                            <button className="btn-green" onClick={() => {
                                if (!props.loggedIn && keypadPresses.join("") === "1234") {
                                    buttonSound.currentTime = 0;
                                    void buttonSound.play();
                                    waitMusic.pause();
                                    void winMusic.play();
                                    setLoggedIn(true);
                                    navigate("/menu");
                                } else {
                                    errorSound.currentTime = 0;
                                    void errorSound.play();
                                }

                                if (!props.loggedIn) {
                                    setKeypadPresses([]);
                                }
                            }}>OK
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
