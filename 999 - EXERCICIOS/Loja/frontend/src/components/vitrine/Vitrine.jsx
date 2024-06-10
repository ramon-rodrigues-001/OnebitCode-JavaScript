import { useEffect, useState, useRef } from 'react';
import './Vitrine.scss';

export default function Vitrine() {
    const [showScroll, setShowScroll] = useState(false)
    const [produtos, setProdutos] = useState([]);
    const carrosselRef = useRef(null);

    // Pegar os produtos do back-end e salvar em um const (State)
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/produtos');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProdutos();
    }, []);

    // Fazer o carrossel com as categorias
    useEffect(() => {
        if (carrosselRef.current && produtos.length > 0) {
            const intervalo = setInterval(() => {
                carrosselRef.current.appendChild(carrosselRef.current.firstElementChild);
            }, 4000);

            return () => clearInterval(intervalo);
        }
    }, [produtos]);

    // Ativar seta de voltar ao topo quando o scroll for realizado
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const scrollToTop = () => { // Voltar ao topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <div className="container_vitrine" >
                {/* ==== Carrossel de categorias topo da vitrine ==== */}

                <div className='carrossel_categorias' ref={carrosselRef}>
                    <div className="card_categoria">
                        <img src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzMwOTY4MHxpbWFnZS9wbmd8aDkzL2gyNi8xNjc0MTkzNTcxMDIzOC5wbmd8ZDI4OGI0YzEyMWQ2MGRmZjExZTdkNThmZWZiOGI2MDU1NzVjYTU5NDUyNmQzNjBmNWNhOTM2OGY1MjU4ZDI1ZQ/12_Ideapad_1_Hero_Front_Tilted.png" alt="" />
                    </div>
                    <div className="card_categoria">
                        <img src="https://www.bright.com.br/media/djcatalog2/images/item/2/suporte-notebook_f.png" alt="" />
                    </div>
                    <div className="card_categoria">
                        <img src="https://images.samsung.com/is/image/samsung/p6pim/pt/2401/gallery/pt-galaxy-s24-plus-sm-s926bzvdeub-thumb-539352784" alt="" />
                    </div>
                    <div className="card_categoria">
                        <img src="https://htclick.com.br/wp-content/uploads/2019/09/cq5dam.web_.600.600-1.png" alt="" />
                    </div>
                    <div className="card_categoria">
                        <img src="https://acdn.mitiendanube.com/stores/001/785/794/products/sfccb3b1c91e14772acacf30e82fd273ck-b676b954ee6267196816898981692309-1024-1024.png" alt="" />
                    </div>
                    <div className="card_categoria">
                        <img src="https://i5.walmartimages.com/seo/Lenovo-Tab-M10-Plus-3rd-Gen-10-Tablet-64GB-Storage-4GB-Memory-Android-12-FHD-Display_6d20d86e-e339-4dea-a97d-788dbf71f08c.50da7e377a5410315db7b2430fc13a86.png" alt="" />
                    </div>
                </div>
                

     



                {/* ==== Renderizador de produtos do banco de dados ==== */}

                <div className='container_produtos'>


                <a href={'#'} className='linkVerProduto'>
                            <div className='card_produto'>
                                <img src={'https://www.redequerobahiajaguaquara.com.br/image/cache/catalog/querobahia-notebook/11-1000x1000.PNG'} alt="Imagem Do Produto" />
                                <div>
                                    <h3>Notebook dell i5</h3>
                                    <div className='div_preco'>
                                        <s>R$ 2430,00</s>
                                        <p className='valor'>
                                            R$ 2000,00
                                        </p>
                                    </div>
                                </div>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                            </div>
                        </a>
                        <a href={'#'} className='linkVerProduto'>
                            <div className='card_produto'>
                                <img src={'https://blog.avell.com.br/wp-content/uploads/2022/08/lite.png'} alt="Imagem Do Produto" />
                                <div>
                                    <h3>Notebook dell i5</h3>
                                    <div className='div_preco'>
                                        <s>R$ 2430,00</s>
                                        <p className='valor'>
                                            R$ 2000,00
                                        </p>
                                    </div>
                                </div>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                            </div>
                        </a>
                        




                    {produtos.map(p => (
                        <a href={'produto/'+ p._id} className='linkVerProduto' key={p._id}>
                            <div className='card_produto'>
                                <img src={p.url} alt="Imagem Do Produto" />
                                <div>
                                    <h3>{p.nomdeProduto}</h3>
                                    <div className='div_preco'>
                                        <s>R$ {p.valorAntigo},00</s>
                                        <p className='valor'>
                                            R$ {p.valorAtual},00
                                        </p>
                                    </div>
                                </div>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                                <button className='button_ver_produto'>
                                    <i className="bi bi-bag-check-fill" id='icon_ver_produto'></i> 
                                    Ver Produto
                                </button>
                            </div>
                        </a>
                    ))}
                </div>



                {/* ==== Seta para levar de volta ao topo ==== */}

                {showScroll && (
                    <a href="#" className='icone_voltar_ao_topo' onClick={scrollToTop} >
                        <img src="https://cdn-icons-png.flaticon.com/512/4856/4856809.png" alt="" />
                    </a>
                )}
            </div>
        </>
    );
}
