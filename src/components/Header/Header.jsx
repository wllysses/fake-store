import styled from "styled-components"
import { ShoppingCart } from "../Navbar/Navbar"

export const Header = () => {

    return (
        <HeaderWrapper>
            <header>
                <h1>Fake<span>Store</span></h1>
                <ShoppingCart />
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-color: #4A3D7C;
    padding: 2rem;

    header {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;

        h1 {
            font-weight: 700;

            span {
                color: #7B66CF;
            }
        }
    }
`