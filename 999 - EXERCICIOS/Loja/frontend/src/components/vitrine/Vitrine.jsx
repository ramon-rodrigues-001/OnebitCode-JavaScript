import { useEffect, useState } from 'react'
import './Vitrine.scss'

export default function Vitrine() {
    const [produtos, setProdutos] = useState([])


    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/produtos');
                const data = await response.json()
                setProdutos(data)
                
                console.log(produtos)
            }
            catch (error) {
                console.log(error)
            }

        }

        fetchProdutos();
    }, []);


    return (
        <>
            <div className="container_vitrine">


                <div className='card_produto'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNahVJbRZM9TTVjRDuF60tz3aJ6tGr2OD_Q&usqp=CAU" alt="" />
                    <h3>Canivete Taur 61 Tatic</h3>

                    <div className='div_preco'>
                        <s>R$ 129,00</s>
                        <p className='valor'>R$ 97,00</p>
                        <p className='parcela'>Até 10x de R$10,00</p>
                    </div>
                    

                    <button className='button_ver_produto'>
                        <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                        Ver Produto
                    </button>
                </div>




 

                {  
                    produtos.map((p) => (
                        <div className='card_produto'>
                            <img src={p.url} alt="Imagem Do Produto" />

                            <div>
                                <h3>{p.nomdeProduto}</h3>
                                <div className='div_preco'>
                                    <s>R$ {p.valorAntigo},00</s>
                                    <p className='valor'>
                                        R$ {p.valorAtual},00
                                    </p>
                                    <p>Até 10x de R${(p.valorAtual / 10) + 1},00</p>
                                </div>
                            </div>

                            <button className='button_ver_produto'>
                                <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                Ver Produto
                            </button>
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}