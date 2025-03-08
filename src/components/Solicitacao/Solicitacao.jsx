import Breadcrumb from "../Breadcrumb/Breadcrumb"
import NavBar from "../NavBar/NavBar"
import styles from "./Solicitacao.module.scss"

export default function Solicitacao() {
  return (
    <div className={styles.page__wrapper}>
      <NavBar />
      <div className={styles.page__content}>
        <Breadcrumb activePage={`Solicitação`} />

        <main className={styles.main__wrapper}>
          <div className={styles.main__content}>
            <form  className={styles.form__wrapper}>
              <div className={styles.form__container1}>
                <div className={`${styles.form__field} ${styles.form__field__nome}`}>
                  <label className={styles.form__label}>Nome Completo</label>
                  <input className={`${styles.form__input} ${styles.form__input__nome}`} type="text" name="nomeCompleto" />
                </div>

                <div className={`${styles.form__field} ${styles.form__field__empresa}`}>
                  <label className={styles.form__label}>Empresa</label>
                  <input className={`${styles.form__input} ${styles.form__input__empresa}`} type="text" name="empresa" />
                </div>

                <div className={`${styles.form__field} ${styles.form__field__prestacao}`}>
                  <label className={styles.form__label}>N. Prest. Contas</label>
                  <input className={`${styles.form__input} ${styles.form__input__prestacao}`} type="number" name="prestacaoContas" />
                </div>

                <div className={`${styles.form__field} ${styles.form__field__reembolso}`}>
                  <label className={styles.form__label}>Descrição / Motivo do Reembolso</label>
                  <input className={`${styles.form__input} ${styles.form__input__reembolso}`} type="text" name="descricao" />
                </div>
              </div>

              <div className={styles.form__spacer}></div>

              <div className={styles.form__container2}>
                <div className={`${styles.form__field} ${styles.form__field__data}`}>
                  <label className={styles.form__label}>Data</label>
                  <input className={`${styles.form__input} ${styles.form__input__data}`} type="datetime-local" name="data" />
                </div>

                <div className={`${styles.form__field} ${styles.form__field__despesas}`}>
                  <label className={styles.form__label}>Tipos de Despesas</label>
                  <select className={`${styles.form__select} ${styles.form__select_despesas}`}>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="alimentacao">Alimentação</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="combustuivel">Combustível</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="conducao">Condução</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="estacionamento">Estacionamento</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="viagemAdministrativa">Viagem Administrativa</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="viagemOperacional">Viagem Operacional</option>
                    <option className={`${styles.form__option} ${styles.form__option__despesas}`} value="eventosRepresentacao">Eventos de Representação</option>
                  </select>
                </div>

                <div className={`${styles.form__field} ${styles.form__field__custos}`}>
                  <label className={styles.form__label}>Centro de Custos</label>
                  <select className={styles.form__select}>
                    <option className={`${styles.form__option} ${styles.form__option__custos}`} value="controlesInternos">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                    <option className={`${styles.form__option} ${styles.form__option__custos}`} value="vicePresidenciaFinancas">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                    <option className={`${styles.form__option} ${styles.form__option__custos}`} value="contabilidade">1100110102 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
