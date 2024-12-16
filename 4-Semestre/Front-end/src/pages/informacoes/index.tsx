import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles.css";
import { getTipoParametros, getTipoParametroID, putTypeParameter, deleteTypeParameter, postTypeParameter } from "../../utils/axios.routes";
import useLogin from "../../hooks";
import Close from "../../assets/icons/close.svg"
import { toast } from "react-toastify";
const Info: React.FC = () => {
  const [tipoparametros, setTipoParametros] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fator, setFator] = useState("");
  const [offset, setOffset] = useState("");
  const [json, setJson] = useState("");
  const [tipomodal,setTipoModal] = useState('')
  const [id, setId] = useState("");

  const { token } = useLogin();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const getparametros = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);
      } catch (error) {
        console.error('Erro ao obter tipos de parâmetros:', error);
      }
    };
    getparametros();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    atualizaParametros(); //quando vc fecha o modal agora atualiza a lista dos parâmetros
  };

  const atualizaParametros = () =>{
    const getparametros = async () => {
      try {
        const response = await getTipoParametros();
        setTipoParametros(response);
      } catch (error) {
        console.error('Erro ao obter tipos de parâmetros:', error);
      }
    };
    getparametros();
  }

  const PegarDados = async (id: any) => {
    const fetchData = async () => {
      try {
        const responseData = await getTipoParametroID(id);
        console.log(responseData);
        setId(id)
        setNome(responseData.nome);
        setDescricao(responseData.descricao);
        setUnidade(responseData.unidade);
        setFator(responseData.fator);
        setOffset(responseData.offset);
        setJson(responseData.json);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  };

  function limpaCampos() {
    setId('')
    setNome('');
    setDescricao('');
    setUnidade('');
    setFator('');
    setOffset('');
    setJson('');
  }

  const pegarformParametrosEdit = async (e: String) => {
    if (!nome || !descricao || !unidade || !fator || !offset || !json) {
      toast.error(`Por favor, preencha todos os campos antes de cadastrar.`, {
        position: "top-right",
      });
      return;
    }
    const data = {
      id: id,
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: fator,
      offset: offset,
      json: json,
    };
    await putTypeParameter(data);
    return alert("Parâmetro Editado");
    
  };

  const handleFormSubmitDeleteParametros = async () => {
    if (!id) {
      toast.error(`Por favor, preencha todos os campos antes de cadastrar.`, {
        position: "top-right",
      });
      return;
    }

    await deleteTypeParameter(id);
    window.location.reload();
  };

  const pegarformParametros = async (e: String) => {
    if (!nome || !descricao || !unidade || !fator || !offset || !json) {
      toast.error(`Por favor, preencha todos os campos antes de cadastrar.`, {
        position: "top-right",
      });
      return;
    }
    const data = {
      nome: nome,
      descricao: descricao,
      unidade: unidade,
      fator: parseInt(fator),
      offset: parseInt(offset),
      json: json,
      cadastro: "2021-06-01",
    };
    await postTypeParameter(data);
    window.location.reload();

  };


  return (
    <>
      {isModalOpen && <div className="Modal-overlay" />}
      {isModalOpen &&
        <div className="modal-overlay">
          <div className="modalGera">
            <div className="modal-close" onClick={closeModal}> <img src={Close} alt="" /> </div>
            <div className="Modal">
              {(tipomodal =='Edit')? <h1 className="Modal-titulo">Editar Tipo do Parâmetro</h1>: <h1 className="Modal-titulo">Cadastrar</h1>}

              <div className="ModalContainer">
                <div className="Modal-input-content">
                  <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="Modal-input" placeholder="Nome" />
                </div>
                <div className="Modal-input-content">
                  <input type="text" name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="Modal-input" placeholder="Descrição" />
                </div>
                <div className="Modal-input-content">
                  <input type="text" name="unidade" value={unidade} onChange={(e) => setUnidade(e.target.value)} className="Modal-input" placeholder="Unidade" />
                  <input type="text" name="fator" value={fator} onChange={(e) => setFator(e.target.value)} className="Modal-input" placeholder="Fator de conversão" />
                  <input type="text" name="offset" value={offset} onChange={(e) => setOffset(e.target.value)} className="Modal-input" placeholder="Offset" />
                  <input type="text" name="json" value={json} onChange={(e) => setJson(e.target.value)} className="Modal-input" placeholder="Padrão Json" />
                </div>

                <div className="Modal-footer">
                {(tipomodal =='Edit')?<>
                  <button className="Modal-delete" onClick={() => { handleFormSubmitDeleteParametros() }}>Deletar</button>
                  <button className="Modal-salvar" onClick={() => { pegarformParametrosEdit(id); closeModal() }}>Salvar</button>
                  </>
                  :<button className="Modal-salvar" onClick={() => { pegarformParametros(id) }}>Cadastrar</button>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <div className={`flex ${showSidebar ? "shifted" : ""}`}>
        <Sidebar isOpen={showSidebar} />
        <div className="info-container">
          <div className="info-title">
            <button className="toggle-button" onClick={toggleSidebar}>
              {showSidebar ? <ClearIcon /> : <DehazeIcon />}
            </button>
            <span>Informações Didáticas</span>
            {token && (
              <div className="cadastro-botão">
                <button
                  type="submit"
                  className="btn-cadastro"
                  onClick={() => {
                    setTipoModal('Cadastrar');
                    openModal();
                    limpaCampos();
                  }}
                >
                  Cadastrar
                </button>
              </div>
            )}
          </div>

          <div className="box-container">
            {tipoparametros.length === 0 ? (
              <div className="info-box">
                <details className="details">
                  <summary className="summary">
                    Não existem tipos de parâmetros cadastrados
                  </summary>
                </details>
              </div>
            ) : (
              token ? (
                tipoparametros.map((item) => (
                  <div className="box-item" key={item.id_tipo_parametro}>
                    <div onClick={() => {
                      setTipoModal('Edit');
                      openModal();
                      PegarDados(item.id_tipo_parametro);
                    }}
                      className="image" />
                    <div className="box-info">
                      <h2>O que é {item.nome}</h2>
                      <hr className="line"></hr>
                      <p>{item.descricao}</p>
                    </div>
                  </div>
                ))
              ) : (
                tipoparametros.map((item) => (
                  <div className="box-item" key={item.id_tipo_parametro}>
                    <div className="image" />
                    <div className="box-info">
                      <h2>O que é {item.nome}</h2>
                      <hr className="line"></hr>
                      <p>{item.descricao}</p>
                    </div>
                  </div>
                ))
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
