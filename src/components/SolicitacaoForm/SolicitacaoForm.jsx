import { useState } from "react";
import IconDelete from "../../assets/Solicitacao/icon-delete.svg";
import styles from "./SolicitacaoForm.module.scss";


export default function SolicitacaoForm (){
  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [numeroPrestacao, setNumeroPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo dataAVANÇADO UTILIZANDO MODAL
  const [tipoDespesa, setTipoDespesa] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

  const [dadosReembolso, setDadosReembolso] = useState([]); // Estado para o campo Dados de Reembolso
  const [enviado, setEnviado] = useState(false); // State pra asber se o campo foi enviado

  const handleSubmit = () => {
    const objetoReembolso = {
      colaborador,
      empresa,
      numeroPrestacao,
      descricao,
      data,
      tipoDespesa,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    }
    setDadosReembolso(dadosReembolso.concat(objetoReembolso))
  }



  return (
    <form
      className={styles.form__wrapper}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.form__container1}>
        <div className={styles.form__container1__top}>
          <div className={`${styles.form__field} ${styles.form__field__nome}`}>
            <label className={styles.form__label}>Nome Completo</label>
            <input
              className={`${styles.form__input} ${styles.form__input__nome}`}
              value={colaborador}
              onChange={(e) => setColaborador(e.target.value)}
              type="text"
              name="colaborador"
            />
          </div>

          <div className={`${styles.form__field} ${styles.form__field__empresa}`}>
            <label className={styles.form__label}>Empresa</label>
            <input
              className={`${styles.form__input} ${styles.form__input__empresa}`}
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              type="text"
              name="empresa"
            />
          </div>

          <div className={`${styles.form__field} ${styles.form__field__prestacao}`}>
            <label className={styles.form__label}>Nº Prest. Contas</label>
            <input
              className={`${styles.form__input} ${styles.form__input__prestacao}`}
              value={numeroPrestacao}
              onChange={(e) => setNumeroPrestacao(e.target.value)}
              type="number"
              name="prestacaoContas"
            />
          </div>
        </div>
        <div className={styles.form__container1__bottom}>
          <div className={`${styles.form__field} ${styles.form__field__reembolso}`}>
            <label className={styles.form__label}>Descrição / Motivo do Reembolso</label>
            <input
              className={`${styles.form__input} ${styles.form__input__reembolso}`}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              name="descricao"
            />
          </div>
        </div>
      </div>

      <div className={styles.form__spacer}></div>

      <div className={styles.form__container2}>
        <div className={styles.form__container2__top}>
          <div className={`${styles.form__field} ${styles.form__field__date}`}>
            <label className={styles.form__label}>Data</label>
            <input
              className={`${styles.form__input} ${styles.form__input__date}`}
              value={data}
              onChange={(e) => setData(e.target.value)}
              type="date"
              name="date"
            />
          </div>

          <div className={`${styles.form__field} ${styles.form__field__tiposdespesas}`}>
            <label className={styles.form__label}>Tipos de Despesas</label>
            <select
              className={`${styles.form__select} ${styles.form__select__tiposdespesas}`}
              value={tipoDespesa}
              onChange={(e) => setTipoDespesa(e.target.value)}
            >
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                disabled selected hidden
              >
              Selecionar
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="alimentacao"
              >
              Alimentação
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="combustivel"
              >
              Combustível
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="conducao"
              >
              Condução
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="estacionamento"
              >
              Estacionamento
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="viagemAdministrativa"
              >
              Viagem Administrativa
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="viagemOperacional"
              >
              Viagem Operacional
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                value="eventosRepresentacao"
              >
              Eventos de Representação
              </option>
            </select>
          </div>

          <div className={`${styles.form__field} ${styles.form__field__centrocustos}`}>
            <label className={styles.form__label}>Centro de Custos</label>
            <select
              className={styles.form__select}
              value={centroCusto}
              onChange={(e) => setCentroCusto(e.target.value)}
            >
              <option
                className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                value=""
                disabled selected hidden
              >
              Selecionar
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                value="controlesInternos"
              >
              1100109002 - FIN CONTROLES INTERNOS MTZ
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                value="vicePresidenciaFinancas"
              >
              1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
              </option>
              <option
                className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                value="contabilidade"
              >
              1100110102 - FIN CONTABILIDADE MTZ
              </option>
            </select>
          </div>
        </div>


        <div className={styles.form__container2__bottom}>
          <div className={styles.form__container2__bottom__left}>
            <div className={`${styles.form__field} ${styles.form__field__ordeminterna}`}>
              <label className={styles.form__label}>Ord. Int.</label>
              <input
                className={`${styles.form__input} ${styles.form__input__ordeminterna}`}
                value={ordemInterna}
                onChange={(e) => setOrdemInterna(e.target.value)}
                type="text"
                name="ordemInterna"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__divisao}`}>
              <label className={styles.form__label}>Div.</label>
              <input
                className={`${styles.form__input} ${styles.form__input__divisao}`}
                value={divisao}
                onChange={(e) => setDivisao(e.target.value)}
                type="text"
                name="divisao"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__pep}`}>
              <label className={styles.form__label}>PEP</label>
              <input
                className={`${styles.form__input} ${styles.form__input__pep}`}
                value={pep}
                onChange={(e) => setPep(e.target.value)}
                type="text"
                name="pep"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__moeda}`}>
              <label className={styles.form__label}>Moeda</label>
              <input
                className={`${styles.form__input} ${styles.form__input__moeda}`}
                value={moeda}
                onChange={(e) => setMoeda(e.target.value)}
                type="text"
                name="moeda"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__distanciakm}`}>
              <label className={styles.form__label}>Dist / Km</label>
              <input
                className={`${styles.form__input} ${styles.form__input__distanciakm}`}
                value={distanciaKm}
                onChange={(e) => setDistanciaKm(e.target.value)}
                type="text"
                name="distkm"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__valorkm}`}>
              <label className={styles.form__label}>Valor / Km</label>
              <input
                className={`${styles.form__input} ${styles.form__input__valorkm}`}
                value={valorKm}
                onChange={(e) => setValorKm(e.target.value)}
                type="text"
                name="valorkm"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__valorfaturado}`}>
              <label className={styles.form__label}>Val. Faturado</label>
              <input
                className={`${styles.form__input} ${styles.form__input__valorfaturado}`}
                value={valorFaturado}
                onChange={(e) => setValorFaturado(e.target.value)}
                type="text"
                name="valorfaturado"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__despesas}`}>
              <label className={styles.form__label}>Despesas</label>
              <input
                className={`${styles.form__input} ${styles.form__input__despesas}`}
                value={despesa}
                onChange={(e) => setDespesa(e.target.value)}
                type="text"
                name="despesas"
              />
            </div>
          </div>

          <div className={styles.form__container2__bottom__right}>
            <button
              className={`${styles.form__button} ${styles.form__field__maissalvar}`}
              onClick={handleSubmit}
              type="submit"
              name="maissalvar"
              value="salvar"
            >
            + Salvar
          </button>
            <button
              className={`${styles.form__button} ${styles.form__field__limpar}`}
              type="submit"
              name="limpar"
              value="limpar"
            >
              <img
                src={IconDelete}
                alt="Delete"
                title="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
