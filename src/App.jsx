import { NavLink, Route, Routes } from "react-router-dom";
import FormYookassa from "./components/FormYookassa/FormYookassa";
import Succeeded from "./components/Succeeded/Succeeded";
import Error from "./components/Error/Error";

function App() {
    return (
        <>
          <NavLink  to={"/payment"} >
            <p>Оплата</p>
          </NavLink>
          <NavLink  to={"/"} >
            <p>Назад</p>
          </NavLink>
            <Routes>
                <Route path="/" element={<p>HI</p>} />
                <Route path="/payment" element={<FormYookassa />} />
                <Route path="/succeeded" element={<Succeeded />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
