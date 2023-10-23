import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

interface UserLayoutProps {
    keypadPresses: number[]
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UserLayout(props: UserLayoutProps) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/");
        }
    }, [navigate, props])

    return (
        <Outlet/>
    )
}
