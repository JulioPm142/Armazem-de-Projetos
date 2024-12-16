import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import BotaoAC from '../botaoAC';
import { Link, useNavigate } from 'react-router-dom';

interface ParcelaInfo{
    parcela: {
       idCliente: number,
       numeroParcela?: number,
       dataVencimento?: Date,
       dataPagamento?: Date,
       dataCredito?: Date,
       valorParcela: number,
       valorPago: number
   }
}
const TitReceber2 = ({
    parcela
}: ParcelaInfo) => {
    const navigate = useNavigate()
    function handleFunction(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        navigate("/controletitulosfin")
    }
    return (
        <>

            <div className="bgTRAFIN2" >
                <h1> Gerenciamento de Títulos </h1>
                
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='parcela - 0 ' value={parcela.numeroParcela + "°"}/>
                    <span>Próxima Parcela a Vencer</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input type="date" value={parcela.dataVencimento?.toString()}/>
                    <span>Data de Vencimento</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input id ="valorApagar"type="text" placeholder='R$: 00,00' value={(parcela.valorParcela - parcela.valorPago).toFixed(2)}/>
                    <span>Valor a Pagar</span>
                </div>

                <div className='botaoti2'>
                <BotaoAC onClick={(e) =>handleFunction(e)} />
                <Link to={`/controletitulosfin3/${parcela.idCliente}`}>
                    <BotaoAvancar />
                </Link>
                </div>

            </div>

        </>
    );
}

export default TitReceber2;