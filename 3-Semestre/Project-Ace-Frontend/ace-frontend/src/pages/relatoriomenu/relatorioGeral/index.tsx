import React, { ReactNode, useEffect, useState } from 'react';
import Header from '../../../components/header/index'
import { api } from '../../../service/api';
import './styles.css'
import editPen from "../../../img/EditPencil.svg"
import next from "../../../img/NextBt.svg"
import back from "../../../img/BackBt.svg"
import { useNavigate } from 'react-router-dom';
import Dados from '../../../components/dadosRelatorio'
import a_z from "../../../img/a-z.svg"
import z_a from "../../../img/z-a.svg"
import arrowup from "../../../img/arrowup.svg"
import arrowdown from "../../../img/arrowdown.svg"
import { ReactElement } from 'react-imask/dist/mixin';
import { log } from 'console';




const RelatorioPag: React.FC = () => {


    interface Parcela {
        id: number,
        idCliente: number,
        nomeCliente: string,
        numeroParcela: number,
        dataVencimento: string | number;
        dataPagamento: string | number,
        dataCredito: string | number,
        valorParcela: number,
        valorPago: number,
        statusVencida: string
    }

    const [dataInicio, setDataInicio] = useState("")
    const [dataFinal, setDataFinal] = useState("")
    const [listaParcela, setListaParcela] = useState([])
    const Listastr = JSON.stringify(listaParcela)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const [page, setPage] = useState(0);
    const [selectedOption, setSelectedOption] = useState('vencer');
    const [tipodata, setTipodata] = useState('Crédito');
    const [formatedTipoData, setFormatedTipoData] = useState('Crédito');
    const [sort, setSort] = useState('a-z');
    const [imageSrc, setImageSrc] = useState(a_z);
    const [total1, setTotal1] = useState(0);
    const [total2, setTotal2] = useState(0);
    const [quantidade1, setQuantidade1] = useState(0);
    const [quantidade2, setQuantidade2] = useState(0);
    const [isDescending, setIsDescending] = useState(false);

    const navigate = useNavigate();


    let Total1 = 0
    let Total2 = 0
    let Quantidade1 = 0
    let Quantidade2 = 0
    const ITEMS_PER_PAGE = 5;
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counterr = 0;

    const userToken = localStorage.getItem("token")

    const handleSort = (property:any) => {
        if (sort === property) {
          setIsDescending(!isDescending);
        } else {
          setIsDescending(false);
          setSort(property);
        }
      };

    const handleNextPageClick = () => {
        if (page >= (ListaJson.length / 5 - 1)) {
            alert("Não há mais clientes!")
        }
        else {
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
        else {
            alert("A página já está no começo")
        }

    };

    function handleEditClick(id: number) {
        return () => handleClick(id);
    }

    function handleClick(id: any) {
        navigate(`/ControleTitulosFIN2/${id}`);
    }

    function handleChangeOption(event: any) {
        setSelectedOption(event.target.value);
    }


    const [coluna2, setColuna2] = useState<JSX.Element | React.ReactNode>(<>dado1</>)
    const [coluna3, setColuna3] = useState<JSX.Element | React.ReactNode>(<>dado2</>)
    const [coluna4, setColuna4] = useState<JSX.Element | React.ReactNode>(<>dado3</>)
    const [coluna5, setColuna5] = useState<JSX.Element | React.ReactNode>(<>dado4</>)
    const [coluna6, setColuna6] = useState<JSX.Element | React.ReactNode>(<>Total Vencido</>)
    const [coluna7, setColuna7] = useState<JSX.Element | React.ReactNode>(<>Total a Vencer</>)
    const [coluna8, setColuna8] = useState<JSX.Element | React.ReactNode>(<>Quantidade a Vencer</>)
    const [coluna9, setColuna9] = useState<JSX.Element | React.ReactNode>(<>Quantidade Vencidas</>)


    var dataVen=(
        <p onClick={() => handleSort('dataVencimento')} >
        Data Vencimento
        </p>
    )

    function fazerBusca() {
        setTipodata(selectedOption)
        const ConvDataIni = new Date(dataInicio)
        const ConvDataFin = new Date(dataFinal)

        if (selectedOption === "vencer") {
            setColuna2(dataVen)
            setColuna3("Valor da parcela")
            setColuna4("Valor pago")
            setColuna5("Status")
            setColuna6("Total Vencido")
            setColuna7("Total a Vencer")
            setColuna8("Quantidade a Vencer")
            setColuna9("Quantidade Vencidas")
        }
        if (selectedOption === "paga") {
            setColuna2("Data de Pagamento")
            setColuna3("Data de Vencimento")
            setColuna4("Valor Parcela")
            setColuna5("Status")
            setColuna6("Total Recebido")
            setColuna7("Total a Receber")
            setColuna8("Quantidade Pagas")
            setColuna9("Quantidade a Pagar")
        }
        if (selectedOption === "creditada") {
            setColuna2("Data de Pagamento")
            setColuna3("Data de Crédito")
            setColuna4("Valor Pago")
            setColuna5("Status")
            setColuna6("Total Creditado")
            setColuna7("Total a Creditar")
            setColuna8("Quantidade a Creditar")
            setColuna9("Quantidade Creditadas")
        }
        if (selectedOption === "atraso") {
            setColuna2("Data de Vencimento")
            setColuna3("Data de Pagamento")
            setColuna4("Valor Pago")
            setColuna5("Status")
            setColuna6("Total Pago em Atraso")
            setColuna7("Total Pago em Dia")
            setColuna8("Quantidade Pagas em Atraso")
            setColuna9("Quantidade Pagas em Dia")
        }
        console.log(`/Parcela/buscarParcelas/${selectedOption}/${dataInicio}/${dataFinal}`)
        if (ConvDataFin < ConvDataIni) {
            alert(' \nErro: Filtro invalido!\nData final deve ser maior que a inicial.')
        }

        else {
            setPage(0)

            api.get(`/Parcela/buscarParcelas/${selectedOption}/${dataInicio}/${dataFinal}`,
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
                .then(response => {
                    const resposta = response.data
                    console.log(resposta)
                    setListaParcela(resposta)
                    Total1 = 0
                    Total2 = 0
                    Quantidade1 = 0
                    Quantidade2 = 0
                    resposta.forEach((parcela: Parcela) => {
                        if (selectedOption === "vencer") {
                            if(parcela.statusVencida == "vencida") {
                                Total1 += parcela.valorParcela  - parcela.valorPago
                                Quantidade2 += 1
                            } else if(parcela.statusVencida == "A vencer") {
                                Total2 += parcela.valorParcela
                                Quantidade1 += 1
                            }
                        }
                        if (selectedOption === "paga") {
                            if(parcela.statusVencida == "paga") {
                                Total1 += parcela.valorPago
                                Quantidade1 += 1
                            } else {
                                Total2 += parcela.valorParcela
                                Quantidade2 += 1
                            }
                        }
                        if (selectedOption === "creditada") {
                            if(parcela.statusVencida == "creditada") {
                                Total1 += parcela.valorPago
                                Quantidade2 += 1
                            } else if(parcela.statusVencida == "A creditar") {
                                Total2 += parcela.valorPago
                                Quantidade1 += 1
                            }
                        }
                        if (selectedOption === "atraso") {
                            if(parcela.statusVencida == "Paga em atraso") {
                                Total1 += parcela.valorPago
                                Quantidade1 += 1
                            } else if(parcela.statusVencida == "paga") {
                                Total2 += parcela.valorPago
                                Quantidade2 += 1
                            }
                        }
                    })
                    setTotal1(Total1)
                    setTotal2(Total2)
                    setQuantidade1(Quantidade1)
                    setQuantidade2(Quantidade2)
                })
        }
    }

    let paginaRetornada = null;
    const userPermissao = localStorage.getItem("role")

    const sortedList = ListaJson.filter((parcela: { nomeCliente: string }) => {
        if (Pesquisa === "") {
            return parcela.nomeCliente;
        } 
        else if (parcela.nomeCliente.toLowerCase().includes(Pesquisa.toLowerCase())) {
            return parcela.nomeCliente;
        }}).sort((a: Parcela, b: Parcela) => {
            if (sort === 'a-z') {
                return isDescending ? b.nomeCliente.localeCompare(a.nomeCliente): a.nomeCliente.localeCompare(b.nomeCliente);
            } 
            else if (sort === 'dataVencimento') {
                const dateA = new Date(a.dataVencimento || 0).getTime();
                const dateB = new Date(b.dataVencimento || 0).getTime();
                return isDescending ? dateB - dateA : dateA - dateB;
            } 
            else if (sort === 'dataPagamento') {
                const dateA = new Date(a.dataPagamento || 0).getTime();
                const dateB = new Date(b.dataPagamento || 0).getTime();
                return isDescending ? dateB - dateA : dateA - dateB;
            } 
            else if (sort === 'dataCredito') {
                const dateA = new Date(a.dataCredito || 0).getTime();
                const dateB = new Date(b.dataCredito || 0).getTime();
                return isDescending ? dateB - dateA : dateA - dateB;
            } 
            else if (sort === 'valorParcela') {
                return isDescending ? b.valorParcela - a.valorParcela : a.valorParcela - b.valorParcela;
            }
            else if (sort === 'valorPago') {
                return isDescending ? b.valorPago - a.valorPago : a.valorPago - b.valorPago;
            }
            else if (sort === 'statusVencida') {
                return isDescending ? b.statusVencida.localeCompare(a.statusVencida): a.statusVencida.localeCompare(b.statusVencida);
            }
      return 0; 
    });

    const slicedData = sortedList.slice(startIndex, endIndex);

    function toBrDate(date: Date) {
        if (date === null) {
            var formattedDate = "pendente";
        } else {
            var formattedDate = new Date(date).toLocaleDateString('pt-BR');
        }
        return formattedDate
    }

    const handleSortChange = (event:any) => {
        const selectedSort = event.target.value;
        setSort(selectedSort);
      };
    
      const handleSortToggle = () => {
        setIsDescending(!isDescending);
      };



    const pagina =
        <>
            <Header />
            <div className='allthings2'>
                <div className="bgboxCre" >
                    <h1> Relatório Geral: </h1>
                </div>

                <div className="boxFiltro">
                    <div className='filtroRow'>
                        <span>Filtro: </span>
                        <select value={selectedOption} onChange={handleChangeOption} className='btn btn1'>
                            <option value="vencer">A vencer</option>
                            <option value="paga">Pagas</option>
                            <option value="creditada">Creditadas</option>
                            <option value="atraso">Em atraso</option>

                        </select>
                    </div>

                    <div className='filtroRow'>
                        <span>Ordenar por:</span>
                        <select id="sortSelect" value={sort} onChange={handleSortChange} className='btn btn1'>
                            <option value="a-z">Nome</option>
                            <option value="dataVencimento">Data Vencimento</option>
                            <option value="dataPagamento">Data Pagamento</option>
                            <option value="dataCredito">Data de Crédito</option>
                            <option value="valorParcela">Valor da Parcela</option>
                            <option value="valorPago">Valor Pago</option>
                            <option value="statusVencida">Status</option>
                        </select>

                        

                    </div>
                    
                    <div className='sortButton'>
                        <div className=' button-1' onClick={handleSortToggle}>
                            {isDescending ? (<img src={arrowup} alt="" /> ): (<img src={arrowdown} alt="" /> )}
                        </div>
                    </div>
              
                </div>



                <div className="boxDate">
                    <div className='row'>
                        <span>Data de Início: </span>
                        <input type="date" onChange={(e) => setDataInicio(e.target.value)} />
                    </div>
                    <div className='row'>
                        <span>Data de Término: </span>
                        <input type="date" onChange={(e) => setDataFinal(e.target.value)} />
                    </div>
                </div>



                <div className='caixaDasParcelas'>
                    <div className='boxSelect'>
                        {<tbody>
                            <thead>
                                <tr>
                                    <th>Nome do Cliente</th>
                                    <th>{coluna2}</th>
                                    <th>{coluna3}</th>
                                    <th>{coluna4}</th>
                                    <th>{coluna5}</th>
                                </tr>
                                {/* <tr>
                                <th>Nome do Cliente</th>
                                <th>Data de {tipodata.charAt(0).toUpperCase() +tipodata.slice(1)}</th>
                                <th>Valor da parcela</th>
                                <th>Valor pago</th>
                            </tr> */}
                            </thead>

                            {slicedData.
                                map((parcela: any, index: number) => {
                                    counterr++
                                    if (tipodata === 'vencer') {
                                        return (
                                            <tr key={index}>
                                                <td>{parcela.nomeCliente}</td>
                                                <td>{toBrDate(parcela.dataVencimento)}</td>
                                                <td>R$:{parcela.valorParcela.toFixed(2)}</td>
                                                <td>R$:{parcela.valorPago.toFixed(2)}</td>
                                                <td>{parcela.statusVencida}</td>


                                            </tr>
                                        )
                                    }
                                    if (tipodata === "paga") {
                                        return (
                                            <tr key={index}>
                                                <td>{parcela.nomeCliente}</td>
                                                <td>{toBrDate(parcela.dataPagamento)}</td>
                                                <td>{toBrDate(parcela.dataVencimento)}</td>
                                                <td>R$:{parcela.valorParcela.toFixed(2)}</td>
                                                <td>{parcela.statusVencida}</td>

                                            </tr>
                                        )
                                    }
                                    if (tipodata === "creditada") {
                                        return (
                                            <tr key={index}>
                                                <td>{parcela.nomeCliente}</td>
                                                <td>{toBrDate(parcela.dataPagamento)}</td>
                                                <td>{toBrDate(parcela.dataCredito)}</td>
                                                <td>R$:{parcela.valorPago.toFixed(2)}</td>
                                                <td>{parcela.statusVencida}</td>
                                            </tr>
                                        )
                                    }
                                    if (tipodata === "atraso") {
                                        return (
                                            <tr key={index}>
                                                <td>{parcela.nomeCliente}</td>
                                                <td>{toBrDate(parcela.dataVencimento)}</td>
                                                <td>{toBrDate(parcela.dataPagamento)}</td>
                                                <td>R$:{parcela.valorPago.toFixed(2)}</td>
                                                <td>{parcela.statusVencida}</td>


                                            </tr>
                                        )
                                    }


                                })}

                            <div className='arruma'>
                                <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick} /></a>
                                {page + 1}
                                <a className='button-1'> <img src={next} alt="botão de edição" onClick={handleNextPageClick} /></a>
                            </div>



                            <div className="myDiv">
                                <table>
                                    <tr><th>{coluna6} </th><th>{coluna7}</th><th>{coluna8}</th><th>{coluna9}</th></tr>
                                    <tr><td>R$:{total1.toFixed(2)}</td><td>R$:{total2.toFixed(2)}</td><td>{quantidade1}</td><td>{quantidade2}</td></tr>
                                </table>
                            </div>

                        </tbody>}

                    </div>

                </div>
                <div className='btn-1-center'>
                    <button className='btn btn1 btn-1-center' onClick={fazerBusca}>Buscar</button></div>
            </div>
        </>

    const paginaVazia = <></>

    if (userPermissao === "ADMIN" || userPermissao === "FINANCEIRO") {
        paginaRetornada = pagina;
    } else {
        paginaRetornada = paginaVazia;
    }
    return (
        paginaRetornada
    );
}

export default RelatorioPag;