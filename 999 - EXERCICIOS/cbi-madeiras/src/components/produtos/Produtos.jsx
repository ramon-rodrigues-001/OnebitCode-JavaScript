import styles from './Produtos.module.scss'


export default function Prodrutos() {

    const trocaSelecionada = (event) => {
        const item = document.getElementsByClassName(styles.item)
        document.querySelector('#slide').appendChild(item[0])
    }
    const trocarPraFrente = () => {
        const item = document.getElementsByClassName(styles.item)
        document.querySelector('#slide').appendChild(item[0])
    }
    const trocarPratras = () => {
        const item = document.getElementsByClassName(styles.item)
        document.querySelector('#slide').prepend(item[item.length - 1])
    }
 
    return (
        <div className={styles.container_produtos}>
            <div className={styles.conatiner_btn_slide}>
                <button className={styles.btn_slider_produtos} onClick={trocarPratras}>
                    <i class="bi bi-caret-left-square-fill"></i>
                </button>
                <button className={styles.btn_slider_produtos} onClick={trocarPraFrente}>
                    <i class="bi bi-caret-right-square-fill"></i>
                </button>
            </div>
            
            <h2 className={styles.title_outros_produtos}>OUTROS NEGÓCIOS E PRODUTOS</h2>

            <div className={styles.slide} id='slide'>
                <div className={styles.item} style={{ backgroundImage: "url('/madeira4.jpg')"}} onClick={trocaSelecionada}>
                    <div className={styles.content}>
                        <div className={styles.name}>Eucalipto</div>
                        <div className={styles.des}>O eucalipto é uma alternativa sustentável às madeiras nativas, reduzindo a pressão sobre as florestas. A CBI Madeiras seleciona variedades ideais, como E. Cloeziana, adaptada à região da Chapada de Minas, oferecendo madeira de alta qualidade e resistente a fungos e insetos.</div>
                    </div>
                </div>

                <div className={styles.item} style={{ backgroundImage: "url('/Cafe.jpg')"}} onClick={trocaSelecionada}>
                    <div className={styles.content}>
                        <div className={styles.name}>Café</div>
                        <div className={styles.des}>Nossos cafés especiais seguem padrões rigorosos de qualidade e sustentabilidade, desde a colheita até a comercialização. Certificados por organizações renomadas como Rainforest Alliance, Utz Certified, 4 C e AMSC, nossas fazendas são reconhecidas por sua excelência em produção e conservação ambiental, além de contribuir para a geração de empregos.</div>
                        <a href='#' className={styles.Asses_Blog}>CLIQUE AQUI E ACESSE NOSSO BLOG</a>
                    </div>
                </div>

                <div className={styles.item}  style={{ backgroundImage: "url('/carvão.jpg')"}} onClick={trocaSelecionada}>
                    <div className={styles.content}>
                        <div className={styles.name}>Carvão</div>
                        <div className={styles.des}>O Brasil é líder na produção global de carvão vegetal, proveniente principalmente de florestas plantadas, essencial para indústrias siderúrgicas e metalúrgicas. Essa fonte renovável preserva florestas nativas, reduzindo as emissões de gases do efeito estufa. A CBI MADEIRAS otimiza o uso da madeira, destinando as sobras para a produção de carvão.</div>
                        <a href='#' className={styles.Asses_Blog}  style={{ backgroundColor: 'black'}}>CLIQUE AQUI E ACESSE NOSSO BLOG</a>
                    </div>
                </div>
                
                {/* <div className={styles.item}>
                    <div className={styles.content}>
                        <div className={styles.name}>Cruzetas Polimérica</div>
                        <div className={styles.des}>A POLIMADE da CBI Poliméricos é uma inovação em cruzetas elétricas, combinando madeira e fibra de vidro em um processo inteligente. Com tratamento superior e revestimento de fibra de vidro e resina polimérica, oferece impermeabilidade, regularidade dimensional e excelente acabamento, proporcionando alta resistência, durabilidade e confiabilidade. Atende às demandas do mercado de forma sustentável e econômica.</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}