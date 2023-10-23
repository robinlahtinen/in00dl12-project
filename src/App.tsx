import "./assets/css/main.scss";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "./routes/Login.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import {useState} from "react";
import Menu from "./routes/Menu.tsx";
import UserLayout from "./layouts/UserLayout.tsx";
import Withdraw from "./routes/Withdraw.tsx";
import Saldo from "./routes/Saldo.tsx";
import Events from "./routes/Events.tsx";
import Deposit from "./routes/Deposit.tsx";

function App() {
    const [keypadPresses, setKeypadPresses] = useState<number[]>([]);
    const [balance, setBalance] = useState<number>(500);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<MainLayout loggedIn={loggedIn} setLoggedIn={setLoggedIn} keypadPresses={keypadPresses} setKeypadPresses={setKeypadPresses}/>} errorElement={<></>}>
            <Route path="/" element={<Login keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
            <Route element={<UserLayout keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}>
                <Route path="/menu" element={<Menu keypadPresses={keypadPresses} setKeypadPresses={setKeypadPresses}/>}/>
                <Route path="/deposit" element={<Deposit  keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path="/events" element={<Events keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path="/saldo" element={<Saldo balance={balance} keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path="/withdraw" element={<Withdraw keypadPresses={keypadPresses} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
            </Route>
        </Route>
    ));

    return (
        <RouterProvider router={router}/>
    )
}

export default App
