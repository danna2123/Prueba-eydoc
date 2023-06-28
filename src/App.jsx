import React, { useState } from "react";
import MyRoutes from "./routers/routes.jsx"
import Styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar.jsx"
import { Light } from "./styles/Themes.jsx";
import { Dark } from "./styles/Themes.jsx";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme==="light" ? Light: Dark;
    const [sidebarOPen, setSidebarOPen]=useState(false);

    return (
        <>
            <ThemeContext.Provider value={{setTheme, theme}}>
                <ThemeProvider theme={themeStyle}>
                    <BrowserRouter>
                        <Container className={sidebarOPen?"sidebarState active":"sidebarState"}>
                                <Sidebar sidebarOPen={sidebarOPen} setSidebarOPen={setSidebarOPen} />
                                <MyRoutes />
                        </Container>
                    </BrowserRouter>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}

const Container = Styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background:${({theme})=>theme.bgTotal};
    transition:all 0.3s;
    &.active{
        grid-template-columns:300px auto;
    }
`;

export default App;