import SolicitacaoButton from "../SolicitacaoButton/SolicitacaoButton";
import styles from "./SolicitacaoTotals.module.scss";

export default function SolicitacaoTotals (){
  return (
    <div className={styles.totals__wrapper}>
      <div className={`${styles.totals__content} ${styles.totals__content__totalfaturado}`}>
        <p className={styles.totals__label}>Total Faturado</p>
        <div className={styles.totals__out}>458.78</div>
      </div>
      <div className={`${styles.totals__content} ${styles.totals__content__totaldespesa}`}>
        <p className={styles.totals__label}>Total Despesa</p>
        <div className={styles.totals__out}>70.02</div>
      </div>
      <SolicitacaoButton cta="Enviar para Análise" />
      <SolicitacaoButton cta="Cancelar Solicitação" />
    </div>
  );
}
