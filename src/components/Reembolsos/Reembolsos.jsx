import IconAnalise from "../../assets/Reembolsos/icon-analise.svg"
import IconAprovados from "../../assets/Reembolsos/icon-aprovados.svg"
import IconHistorico from "../../assets/Reembolsos/icon-historico.svg"
import IconRejeitados from "../../assets/Reembolsos/icon-rejeitados.svg"
import IconSolicitados from "../../assets/Reembolsos/icon-solicitados.svg"
import IconSolicitarReembolso from "../../assets/Reembolsos/icon-solicitar.svg"
import IconStatus from "../../assets/Reembolsos/icon-status.svg"
import IconVerificarAnalises from "../../assets/Reembolsos/icon-verificar.svg"
import Breadcrumb from "../Breadcrumb/Breadcrumb"
import styles from "./Reembolsos.module.scss"

export default function Reembolsos() {
  return (
    <div className="page__wrapper">
      <aside className="aside__wrapper">
        Aside
      </aside>
      <div className={styles.main__wrapper}>
        <Breadcrumb activePage={`Reembolsos`} />

        <main className={styles.main__content}>
          <section className={styles.infos__wrapper}>
            <h1 className={styles.infos__title}>Sistema de Reembolso</h1>
            <p className={styles.infos__text}>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
          </section>

          <section className={styles.services__wrapper}>
            <articles className={styles.services__card}>
              <img src={IconSolicitarReembolso} className={styles.services__icon} alt="ícone solicitar reembolso" title="Solicitar reembolso" />
              <h3 className={styles.report__title}>Solicitar Reembolso</h3>
            </articles>

            <articles className={styles.services__card}>
              <img src={IconHistorico} className={styles.services__icon} alt="ícone verificar análises" title="Verificar análises" />
              <h3 className={styles.report__title}>Verificar Análises</h3>
            </articles>

            <articles className={styles.services__card}>
              <img src={IconVerificarAnalises} className={styles.services__icon} alt="ícone de histórico"  title="Histórico" />
              <h3 className={styles.report__title}>Histórico</h3>
            </articles>
          </section>


          <section className={styles.report__wrapper}>
            <articles className={styles.report__card}>
              <div className={styles.report__icon__wrapper}>
                <img src={IconSolicitados} className={styles.report__icon} alt="ícone solitados" title="Solicitados" />
              </div>
              <p className={styles.report__value}>182</p>
              <p className={styles.report__info}>Solicitados</p>
            </articles>

            <articles className={styles.report__card}>
              <div className={styles.report__icon__wrapper}>
                <img src={IconAnalise} className={styles.report__icon} alt="ícone em análise" title="Em análise" />
              </div>
              <p className={styles.report__value}>74</p>
              <p className={styles.report__info}>Em análise</p>
            </articles>

            <articles className={styles.report__card}>
              <div className={styles.report__icon__wrapper}>
                <img src={IconAprovados} className={styles.report__icon} alt="ícone aprovados" title="Aprovados" />
              </div>
              <p className={styles.report__value}>195</p>
              <p className={styles.report__info}>Aprovados</p>
            </articles>

            <articles className={styles.report__card}>
              <div className={styles.report__icon__wrapper}>
                <img src={IconRejeitados} className={styles.report__icon} alt="ícone rejeitados" title="Rejeitados" />
              </div>
              <p className={styles.report__value}>41</p>
              <p className={styles.report__info}>Rejeitados</p>
            </articles>
          </section>

          <section className="status__wrapper">
            <img src={IconStatus} className="status__icon" alt="ícone sistema atualizado" title="Sistema atualizado" />
            <p className="status__info">Sistema atualizado.</p>
          </section>

        </main>
      </div>
    </div>
  )
}
