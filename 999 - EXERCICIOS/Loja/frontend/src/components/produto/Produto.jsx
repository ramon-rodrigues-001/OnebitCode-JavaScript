import { useEffect } from 'react'
import './Produto.scss'

export default function Produto() {

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:4000/verProduto/jhjk');
                const data = await response.json()
                setProdutos(data)
                
                await console.log(produtos)
            }
            catch (error) {
                console.log(error)
            }

        }

        fetchProdutos();
    }, [])


    return (
        <>

        </>
    )
}