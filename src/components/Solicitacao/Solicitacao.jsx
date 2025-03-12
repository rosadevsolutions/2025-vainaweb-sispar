import IconDelete from "../../assets/Solicitacao/icon-delete.svg";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NavBar from "../NavBar/NavBar";
import styles from "./Solicitacao.module.scss";

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
                <div className={styles.form__container1__top}>
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
                </div>
                <div className={styles.form__container1__bottom}>
                  <div className={`${styles.form__field} ${styles.form__field__reembolso}`}>
                    <label className={styles.form__label}>Descrição / Motivo do Reembolso</label>
                    <input className={`${styles.form__input} ${styles.form__input__reembolso}`} type="text" name="descricao" />
                  </div>
                </div>
              </div>

              <div className={styles.form__spacer}></div>

              <div className={styles.form__container2}>
                <div className={styles.form__container2__top}>
                  <div className={`${styles.form__field} ${styles.form__field__date}`}>
                    <label className={styles.form__label}>Data</label>
                    <input className={`${styles.form__input} ${styles.form__input__date}`} type="date" name="date" />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__tiposdespesas}`}>
                    <label className={styles.form__label}>Tipos de Despesas</label>
                    <select className={`${styles.form__select} ${styles.form__select__tiposdespesas}`}>
                      <option  className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="" disabled selected hidden>Selecionar</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="alimentacao">Alimentação</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="combustuivel">Combustível</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="conducao">Condução</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="estacionamento">Estacionamento</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="viagemAdministrativa">Viagem Administrativa</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="viagemOperacional">Viagem Operacional</option>
                      <option className={`${styles.form__option} ${styles.form__option__tiposdespesas}`} value="eventosRepresentacao">Eventos de Representação</option>
                    </select>
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__centrocustos}`}>
                    <label className={styles.form__label}>Centro de Custos</label>
                    <select className={styles.form__select}>
                      <option  className={`${styles.form__option} ${styles.form__option__centrocustos}`} value="" disabled selected hidden>Selecionar</option>
                      <option className={`${styles.form__option} ${styles.form__option__centrocustos}`} value="controlesInternos">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                      <option className={`${styles.form__option} ${styles.form__option__centrocustos}`} value="vicePresidenciaFinancas">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                      <option className={`${styles.form__option} ${styles.form__option__centrocustos}`} value="contabilidade">1100110102 - FIN CONTABILIDADE MTZ</option>
                    </select>
                  </div>
                </div>


                <div className={styles.form__container2__bottom}>
                  <div className={styles.form__container2__bottom__left}>
                    <div className={`${styles.form__field} ${styles.form__field__ordint}`}>
                      <label className={styles.form__label}>Ord. Int.</label>
                      <input className={`${styles.form__input} ${styles.form__input__ordint}`} type="text" name="ordint" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__div}`}>
                      <label className={styles.form__label}>Div.</label>
                      <input className={`${styles.form__input} ${styles.form__input__div}`} type="text" name="div" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__pep}`}>
                      <label className={styles.form__label}>PEP</label>
                      <input className={`${styles.form__input} ${styles.form__input__pep}`} type="text" name="pep" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__moeda}`}>
                      <label className={styles.form__label}>Moeda</label>
                      <input className={`${styles.form__input} ${styles.form__input__moeda}`} type="text" name="moeda" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__distkm}`}>
                      <label className={styles.form__label}>Dist / Km</label>
                      <input className={`${styles.form__input} ${styles.form__input__distkm}`} type="text" name="distkm" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__valorkm}`}>
                      <label className={styles.form__label}>Valor / Km</label>
                      <input className={`${styles.form__input} ${styles.form__input__valorkm}`} type="text" name="valorkm" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__valorfaturado}`}>
                      <label className={styles.form__label}>Val. Faturado</label>
                      <input className={`${styles.form__input} ${styles.form__input__valorfaturado}`} type="text" name="valorfaturado" />
                    </div>

                    <div className={`${styles.form__field} ${styles.form__field__despesas}`}>
                      <label className={styles.form__label}>Despesas</label>
                      <input className={`${styles.form__input} ${styles.form__input__despesas}`} type="text" name="despesas" />
                    </div>
                  </div>

                  <div className={styles.form__container2__bottom__right}>
                    <button className={`${styles.form__button} ${styles.form__field__maissalvar}`} type="submit" name="maissalvar" value="salvar">+ Salvar</button>
                    <button className={`${styles.form__button} ${styles.form__field__limpar}`} type="submit" name="limpar" value="limpar">
                      <img src={IconDelete} alt="Delete" title="Delete" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
