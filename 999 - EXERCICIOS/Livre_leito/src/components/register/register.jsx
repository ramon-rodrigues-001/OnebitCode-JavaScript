import styles from './register.module.scss'
import { Link } from "react-router-dom"

function Register() {

  function exibirSenha() {
    const inputSenha_1 = document.querySelector('#senha-1')
    const inputSenha_2 = document.querySelector('#senha-2')
    const btnExibir = document.querySelector('#exibir')

    if (inputSenha_1.type === "password") {
      inputSenha_1.type = "text"
      inputSenha_2.type = "text"
      btnExibir.innerHTML = "COBRIR SENHA"
    }
    else if (inputSenha_1.type === "text") {
      inputSenha_1.type = 'password'
      inputSenha_2.type = 'password'
      btnExibir.innerHTML = "MOSTRAR SENHA"
    }
  }


  return (
    <section className={styles.sectionRegister}>
        <div className={styles.cardRegister}>
          <h1>REGISTER <img src="./logo-transparent.png" alt="logo" className={styles.logo} /></h1>

          <form action="#" className={styles.formulario}>
            <div>
              <label htmlFor="nome" className={styles.label}>Nome comleto: </label> <br />
              <input type="text" placeholder='Ramon Rodrigues' className={styles.input} id='nome'/>
            </div>

            <div>
              <label htmlFor="email" className={styles.label}>Email: </label> <br />
              <input type="text" placeholder='@gmail.com' className={styles.input} id='email'/>
            </div>

            <div>
              <label htmlFor="senha-1" className={styles.label}>Senha: </label> <br />
              <input type="password" placeholder='12345' className={styles.input} id='senha-1'/>
            </div>

            <div>
              <label htmlFor="senha-2" className={styles.label}>Comfirmar Senha: </label> <br />
              <input type="password" placeholder='12345' className={styles.input} id='senha-2'/>
              <p onClick={exibirSenha} className={styles.Exibir} id='exibir'>
                MOSTRAR SENHA
              </p>
            </div>
          </form>


          <Link to="/vitrine" className={styles.examinador}>
              Confirmar
          </Link>
          <Link to="/vitrine" className={styles.examinador}>
              Entar sem login
          </Link>
          
          <Link to="/login" className={styles.linkLogin}>já possuo uma conta</Link>
        </div>
    </section>
  )
}
  
export default Register