import { useEffect, useState } from 'react'
import './Produto.scss'

export default function Produto() {
    const [produto, setProduto] = useState([])

    useEffect(() => {
        // pegando parametro da url (id produto)
        const url = window.location.href;
        const parametro = url.split('/produto/')[1];

        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:4000/verProduto/' + parametro);
                const data = await response.json()
                setProduto(...produto, data)
                
                console.log(produto.url) 
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchProdutos();
    }, [])


    return (
        <>
            <div>
                <h1>img</h1>
                <img src={produto.url} alt="img" />
            </div>
        </>
    )
}