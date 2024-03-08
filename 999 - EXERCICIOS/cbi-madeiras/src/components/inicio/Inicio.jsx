import styles from './Inicio.module.scss'

export default function inicio() {
    return (
        <div className={styles.inicio}>
            <div className={styles.texto_inicio}>
                <h1 className={styles.title_inicial}>
                    MADEIRA DE ELCALIPTO DE 
                    <span className={styles.destaque_titulo}> ALTA QUALIDADE</span>
                </h1>
                <p>
                    O Eucalipto Tratado (Imunizado) comercializado pela Campo Alegre busca atender a uma extensa gama de segmentos produtivos, e obedece a várias exigências antes de chegar ao mercado.
                </p>
            </div>
            <div className={styles.img_inicio}>
                <img src="https://www.cbimadeiras.com.br/arquivo/galeria_foto/07.jpg" alt="imagem de tabas e madeiras" className={styles.img_madeira_inicio} />
            </div>
            
            <div className={styles.custom_shape_divider_bottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className={styles.shape_fill}></path>
                </svg>
            </div>
        </div>
    )
}