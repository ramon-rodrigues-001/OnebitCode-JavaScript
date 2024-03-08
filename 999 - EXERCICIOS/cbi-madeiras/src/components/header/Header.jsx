import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="https://www.cbimadeiras.com.br/imagem/logotipo5.png" alt="logo CBI madeiras" className={styles.logo_header} />

            <div className={styles.nav}>
                <ul>
                    <li>inicio</li>
                    <li>Quem somos</li>
                    <li>Prodrutos</li>
                    <li>contatos</li>
                    <li>Quem somos</li>
                </ul>
            </div>

            <button className={styles.btn_whatsapp}>Whatsapp</button>
        </header>
    )
}
