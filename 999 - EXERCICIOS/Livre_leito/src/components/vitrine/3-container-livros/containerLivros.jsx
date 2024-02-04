import styles from './containerLivros.module.scss';

export default function ContainerLivros() {
    return (
        <section className={styles.sectionLivros}>
            <div className={styles.containerLivro}>

                <div className={styles.pesquisa} >
                    <input type="text" className={styles.inputPesquisa} placeholder='Procurar'/>
                    <img src="./icone-lupa.png" alt="" className={styles.imgLupa}/>
                </div>

                <div className={styles.espacoDeLivros}>
                    <div className={styles.cardLivro}>
                        <img src="https://s3.us-east-1.amazonaws.com/mercadoblackmoney.bemarketplace.com.br/protagonista_442c.png" alt="" className={styles.livros}/>

                        <a href="/livro">
                            <div className={styles.divCarrin}><img src="/carrinho-apagar.png" alt="" className={styles.carrin}/></div>
                        </a>

                        <h5>TECNOLOGIA O MOTO...</h5>
                        <div className={styles.divPrecos}>
                            <h3 className={styles.del}><s>R$24,00</s></h3>
                            <h3>R$16,90</h3>
                        </div>
                    </div>
                    {/* https://jamboeditora.com.br/wp-content/uploads/2021/11/jamboeditora-mockup-livro-f.png?x60014 */}
                    <div className={styles.cardLivro}>
                        <img src="https://jamboeditora.com.br/wp-content/uploads/2021/11/jamboeditora-mockup-livro-f.png?x60014" alt="" className={styles.livros}/>

                        <a href="/livro">
                            <div className={styles.divCarrin}><img src="/carrinho-apagar.png" alt="" className={styles.carrin}/></div>
                        </a>

                        <h5>PARANORMAL RPG...</h5>
                        <div className={styles.divPrecos}>
                            <h3 className={styles.del}><s>R$18,99</s></h3>
                            <h3>R$14,90</h3>
                        </div>
                    </div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                </div>

                <div>
                    <ul className={styles.paginatio}>
                        <li>
                            <a className={styles.pageLink} id={styles.previous}>Previous</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>1</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>2</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>3</a>
                        </li>
                        <li>
                            <a className={styles.pageLink} id={styles.next}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}