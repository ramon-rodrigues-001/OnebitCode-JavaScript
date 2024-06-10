import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Produto.scss';

export default function Produto() {
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const url = window.location.href;
                const parametro = url.split('/produto/')[1];

                const response = await fetch(`http://localhost:4000/verProduto/${parametro}`);
                const data = await response.json();
                
                setProduto(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduto();
    }, []);


    if (!produto) {
        return <div>Loading...</div>;
    }

    return (
        <div className='produto_selecionado'>
            <p className='title'>{produto[0].nomdeProduto}</p>

            <div className="corrossel_imagens">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={produto[0].url} alt="img" className='imagem_produto'/>
                        </div>
                        {/* <div className="carousel-item">
                            <h2>2</h2>
                        </div>
                        <div className="carousel-item">
                            <h2>3</h2>
                        </div> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <div className='preco'>
                <s>
                    <p className='precoAntigo'>R$ {produto[0].valorAntigo},00</p>
                </s>
                <h2>R$ {produto[0].valorAtual},00</h2>
                <p>Ou em até 10X de: R${Math.ceil(produto[0].valorAtual / 10)},00</p>
            </div>

            <div className='detalhes'>
                <p><strong>Entrega em todo pais</strong></p>
                <p><strong>Modo de envio</strong>: Correio</p>
                <p><strong>Vendido por</strong>: Fror de Liz</p>
            </div>

            <div className='btns_comprar_add'>
                <button className='comprar'>Comprar</button>
                <button>Adicioar ao carrinho</button>
            </div>
        </div>
    );
}
