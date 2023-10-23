interface LoginProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Login(props: LoginProps) {
    const pressesText = new Array(props.keypadPresses.length + 1).join("*");

    return (
        <>
            <div className="m-notice-top">
                <h2>Näppäile tunnusluku</h2>
                <h3>Suojaa tunnuslukusi</h3>
            </div>
            <p className="keypad-print"><span>{pressesText}</span></p>
            <div className="m-text-bottom">
                <h3>Lopuksi paina OK</h3>
            </div>
        </>
    )
}
