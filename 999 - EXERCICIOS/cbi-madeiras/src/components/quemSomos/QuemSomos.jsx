import styles from './QuemSomos.module.scss';

export default function Header() {
    return (
        <div className={styles.quem_somos}>
            <h2 className={styles.title_quem_somos}>CBI MADEIRAS A MAIS MODERNA E SEGURA USINA DE TRATAMENTO DE MADEIRA DA AMÉRICA LATINA</h2>

            <div className={styles.container_cards_quem_somos}>
                <div className={styles.card_quem_somos} id={styles.card_principal}>
                    <span className={styles.title_cards_quem_somos}>Quem Somos</span>
                    A CBI Madeiras investe em reflorestamento, produção, tratamento e comercialização de madeira de eucalipto. Suas fazendas estão localizadas nas melhores regiões de reflorestamento do país, onde todos os processos são verticalizados, desde o plantio até a entrega aos clientes. Eles possuem máquinas, equipamentos e frota própria para garantir segurança, qualidade e pontualidade em todas as etapas.
                </div>
                <div className={styles.card_quem_somos}>
                    <span className={styles.title_cards_quem_somos}>qualidade</span>
                    
                    A CBI Madeiras é a única empresa de tratamento de madeira no Brasil com o selo de qualidade "Qualitrat Pleno", da ABPM ((Associação Brasileira de Preservadores de Madeira)), garantindo qualidade e legalidade aos consumidores.
                </div>
                <div className={styles.card_quem_somos}>
                    <span className={styles.title_cards_quem_somos}>Missão</span>
                    Produzir e comercializar madeira de eucalipto reflorestada, tratada e de qualidade, por um preço justo,     substituindo a madeira nativa, com soluções que atendam as exigências dos clientes.
                </div>
                <div className={styles.card_quem_somos}>
                    <span className={styles.title_cards_quem_somos}>Visão de Futuro</span>
                    Consolidar a posição de empresa confiável, inovadora e de referência no mercado, alicerçada pela sustentabilidade econômica, social e ambiental.
                </div>
            </div>
        </div>
    )
}
