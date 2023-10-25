
import { Routes, Route } from "react-router-dom";

import Presentation from "./pages/Presentation/Presentation.jsx";
import Header from "./components/Header/Header.jsx";

import "./App.css"

function App () {
    return (
        <div>
            <Header /> 
                <Routes>

                   
                    <Route path="/Presentation" element={<Presentation /> }/>
                    

                </Routes>
            
        </div>
    )
}
export default App;