import React, { useState, useEffect } from "react";
// import "./styles.css";
import Sidebar from "../../components/sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { getEstacoes } from "../../utils/axios.routes";
import Modal from "../../components/modal";
import useLogin from "../../hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Estacoes: React.FC = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [modalstyle, setModalStyle] = useState("");
  const [selectStationId, setSelectStationId] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [estacoes, setEstacoes] = useState<any[]>([]);

  const { token } = useLogin();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await getEstacoes();
        setEstacoes(response);
      } catch (error) { }
    };
    fetchEstacoes();
  }, []);

  return (
    <>

      {modalOpen ? (
        <Modal
          setOpenModal={setOpenModal}
          modalstyle={modalstyle}
          selectStationId={selectStationId}
        />
      ) : null}
      <div className={`flex ${showSidebar ? "shifted" : ""}`}>
        <Sidebar isOpen={showSidebar} />
        <div className="estacoes-container">
          <div className="estacoes-title">
            <button className="toggle-button" onClick={toggleSidebar}>
              {showSidebar ? <ClearIcon /> : <DehazeIcon />}
            </button>
            <span>Estações em atividade</span>
            {token &&
              <div className="cadastro-botão">
                <button
                  type="submit"
                  className="btn-cadastro"
                  onClick={() => {
                    setOpenModal(true);
                    setModalStyle("cadastrar-estacao");
                  }}
                >
                  Cadastrar
                </button>
              </div>
            }
          </div>


          {estacoes.length === 0 ? (
            <div className="sem-estacoes">
              <div className="estacao-box">
                <details className="details">
                  <summary className="summary">
                    Não existem estações cadastradas
                  </summary>
                </details>
              </div>
            </div>
          ) : (estacoes &&
            (<div className="estacoes-header"> {estacoes.map((item) => (
              <div className="box-container" key={item.id_estacao}>
                <div className="estacao">
                  <div className="card">
                    <div className="card-content">
                      <h2 className="card-title">{item.identificador}</h2>

                      <p className="card-txt">
                        <h1>{item.status}</h1>
                        <span>Latitude: {item.latitude}</span>
                        <br></br>
                        <span>Longitude: {item.longitude}</span>
                      </p>
                      {token &&
                        <div className="card-btn-wraper">
                          <button
                            type="submit"
                            className="card-btn"
                            onClick={() => {
                              setOpenModal(true);
                              setModalStyle("editar-estacao");
                              setSelectStationId(item.id_estacao);
                            }}
                          >
                            Editar Estação
                          </button>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>))}
        </div>
      </div>
    </>
  );
};

export default Estacoes;
