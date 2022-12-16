import styled from "styled-components"
import LoadingSpinner from "../Loading/LoadingSpinner.jsx"
import ScrollToTop from "react-scroll-to-top"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { getProducts } from "../../services/api.js"
import { Link } from 'react-router-dom'

export const Products = () => {

    const [productsData, setProductsData] = useState([])

    async function fetchProductsData() {
        const products = await getProducts()
        setProductsData(products)
    }

    useEffect(() => {
        fetchProductsData()
    }, [])

    return (
        <Container className="p-3">
            <ProductsWrapper>
                {   
                    productsData.length == 0 ? <LoadingSpinner /> :
                    
                    productsData.map((data, index) => {

                        let formatPrice = data.price.toLocaleString('pt-BR', {
                            style:'currency',
                            currency: 'BRL'
                        })

                        return (
                            <div className="product" key={index}>
                                <img src={data.image} alt={data.title} />

                                <div className="product-data">
                                    <h4>{data.title}</h4>
                                    <span className="product-price">{formatPrice}</span>
                                </div>

                                <Link to={`/Product/${data.id}`}>
                                    <button className="btn btn-primary">Product Page</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </ProductsWrapper>
            
            <ScrollToTop smooth />
        </Container>
    )
}

const ProductsWrapper = styled.div`
    background-color: #EDEDED;
    padding: 1rem;
    border-radius: 0.3rem;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    .product {
        background-color: white;
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        transition: 0.2s;
        border-radius: 0.3rem;

        &:hover {
            box-shadow: 0 3px 6px rgba(0, 0, 0, .206);
            transform: scale(0.98);
        }

        img {
            max-width: 50%;
            height: 120px;
        }

        .product-data {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            h4 {
                font-size: 1.25rem;
                font-weight: 700;
                text-align: center;
            }

            .product-price {
                font-size: 1.3rem;
                text-align: center;
            }
        }
    }
`