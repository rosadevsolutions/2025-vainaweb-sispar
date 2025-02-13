import { useNavigate } from "react-router-dom"
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
    <main className={styles.loginWrapper}>
      <section className={styles.fotoWrapper}>
      </section>

      <section className={styles.formWrapper}>
        <div>
          <h1>Boas vindas ao novo portal SISPAR</h1>
          <p>Sistema der Emissão de Boletos e Parcelamento</p>
        </div>

        <div>
          <button onClick={ irReembolso }>Entrar</button>
          <button onClick={ irSolicitacao }>Criar Conta</button>
        </div>
      </section>


    </main>
  )
}
