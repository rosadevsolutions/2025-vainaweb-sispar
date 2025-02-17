import Breadcrumb from "../Breadcrumb/Breadcrumb"
import styles from "./Reembolsos.module.scss"

export default function Reembolsos() {
  return (
    <div>
      <Breadcrumb activePage={`Reembolsos`} />

      <main className={styles.main__wrapper}>
        <div className={styles.content__wrapper}>
          <section className={styles.infos__wrapper}>
            <h1 className={styles.infos__title}>Sistema de Reembolso</h1>
            <p className={styles.infos__text}>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
          </section>

          <section className={styles.services__wrapper}>
            <article className={styles.services__card}>
              <img className={styles.services__icon} alt="ícone solicitar reembolso." />
              <h3 className={styles.services__title}>Texto</h3>
            </article>

            <article className={styles.services__card}>
              <img className={styles.services__icon} alt="ícone solicitar reembolso." />
              <h3 className={styles.services__title}>Texto</h3>
            </article>

            <article className={styles.services__card}>
              <img className={styles.services__icon} alt="ícone solicitar reembolso." />
              <h3 className={styles.services__title}>Texto</h3>
            </article>
          </section>

          <section className={styles.report__wrapper}>
            <articles className={styles.report__card}>
              <img className={styles.report__icon} alt="ícone solicitar reembolso." />
              <p className={styles.report__metrics}>99</p>
              <p className={styles.report__info}>Info</p>
            </articles>

            <articles className={styles.report__card}>
              <img className={styles.report__icon} alt="ícone solicitar reembolso." />
              <p className={styles.report__metrics}>99</p>
              <p className={styles.report__info}>Info</p>
            </articles>

            <articles className={styles.report__card}>
              <img className={styles.report__icon}  alt="ícone solicitar reembolso." />
              <p className={styles.report__metrics}>99</p>
              <p className={styles.report__info}>Info</p>
            </articles>

            <articles className={styles.report__card}>
              <img className={styles.report__icon}  alt="ícone solicitar reembolso." />
              <p className={styles.report__metrics}>99</p>
              <p className={styles.report__info}>Info</p>
            </articles>
          </section>

          <section className="status__wrapper">
            <img className="status__icon" alt="ícone solicitar reembolso." />
            <p className="status__info">Sistema atualizado.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
