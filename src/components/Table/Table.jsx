import IconMotivo from "../../assets/Solicitacao/icon-motivo.svg";
import IconTrash from "../../assets/Solicitacao/icon-trash.svg";
import styles from "./Table.module.scss";

export default function Table() {
  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table__content}>
        <thead className={styles.table__head}>
          <tr>
            <th></th>
            <th>Colaborador(a)</th>
            <th className={`${styles.table__line} ${styles.table__line__empresa}`}>Empresa</th>
            <th>Nº Prest.</th>
            <th>Data</th>
            <th>Motivo</th>
            <th className={`${styles.table__line} ${styles.table__line__tipodespesas}`}>Tipo de Despesa</th>
            <th className={`${styles.table__line} ${styles.table__line__centrocustos}`}>Ctr. Custo</th>
            <th>Ord. Int.</th>
            <th>Div.</th>
            <th>PEP</th>
            <th>Moeda</th>
            <th>Dist. Km</th>
            <th>Val. Km</th>
            <th>Val. Faturado</th>
            <th>Despesa</th>
          </tr>
        </thead>
        <tbody  className={styles.table__body}>
          <tr>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__trash}`} src={IconTrash} alt="Trash" title="Deletar linha" />
              </button>
            </td>
            <td>
              <p>Romulo Rosa</p>
            </td>
            <td>
              <p>Rosadev Solutions</p>
            </td>
            <td>
              <p>329456</p>
            </td>
            <td>
              <p>10/03/2025</p>
            </td>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__motivo}`} src={IconMotivo} alt="Motivo" title="Motivo" />
              </button>
            </td>
            <td>
              <p>Desp. de viagem administrativa</p>
            </td>
            <td>
              <p>1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</p>
            </td>
            <td>
              <p>0003</p>
            </td>
            <td>
              <p>002</p>
            </td>
            <td>
              <p>001</p>
            </td>
            <td>
              <p>BRL</p>
            </td>
            <td>
              <p>434Km</p>
            </td>
            <td>
              <p>0.65</p>
            </td>
            <td>
              <p>242.10</p>
            </td>
            <td>
              <p>40.05</p>
            </td>
          </tr>
          <tr>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__trash}`} src={IconTrash} alt="Trash" title="Deletar linha" />
              </button>
            </td>
            <td>
              <p>Samuel Silvero</p>
            </td>
            <td>
              <p>Vai na Web</p>
            </td>
            <td>
              <p>987789</p>
            </td>
            <td>
              <p>09/03/2025</p>
            </td>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__motivo}`} src={IconMotivo} alt="Motivo" title="Motivo" />
              </button>
            </td>
            <td>
              <p>Desp. de viagem administrativa</p>
            </td>
            <td>
              <p>1100110102 - FIN CONTABILIDADE MTZ</p>
            </td>
            <td>
              <p>0002</p>
            </td>
            <td>
              <p>005</p>
            </td>
            <td>
              <p>001</p>
            </td>
            <td>
              <p>ARS</p>
            </td>
            <td>
              <p>289Km</p>
            </td>
            <td>
              <p>0.37</p>
            </td>
            <td>
              <p>106.93</p>
            </td>
            <td>
              <p>0.00</p>
            </td>
          </tr>
          <tr>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__trash}`} src={IconTrash} alt="Trash" title="Deletar linha" />
              </button>
            </td>
            <td>
              <p>Karine</p>
            </td>
            <td>
              <p>Wilson Sons</p>
            </td>
            <td>
              <p>546791</p>
            </td>
            <td>
              <p>08/03/2025</p>
            </td>
            <td>
              <button className={styles.table__button}>
                <img className={`${styles.table__icon} ${styles.table__icon__motivo}`} src={IconMotivo} alt="Motivo" title="Motivo" />
              </button>
            </td>
            <td>
              <p>Eventos de apresentação</p>
            </td>
            <td>
              <p>1100109002 - FIN CONTROLES INTERNOS MTZ</p>
            </td>
            <td>
              <p>0001</p>
            </td>
            <td>
              <p>005</p>
            </td>
            <td>
              <p>001</p>
            </td>
            <td>
              <p>USD</p>
            </td>
            <td>
              <p>197Km</p>
            </td>
            <td>
              <p>0.75</p>
            </td>
            <td>
              <p>109.75</p>
            </td>
            <td>
              <p>29.97</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
