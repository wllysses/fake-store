import styled from "styled-components"
import { ShoppingCart } from "../Cart/Cart"

export const Header = ({ cartValue }) => {

    return (
        <HeaderWrapper>
            <header>
                <h1>Fake<span>Store</span></h1>
                <ShoppingCart cartValue={cartValue}/>
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-color: #0070F3;
    padding: 2rem;

    header {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;

        @media(max-width: 475px) {
            flex-direction: column;
            gap: 1rem;
        }

        h1 {
            font-weight: 700;
            margin-bottom: 0;

            span {
                color: #00438f;
            }
        }
    }
`