import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getEstacoesId,
  deleteEstacoes,
  getTipoParametros,
  postEstacoes,
  putEstacoes,
  postParameter,
  postTypeParameter,
  putTypeParameter,
  deleteTypeParameter,
  postAlertas,
  getParameter,
  getUserId,
  getParameterID,
  deleteUsuario,
  postUsuario,
  updateUsuario,
  getEstacoes,
  deleteParameter,
  gethistoric,
  getParameters
  ,
} from "../../utils/axios.routes";
import "./style.css";
import user from "../../assets/user.png";
import { sha512 } from "sha512-crypt-ts";
import ConfirmationModal from "./ConfirmationModal";
interface ModalProps {
  setOpenModal: (value: boolean) => void;
  modalstyle: string;
  selectStationId: string;
}

const Modal: React.FC<ModalProps> = ({
  setOpenModal,
  modalstyle,
  selectStationId,
}) => {
  const [stationName, setStationName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [instalacao, setInstalacao] = useState("");
  const [estado, setEstado] = useState("");
  const [tipoParametros, setTipoParametros] = useState<any[]>([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fator, setFator] = useState("");
  const [offset, setOffset] = useState("");
  const [sinal, setSinal] = useState("");
  const [id_parametro, setId_parametro] = useState("");
  const [valor, setValor] = useState("");
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [json, setJson] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const [tipoParametroEstacao, setTipoParametroEstacao] = useState<any>([]);
  const [estacoes, setEstacoes] = useState<any[]>([]);
  const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stationName") setStationName(value);
    else if (name === "latitude") setLatitude(value);
    else if (name === "longitude") setLongitude(value);
    else if (name === "instalacao") setInstalacao(value);
    else if (name === "estado") setEstado(value);
    else if (name === "nome") setNome(value);
    else if (name === "descricao") setDescricao(value);
    else if (name === "unidade") setUnidade(value);
    else if (name === "fator") setFator(value);
    else if (name === "offset") setOffset(value);
    else if (name === "sinal") setSinal(value);
    else if (name === "id_parametro") setId_parametro(value);
    else if (name === "valor") setValor(value);
    else if (name === "json") setJson(value);
    else if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "senha") setSenha(value);
    else if (name === "nomeuser") setNomeUser(value);
    else if (name === "emailuser") setEmailUser(value);
    else if (name === "senhauser") setSenhaUser(value);
  };

  const handleDeleteClick = () => {
    setConfirmDeleteModalOpen(true);
  };

  const handleFormSubmitDeleteModal = async () => {
    await deleteEstacoes(selectStationId);
    window.location.reload();
    toast.success(`Estação excluida com sucesso!`, {
      position: "top-right",
    });

    setConfirmDeleteModalOpen(false);
  };

  const handleCheckboxChange = (checked: any) => {
    setTipoParametroEstacao((prevCheckedItems: any) => {
      if (prevCheckedItems.includes(checked)) {
        return prevCheckedItems.filter((check: any) => check !== checked);
      } else {
        return [...prevCheckedItems, checked];
      }
    });
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getEstacoes();
        setEstacoes(response);
      } catch (error) {}
    };
    fetchEstacoes();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stationName || !latitude || !longitude || !instalacao || !estado) {
      toast.error(`Por favor, preencha todos os campos antes de cadastrar.`, {
        position: "top-right",
      });
      return;
    }

    const data = {
      identificador: stationName,
      latitude: latitude,
      longitude: longitude,
      instalacao: instalacao,
      status: estado,
    };
    const estacao = await postEstacoes(data);

    const response = {
      fk_estacao: estacao.id_estacao,
      fk_tipo_parametro: tipoParametroEstacao,
    };
    await postParameter(response);

    toast.success(`Estação cadastrada com sucesso!`, {
      position: "top-right",
    });
    window.location.reload();
  };

  const handleFormSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await deleteParameter(selectStationId);
    // await deleteParameter({ tipoParametroEstacao, selectStationId });
    const data = {
      id: selectStationId,
      identificador: stationName,
      latitude: latitude,
      longitude: longitude,
      instalacao: instalacao,
      status: estado,
    };

    await putEstacoes(data);
    toast.success(`Editado com sucesso!`, {
      position: "top-right",
    });
    window.location.reload();
  };

  const pegarformParametros = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataAtual = new Date();

    const dataFormatada = dataAtual
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const data = {
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: parseInt(fator),
      offset: parseInt(offset),
      json: json,
      cadastro: dataFormatada,
    };
    await postTypeParameter(data);
    window.location.reload();
    toast.success(`Informação cadastrada com sucesso!`, {
      position: "top-right",
    });
  };

  const pegarformParametrosEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      // id: selectStationId,
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: fator,
      offset: offset,
    };
    await putTypeParameter(data);
    toast.success(`Editado com sucesso!`, {
      position: "top-right",
    });
    // window.location.reload();
  };

  const handleFormSubmitAlerta = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataAtual = new Date();

    const dataFormatada = dataAtual
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const date = {
      valor: valor,
      TipoDeAlerta: sinal,
      data: dataFormatada,
      fk_parametro: parametro,
    };
    // console.log(valor, sinal, parametro);
    
    const res = await postAlertas(date);
    console.log(res);
    toast.success(`Alerta cadastrado com sucesso!`, {
      position: "top-right",
    });
    window.location.reload();
  };

  const [parametros, setParametros] = useState<any[]>([]);
  useEffect(() => {
    const fetchParametro = async () => {
      try {
        const response = await getParameters();
        setParametros(response);
      } catch (error) {}
    };
    fetchParametro();
  } , []);

  const handleFormSubmitDeleteParametros = async (e: React.FormEvent) => {
    e.preventDefault();
    await deleteTypeParameter(selectStationId);
    window.location.reload();
    toast.success(`Parametro excluido com sucesso!`, {
      position: "top-right",
    });
  };

  const handleFormSubmitDeleteUsuario = async (e: React.FormEvent) => {
    e.preventDefault();
    await deleteUsuario(selectStationId);
    window.location.reload();
    toast.success(`Usuário excluido com sucesso!`, {
      position: "top-right",
    });
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);

        if (modalstyle === "editar-estacao") {
          const response = await getEstacoesId(selectStationId);
          setStationName(response.identificador);
          setLatitude(response.latitude);
          setLongitude(response.longitude);
          setInstalacao(response.instalacao.split("T")[0]);
          setEstado(response.status);
          setTipoParametroEstacao(response.parametros);
        } else if (modalstyle === "editar-info") {
          const respons = await getParameterID(selectStationId);
          const response = respons.tipo_parametro;
          setNome(response.nome);
          setDescricao(response.descricao);
          setUnidade(response.unidade);
          setFator(response.fator);
          setOffset(response.offset);
          setJson(response.json);
        } else if (modalstyle === "editar-perfil") {
          const response = await getUserId(selectStationId);
          setName(response.nome);
          setEmail(response.email);
          // setSenha(response.senha);
        } else if (modalstyle === "editar-usuario") {
          const response = await getUserId(selectStationId);
          setNomeUser(response.nome);
          setEmailUser(response.email);
          // setSenha(response.senha);
        }
      } catch (error) {}
    };
    fetchEstacoes();
  }, []);

  const cadastrarUsuario = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeUser || !emailUser || !senhaUser) {
      toast.error(`Por favor, preencha todos os campos antes de cadastrar.`, {
        position: "top-right",
      });
      return;
    }

    const dataAtual = new Date();

    const dataFormatada = dataAtual
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const data = {
      nome: nomeUser,
      email: emailUser,
      senha: sha512.crypt(senhaUser, "password"),
      cargo: "user",
      cadastro: dataFormatada,
    };

    await postUsuario(data);
    toast.success("Usuário cadastrado com sucesso!", {
      position: "top-right",
    });
    window.location.reload();
  };

  const editarUsuario = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: selectStationId,
      nome: nomeUser,
      email: emailUser,
      senha: sha512.crypt(senhaUser, "password"),
      // cargo: "admin",
      // cadastro: dataFormatada
    };
    await updateUsuario(data);
    toast.success(`Usuário editado com sucesso!`, {
      position: "top-right",
    });
    window.location.reload();
  };

  const editarPerfil = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: selectStationId,
      nome: name,
      email: email,
      senha: sha512.crypt(senha, "password"),
    };
    console.log(data);

    const respe = await updateUsuario(data);
    console.log(respe);
    toast.success(`Estação cadastrada com sucesso!`, {
      position: "top-right",
    });
    window.location.reload();
  };

  // Dropdown

  const [parametro, setParametro] = useState("");
  const handleEstacaoOptChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setParametro(event.target.value);
  };

  const [selectedParametroOpt, setSelectedParametroOpt] = useState("");
  const handleParametroOptChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedParametroOpt(event.target.value);
  };

  // const [sinal, setSinal] = useState("");
  const handleTipoAlertaOptChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSinal(event.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="x"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        {(modalstyle === "editar-estacao" || modalstyle === "editar-info") && (
          <>
            <ConfirmationModal
              isOpen={confirmDeleteModalOpen}
              onClose={() => setConfirmDeleteModalOpen(false)}
              onConfirm={handleFormSubmitDeleteModal}
            />
          </>
        )}
        {(modalstyle === "cadastrar-estacao" ||
          modalstyle === "editar-estacao") && (
          <>
            <div className="title">
              {modalstyle === "cadastrar-estacao" && (
                <h1>Cadastro de Estação</h1>
              )}
              {modalstyle === "editar-estacao" && <h1>Editar Estação</h1>}
            </div>
            <div className="body">
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="stationName"
                  placeholder="Nome da Estação"
                  value={stationName}
                  required
                  maxLength={25}
                />
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="latitude"
                    placeholder="Latitude"
                    value={latitude}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="longitude"
                    placeholder="Longitude"
                    value={longitude}
                    required
                    maxLength={15}
                  />
                </div>
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="instalacao"
                    placeholder="Data de Instalação"
                    value={instalacao}
                    type="date"
                    //VALDERI ANALISARRRRRRRRRRRRRRRRRRRR
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="estado"
                    placeholder="Estado de Atividade"
                    value={estado}
                    required
                    maxLength={15}
                  />
                </div>
              </div>
              {modalstyle === "cadastrar-estacao" && (
                <>
              <hr className="HrModal" />
              <div className="title">
                <h1>Parâmetro de Estação</h1>
              </div>
              <div className="body-2">
                {tipoParametros.map((item) => (
                  <>
                    <div
                      className="input-container-4"
                      key={item.id_tipo_parametro}
                    >
                      <input
                        className="checkbox-modal"
                        placeholder="Parametro"
                        value={item.id_tipo_parametro}
                        onChange={() =>
                          handleCheckboxChange(item.id_tipo_parametro)
                        }
                        name="tipoParametros"
                        type="checkbox"
                        checked={undefined}
                      />
                      <span>{item.nome}</span>
                    </div>
                  </>
                ))}
              </div>
              </>
              )}
            </div>
          </>
        )}

        {(modalstyle === "cadastrar-info" || modalstyle === "editar-info") && (
          <>
            <div className="title">
              {modalstyle === "cadastrar-info" && (
                <h1>Cadastro de Tipo de Parametro</h1>
              )}
              {modalstyle === "editar-info" && (
                <h1>Editar Tipo de Parametro</h1>
              )}
            </div>
            <div className="body">
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="nome"
                  placeholder="Nome do Parametro"
                  value={nome}
                  required
                  maxLength={25}
                />
              </div>
              <div className="input-container-1">
                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="descricao"
                  placeholder="Descrição do Parametro"
                  value={descricao}
                  required
                />
              </div>
              <div className="flex-input">
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="unidade"
                    placeholder="Unidade"
                    value={unidade}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="input-container-3">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="fator"
                    placeholder="Fator de conversão"
                    value={fator}
                    required
                    maxLength={25}
                  />
                </div>
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="offset"
                    placeholder="Offset de conversão"
                    value={offset}
                    required
                    maxLength={25}
                  />
                </div>
                <div className="input-container-2">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="json"
                    placeholder="Padrão Json"
                    value={json}
                    required
                  />
                </div>
              </div>
              <hr className="HrModal" />
            </div>
          </>
        )}

        {/* ------------- ALERTAS ------------- */}
        {modalstyle === "cadastrar-alerta" && (
          <>
            <div className="title">
              {modalstyle === "cadastrar-alerta" && (
                <h1>Cadastro de Alertas</h1>
              )}
            </div>
            <div className="body">
              <div className="dropdown-container">
                <div className="estacao-option-dropdown">
                  <label htmlFor="estacao-option">
                    <p>Selecione um parametro</p>
                  </label>
                  <select
                    className="estacao-option"
                    name="parametro"
                    onChange={handleEstacaoOptChange}
                    value={parametro}
                  >
                    <option value=""> Parametros cadastrados </option>
                    {parametros &&
                      parametros.map((estacao) => (
                        <option
                          key={estacao.id_parametro}
                          value={estacao.id_parametro}
                        >
                          estação: {estacao.estacao.identificador} -
                          tipo parametro: {estacao.tipo_parametro.nome}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="alerta-option-dropdown">
                  <label htmlFor="alerta-option">
                    <p>Selecione a condição do alerta</p>
                  </label>
                  <select
                    className="alerta-option"
                    name="alerta"
                    onChange={handleTipoAlertaOptChange}
                    value={sinal}
                  >
                    <option value="">Alertas cadastrados </option>
                    <option value=">"> Maior </option>
                    <option value="<"> Menor </option>
                    <option value="=="> Igual </option>
                    <option value=">="> Maior igual </option>
                    <option value="<="> Menor igual </option>
                  </select>
                </div>

                <input
                  className="input-modal"
                  onChange={handleInputChange}
                  name="valor"
                  placeholder="Valor do gatilho alerta(ex: 50)" //treshold
                  required
                  maxLength={15}
                />
              </div>
              <hr className="HrModal" />
            </div>
          </>
        )}
        {modalstyle === "editar-perfil" && (
          <>
            <div className="title">
              <h1>Editar Perfil</h1>
            </div>
            <div className="body">
              <div className="container-pai">
                <img src={user} alt="user" />
                <div className="edit-input-container-1">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Nome do Usuario"
                    value={name}
                    required
                    maxLength={25}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email do Usuario"
                    value={email}
                    required
                    maxLength={50}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="senha"
                    placeholder="Senha do Usuario"
                    value={senha}
                    required
                    maxLength={30}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {(modalstyle === "cadastrar-usuario" ||
          modalstyle === "editar-usuario") && (
          <>
            <div className="title">
              {modalstyle === "cadastrar-usuario" && (
                <h1>Cadastro de Usuário</h1>
              )}
              {modalstyle === "editar-usuario" && <h1>Editar de Usuário</h1>}
            </div>
            <div className="body">
              <div className="container-pai">
                <div className="edit-input-container-1">
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="nomeuser"
                    placeholder="Nome do Usuario"
                    value={nomeUser}
                    maxLength={25}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="emailuser"
                    placeholder="Email do Usuario"
                    value={emailUser}
                    maxLength={50}
                  />
                  <input
                    className="input-modal"
                    onChange={handleInputChange}
                    name="senhauser"
                    placeholder="Senha do Usuario"
                    value={senhaUser}
                    maxLength={30}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="footer">
          {modalstyle === "editar-estacao" && (
            <button className="delete" onClick={handleDeleteClick}>
              Deletar
            </button>
          )}
          {modalstyle === "editar-info" && (
            <button
              className="delete"
              onClick={handleFormSubmitDeleteParametros}
            >
              Deletar
            </button>
          )}
          {/* {modalstyle === "editar-usuario" && (
            <button className="delete" onClick={handleFormSubmitDeleteUsuario}>
              Deletar
            </button>
          )} */}

          {modalstyle === "cadastrar-estacao" && (
            <>
              <div></div>
              <button onClick={handleFormSubmit}>Cadastrar</button>
            </>
          )}
          {modalstyle === "cadastrar-info" && (
            <>
              <div></div>
              <button onClick={pegarformParametros}>Cadastrar</button>
            </>
          )}
          {modalstyle === "cadastrar-alerta" && (
            <>
              <div></div>
              <button onClick={handleFormSubmitAlerta}>Cadastrar</button>
            </>
          )}
          {modalstyle === "cadastrar-usuario" && (
            <>
              <div></div>
              <button onClick={cadastrarUsuario}>Cadastrar</button>
            </>
          )}

          {modalstyle === "editar-estacao" && (
            <button onClick={handleFormSubmitEdit}>Editar</button>
          )}
          {modalstyle === "editar-info" && (
            <button onClick={pegarformParametrosEdit}>Editar</button>
          )}
          {modalstyle === "editar-usuario" && (
            <>
              <div></div>
              <button onClick={editarUsuario}>Editar</button>
            </>
          )}
          {modalstyle === "editar-perfil" && (
            <>
              <div></div>
              <button onClick={editarPerfil}>Editar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
