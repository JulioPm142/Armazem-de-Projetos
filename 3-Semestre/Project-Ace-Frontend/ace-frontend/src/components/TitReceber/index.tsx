import React from 'react';
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import editPen from "../../img/EditPencil.svg"
import next from "../../img/NextBt.svg"
import back from "../../img/BackBt.svg"
import { count } from 'console';
import Modal from '../modalCliente/modal';
import card from '../../img/Real sign.svg'


const ITEMS_PER_PAGE = 4;



const SelectCli: React.FC = () => {
    useEffect(() => {
        const userToken =localStorage.getItem("token")
        axios.get('http://localhost:8080/Cliente',
        {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        }).then((Response) => { setLista(Response.data) })

    }, [])
    const [Lista, setLista] = useState([])
    const Listastr = JSON.stringify(Lista)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [totalRowCount, setTotalRowCount] = useState(ListaJson.length);
    const [id, setId] = useState(Number);
    const [nome, setNome] = useState(String);
    const [CPF, setCpf] = useState(String);
    const [Cliente, setCliente] = useState('');
    const [TotalParcelas, setTotalParcelas] = useState(Number);
    const [ParcelasPagas, setParcelasPagas] = useState(0);
    const [ParcelasPendentes,setParcelasPendentes] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todasParcelas, setTodasParcelas] = useState(Object);
    const [valorParcela, setValorParcela] = useState(0);
    const [valorServio, setValorServico] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false);
    



    const Parcelas = (objParcelas: Array<any>) => {
        const newArray = objParcelas.reduce((acc, item) => {
            if (item.dataPagamento != null) {
              acc.pagos += 1;
            } else {
              acc.pendentes += 1;
            }
            return acc;
          }, { pagos: 0, pendentes: 0 });
          
        console.log(newArray);
        setParcelasPendentes(newArray['pendentes'])
        setParcelasPagas(newArray['pagos'])
    };



    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  


    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(event.target.value);
      };

    const handleNextPageClick = () => {
        if (page >= (ListaJson.length/4-1) ) {
            alert("Não há mais clientes!")
          }
        else{
            setPage(page + 1);      
        }
        
    };
    const resetPage = () => {
        setPage(0)
    }

    const handlePrevPageClick = () => {
        if (page > 0) {
            setPage(page - 1);
          }
        else{
            alert("A página já está no começo")
        }
        
    };

    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counter = 0;

        

    function handleClick(id: any) {
        navigate(`/ControleTitulosFIN2/${id}`);
      }
    
      function handleEditClick(id: number) {
        return () => handleClick(id);
      }

      const handleDropdown = () => {
        setShowText(!showText);
      }

      const handleDropdown2 = () => {
        setShowText2(!showText2);
      }
    return (
        <>

<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    
                    <div className='alignRight'>
                        <a className='button-close' onClick={handleCloseModal}>X</a>
                    </div>
                    <div className='arruma'>
                    <table className='drodownTable'>
                            <tbody>
                            <tr><td>Cpf</td> <td>{CPF}</td></tr>
                            <tr><td>Nome</td> <td>{nome}</td></tr>
                            <tr><td>Valor Total</td><td>R$:{valorServio.toFixed(2)}</td></tr>
                            </tbody>
                        </table>
                        <br/></div><br/>
                        <div><h4 className='dropdown' onClick={handleDropdown2}>Extrato do Cliente</h4>
                        {showText2 && <p className=''>
                            <div className='arruma'>
                            <table className='drodownTable'>                             
                            <tr><td>Total de Parcelas</td> <td>{TotalParcelas}</td></tr>
                            <tr><td>Valor das Parcelas</td><td>R$:{valorParcela.toFixed(2)}</td></tr>
                            <tr><td>Parcelas Pendentes</td><td>{ParcelasPendentes}</td></tr>
                            <tr><td>Parcelas Pagas</td><td>{ParcelasPagas}</td></tr></table></div></p>}
                        </div>
                    <br/>
                    <div><h4 className='dropdown' onClick={handleDropdown}>Detalhes</h4>
                        {showText && <p className='alignCenter'> 
                        { <tbody className='drodownTable'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Valor Total</th>
                                <th>Valor Pago</th>
                                <th>data de Vencimento</th>
                                <th>data de Pagamento</th>          
                                <th>data de Crédito</th>
                            </tr>
                        </thead>    
                                    
                        {todasParcelas.map((item: { id: number, numeroParcela: string, valorPago: Number, valorParcela: Number, dataVencimento:string,dataPagamento:string,dataCredito:string }, id: number) => {
                            const formattedDataVencimento = new Date(item.dataVencimento).toLocaleDateString('pt-BR');
                            const formattedDataPagamento = new Date(item.dataPagamento).toLocaleDateString('pt-BR');
                            const formattedDataCredito = new Date(item.dataCredito).toLocaleDateString('pt-BR');
                            return (
                                <tr key={id}>
                                    <td>{item.numeroParcela}.</td>  
                                    <td>R$:{item.valorParcela.toFixed(2)}</td>
                                    <td>R$:{item.valorPago.toFixed(2)}</td>
                                    <td>{formattedDataVencimento}</td>
                                    <td>{ item.dataPagamento ? formattedDataPagamento : "Pendente"}</td>
                                    <td>{item.dataCredito ? formattedDataCredito : "Pendente"}</td>
                                </tr>
                                )   
                        })}
                    </tbody> } </p>}
                    </div>



                </Modal>
        <div className='allthings'>
            <div className="bgSelect" >
                <h1> Clientes Cadastrados </h1>
            </div>

            <div className='mybg'>
                <div className="inputBox">
                    <input type="text" placeholder='⌕ pesquisar: ' onChange={(e) => { setPesquisa(e.target.value); resetPage() }} />
                </div>

                <div className="boxSelect">
                    { <tbody>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Valor do serviço</th>
                                <th>Status</th>
                                <th>Pagamento</th>
                                <th></th>
                            </tr>
                        </thead>    
                                    
                        {ListaJson.filter((item: { nome: string; }) => {
                            if (Pesquisa === "") {
                                return item
                            }
                            else if (item.nome.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())) {
                                return item
                            }
                        }).slice(startIndex, endIndex)
                        .map((item: { id: number, nome: string, cpf: string, servico: any, adimplencia:string}, id: number) => {
                            counter++
                            return (
                                item?
                                (
                                <tr key={id}>
                                    <td>{item.nome}</td>  
                                    <td>{item.cpf}</td>
                                    <td>R$:{item.servico["preco"].toFixed(2)}</td>
                                    <td>{item.adimplencia}</td>
                                    <td className='button-1' onClick={handleEditClick(item.id)}><img src={card} alt="botão de edição"  /> </td>
                                    <td className='button-1' onClick={() => {

                                            setId(item.id);
                                            setCpf(item.cpf)
                                            setNome(item.nome)
                                            setTotalParcelas(item.servico["parcelas"].length)
                                            Parcelas(item.servico["parcelas"]);
                                            setTodasParcelas(item.servico["parcelas"])
                                            setValorParcela(item.servico["parcelas"][1]['valorParcela'])
                                            setValorServico(item.servico['preco'])                                          
                                            handleOpenModal();
                                        }}>
                                        <img src={editPen} />
                                    </td> 
                                </tr>
                                )
                                :
                                (
                                <></>
                                )
                            )
                        })}
                                <div className='pageButtom'>
                                    <div className='arruma'>
                                        <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick}/></a>
                                        {page+1}
                                        <a className='button-1'> <img src={next} alt="botão de edição"  onClick={handleNextPageClick} /></a>
                                    </div>
                                </div>
                            
                    </tbody> } 
                </div>
            </div>
        </div>
        </>
    );
}

export default SelectCli;