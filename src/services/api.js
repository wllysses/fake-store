export async function getProducts() {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()

    return await data
}

export async function getProduct(id) {
    const url = `https://fakestoreapi.com/products/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return await data
}