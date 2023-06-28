import Styled from "styled-components";
import fondo from "../assets/mi avatar.svg"
export function Home() {
    return (
        <Container className="Container">
            <h1>Home</h1>
        </Container>
    );
}

const Container = Styled.div`
    height:100vh;
    display: flex;
        align-items: center;
        justify-content: center;
    .Container{
        backgroundImage: url(${fondo});
        position: center;
    }


`;