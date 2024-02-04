import styles from "./cards.module.scss"

export default function Cards() {
    return (
        <section className={styles.sectionCards} id="ancoraCategorias">
            <p className={styles.subTitle}>QUEM SOMOS</p>

            <div className={styles.containerDeCards}>
                <p className={styles.descricao}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo ab dignissimos, iusto aliquid cumque numquam quos unde possimus minus. Accusantium voluptates delectus odit suscipit obcaecati consectetur modi ratione consequatur! <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis culpa, ducimus veniam vitae possimus incidunt, non ab libero at accusantium provident laboriosam! Reprehenderit vitae odio dignissimos velit soluta, distinctio facereiosam! Reprehenderit vitae odio dignissimos velit soluta, distinctio facere..</p>
            </div>
        </section>
    )
}