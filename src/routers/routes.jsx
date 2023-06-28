import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {caracteristicas} from "../pages/caracteristicas"
import {components} from "../pages/components"

function MyRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/caracteristicas" element={<caracteristicas />} />
                <Route path="/components" element={<components />} />
            </Routes>
    );
}

export default MyRoutes;
