import React, { ReactNode, useState } from 'react';
import Header from '../../../components/header/index'
import { api } from '../../../service/api';
import './styles.css'
import editPen from "../../../img/EditPencil.svg"
import next from "../../../img/NextBt.svg"
import back from "../../../img/BackBt.svg"
import { useNavigate } from 'react-router-dom';
import Dados from '../../../components/dadosRelatorio'


const RelatorioPag: React.FC = () => {

    
    interface Parcela{
        id: number,
	    idCliente: number,
        nomeCliente: string,
	    numeroParcela: number,
	    dataVencimento: ReactNode,
	    dataPagamento: ReactNode,
	    dataCredito: ReactNode,
	    valorParcela: number,
	    valorPago: number
    }
    
    const [dataInicio, setDataInicio] = useState("")
    const [dataFinal, setDataFinal] = useState("")
    
    //listaParcela é uma lista de objetos
    //cada objeto da listaParcela é uma parcela buscada
    const [listaParcela, setListaParcela] = useState([])
    const Listastr = JSON.stringify(listaParcela)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 5;
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counterr = 0;

    const userToken = localStorage.getItem("token")

    const handleNextPageClick = () => {
        if (page >= (ListaJson.length/5-1) ) {
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

    function handleEditClick(id: number) {
        return () => handleClick(id);
      }

      function handleClick(id: any) {
        navigate(`/ControleTitulosFIN2/${id}`);
      }

    function fazerBusca(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()

        const ConvDataIni = new Date(dataInicio)
        const ConvDataFin = new Date(dataFinal)


        if (ConvDataFin<ConvDataIni){
                alert(' \nErro: Filtro invalido!\nData final deve ser maior que a inicial.')
        }   

        else{
            setPage(0)

            api.get(`/Parcela/buscarParcelas/pagamento/${dataInicio}/${dataFinal}`,
            {
                headers: {
                    Authorization: `Bearer ${userToken}` 
                }
            })
            .then(response => {
                const resposta = response.data
                console.log(resposta)
                setListaParcela(resposta)
            })
        }
    }
    
    let paginaRetornada = null;
    const userPermissao = localStorage.getItem("role")

    const pagina = 
        <>
            <Header />
            <div className='allthings1'>
            <div className="bgboxCre" >
                <h1> Relatório de Pagamento: </h1>
                <Dados></Dados>
            </div>

            <div className="boxDate">
                <div className='row'>
                    <span>Data de Início: </span>
                    <input type="date" onChange={(e) => setDataInicio(e.target.value)}/>
                </div>
                <div className='row'>
                    <span>Data de Término: </span>
                    <input type="date" onChange={(e) => setDataFinal(e.target.value)}/>
                </div>
                
                    <button className='btn btn1' onClick={fazerBusca}>Buscar</button>
                
            </div>

            {/* <div className="inputBox">
                    <input type="text" placeholder='⌕ pesquisar: ' onChange={(e) => { setPesquisa(e.target.value); resetPage() }} />
            </div> */}

            <div className='caixaDasParcelas'>
            <div className='boxSelect'>
            { <tbody>
                        <thead>
                            <tr>
                                <th>Nome do Cliente</th>
                                <th>Data de Pagamento</th>
                                <th>Valor da parcela</th>
                                <th>Valor pago</th>
                            </tr>
                        </thead>    
                                    
                        {ListaJson.filter((parcela: {nomeCliente : string}) => {
                            if (Pesquisa === "") {
                                return parcela.nomeCliente
                            }
                            else if (parcela.nomeCliente.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())) {
                                return parcela.nomeCliente
                            }
                        }).slice(startIndex, endIndex)
                        .map((parcela: Parcela, index: number) => {
                            counterr++
                            return (
                                parcela?
                                (
                                <tr key={index}>
                                    <td>{parcela.nomeCliente}</td>  
                                    <td>{parcela.dataPagamento}</td>
                                    <td>{parcela.valorParcela}</td>
                                    <td>{parcela.valorPago}</td>
                                    <td className='button-1' onClick={handleEditClick(parcela.idCliente)}><img src={editPen} alt="botão de edição"  /> </td>   
                                </tr>
                                )
                                :
                                (
                                <></>
                                )
                            )
                        })}
                                <td colSpan={4}>
                                <div className='arruma'>
                                    <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick}/></a>
                                    {page+1}
                                    <a className='button-1'> <img src={next} alt="botão de edição"  onClick={handleNextPageClick} /></a>
                                </div>
                            </td>
                    </tbody> } 
            </div>
            </div>
            </div>
        </>

    const paginaVazia = <></>
    
    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
        paginaRetornada
    );
}

export default RelatorioPag;