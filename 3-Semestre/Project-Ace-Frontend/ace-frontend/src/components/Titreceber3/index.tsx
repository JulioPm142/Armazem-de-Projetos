import React, { useState } from 'react';
import './styles.css';
import { FaSearch } from 'react-icons/fa';
import BotaoPAG from '../botaoPAG';
import { api } from '../../service/api';
import BotaoAC from '../botaoAC';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';


interface ParcelaInfo{
    parcela: {
        id: string,
        idCliente: number,
        nomeCliente: string,
        numeroParcela: number,
        dataVencimento?: Date,
        dataPagamento?: Date,
        dataCredito?: Date,
        valorParcela: number,
        valorPago: number
   }
}



const TitReceber3= ({
    parcela
}: ParcelaInfo) => {

    const [dataPagamentoParcela, setDataPagamentoParcela] = useState(Date)
    const [dataCreditoParcela, setDataCreditoParcela] = useState(Date)
    const [valorPagoParcela, setValorPagoParcela] = useState("")

    function StrToFloat(Str: string): number {
        const fixedValue = parseFloat(Str.replace(/\./g, '').replace(',', '.'));
        return (fixedValue);
      }

      const userToken = localStorage.getItem("token")

    const parcelaAtualizada = {
        id: parcela.id,
        idCliente:parcela.idCliente ,
        nomeCliente:parcela.nomeCliente,
        numeroParcela : parcela.numeroParcela,
        dataVencimento : parcela.dataVencimento,
        dataPagamento : dataPagamentoParcela,
        dataCredito : dataCreditoParcela,
        valorParcela : parcela.valorParcela,
        valorPago : StrToFloat(valorPagoParcela) + parcela.valorPago

    }
    const navigate = useNavigate()

      function handleFunction(e:React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault()
            if(dataCreditoParcela >= dataPagamentoParcela) {
              if(parcelaAtualizada.valorPago > (12 - parcelaAtualizada.numeroParcela)*parcelaAtualizada.valorParcela + parcelaAtualizada.valorParcela) {
                alert("Valor máximo ultrapassado")
              } else if(parcelaAtualizada.valorPago >= parcelaAtualizada.valorParcela) {
                api.put("/Parcela/atualizarParcela", parcelaAtualizada, {
                  headers: {
                      Authorization: `Bearer ${userToken}` 
                  }
              })
                .then(response => {
                  const resposta = response.data
                  console.log(resposta)
                  if(resposta){
                    alert("Parcela alterada com sucesso!");  
                  }else{
                    alert("Parcela não encontrada")
                  }
                  navigate(`/controletitulosfin2/${parcela.idCliente}`)
                }).catch(error => console.log(error))
              } else {
                alert("Valor mínimo não atendido")
              }
            } else {
              alert("A data de pagamento não pode ser maior que a data de credito")
            }
        }

    return (
        <>

            <div className="bgTRAFIN3" >
                <h1> Pagamento </h1>
                
                <div className="inputBoxTRAFIN3">
                    <input type="date" onChange={(e) => setDataPagamentoParcela(e.target.value)} />
                    <span>Data de Pagamento</span>
                </div>
                <div className="inputBoxTRAFIN3">
                    <input type="date" onChange={(e) => setDataCreditoParcela(e.target.value)}/>
                    <span>Data de Crédito</span>
                </div>
                <div className="inputBoxTRAFIN3">
                <IMaskInput
                        mask="numeric"

                        blocks={{
                            // Define um bloco de números com duas casas decimais
                            numeric: {
                                // Definição de caracteres aceitáveis
                                mask: Number,
                                signed: false,
                                scale: 2,
                                thousandsSeparator: '.',
                                padFractionalZeros: false,
                                normalizeZeros: false,
                                radix: ',',
                                mapToRadix: ['.']
                            },
                        }}
                        autofix={true}
                        value={valorPagoParcela}
                        onAccept={(value: React.SetStateAction<string>) => setValorPagoParcela(value)}
                        dir="rtl"
                        placeholder={"R$"+`${(parcela.valorParcela-parcela.valorPago).toFixed(2)}`}
                    />
                     <span>Valor a Receber</span>
                </div>

                <div className='botaoti3'>
                <Link to={`/controletitulosfin2/${parcela.idCliente}`}>
                <BotaoAC />
                </Link>
                <BotaoPAG  onClick={(e) =>handleFunction(e)} />
                </div>
            </div>

        </>
    );
}

export default TitReceber3;