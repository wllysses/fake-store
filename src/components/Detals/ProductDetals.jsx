import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../services/api"
import { Header } from "../Header/Header"
import { CustomizedAlert } from "../Alert/Alert"
import Rating from '@mui/material/Rating';
import LoadingSpinner from "../Loading/LoadingSpinner"
import styled from "styled-components"

export const ProductDetals = () => {

    const { id } = useParams()
    const [productDetal, setProductDetal] = useState({})
    const [rating, setRating] = useState(null)
    const [formatPrice, setFormatPrice] = useState({
        price: null
    })
    const [open, setOpen] = useState(false)

    async function fetchProductDetal() {
        const detal = await getProduct(id)
        setProductDetal(detal)
        setRating(detal.rating.rate)
        setFormatPrice({
            price: detal.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
        })
    }

    useEffect(() => {
        fetchProductDetal()
    }, [])

    function handleBtnClick() {
        setOpen(true)
    }

    return (
        <>
            <Header />

            <Container>
                <DetalsWrapper>

                    {
                        Object.keys(productDetal).length == 0 ? <LoadingSpinner /> :
                    <>
                        <div className="wrapper-left-side text-center">
                            <img src={productDetal.image} alt={productDetal.title} style={{maxWidth: '100%', maxHeight: '400px'}}/>
                        </div>
                        <div className="wrapper-right-side">
                            <div className="detals-content">
                                <h3 className="fs-4 fw-bold">{productDetal.title}</h3>
                                <div className="rating-and-category mt-3">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating}
                                        sx={{ justifyContent: "center" }}
                                    />
                                    <h5 className="category">
                                        {productDetal.category}
                                    </h5>
                                </div>
                                <div className="product-description">
                                    <p>{productDetal.description}</p>
                                    <h4 className="mt-4">{formatPrice.price}</h4>
                                </div>
                            </div>

                            <div className="buttons mt-4">
                                <button className="btn btn-primary w-100" onClick={handleBtnClick}>Add to Cart</button>
                            </div>

                            <CustomizedAlert open={open} setOpen={setOpen}/>
                        </div>
                    </>
                    }

                </DetalsWrapper>
            </Container>
        </>
    )
}

const DetalsWrapper = styled.div`
    padding: 1rem;
    border-radius: 0.3rem;
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    .wrapper-left-side, .wrapper-right-side {
        width: 50%;
    }

    @media(max-width: 800px) {
        flex-direction: column;

        .wrapper-left-side, .wrapper-right-side {
            width: 100%;
        }

    }
`