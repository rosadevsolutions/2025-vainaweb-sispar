import { useNavigate } from "react-router-dom"
import LoginBackgroud from "../../assets/Login/navio-cargueiro-wilson-sons.png"
import ButtonLogin from "../ButtonLogin/ButtonLogin"
import ButtonText from "../ButtonText/ButtonText"
import styles from "./Login.module.scss"

export default function Login (){

  const navigate = useNavigate()

  const irReembolso = () => {
    navigate("/reembolsos")
  }

const irSolicitacao = () => {
    navigate("/solicitacao")
  }



  return (
    <main className ={ styles.login__wrapper }>
      <img src = { LoginBackgroud } className ={ styles.login__background } />

      <section className = { styles.login__content }>
        <div className = { styles.login__contentWrapper }>
          <div className = { styles.login__texts }>
            <h1 className = { styles.login__brand }>Wilson Sons</h1>
            <h2 className = { styles.login__welcome }>Boas vindas ao Novo Portal SISPAR</h2>
            <p  className = { styles.login__systemName }>Sistema de Emissão de Boletos e Parcelamento</p>
          </div>

          <form className = { styles.form__wrapper }>
            <div>
              <input type="text" placeholder="E-mail" />
            </div>
            <div>
              <input type="text" placeholder="Senha" />
            </div>
            <ButtonText cta = "Esqueci minha senha" onClick = { irSolicitacao }/>

          </form>

          <div className = { styles.buttons__wrapper }>
            <ButtonLogin cta = "Entrar" onClick = { irReembolso } />
            <ButtonLogin cta = "Criar conta" onClick = { irSolicitacao }/>
          </div>

        </div>
      </section>


    </main>
  )
}
