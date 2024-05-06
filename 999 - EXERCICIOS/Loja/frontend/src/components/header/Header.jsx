import './Header.scss'

export default function Header(props) {
    return (
        <header className='header'>

            <div className="container_heade">

                <div className='icones_menu_pesquisa'>
                    <div className="icon_menu" onClick={props.mudarParaBackend}>
                        <div className="traco" id='traco_1'></div>
                        <div className="traco" id='traco_2'></div>
                        <div className="traco" id='traco_3'></div>
                    </div>
                    
                    <div className='icon_pesquisa'>
                        <i class="bi bi-search"></i>
                    </div>
                </div>

                <img src="https://www.zarla.com/images/zarla-chanel-combination-logo-2400x2400-20210831.png?crop=1:1,smart&width=150&dpr=2" alt="logo da loja" id='logo_header'/>

                <div>
                    <button type="button" id='carrinho'>
                        <i class="bi bi-bag-check-fill" id='icon_carrinho'></i>
                        <span className='num_carinho'>
                            4
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}