import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { FaSearch } from 'react-icons/fa';
import BotaoPAG from '../botaoPAG';



const TitReceberADM3: React.FC = () => {
    return (
        <>

            <div className="bgTRADM3" >
                <h1> Pagamento </h1>
                
                <div className="inputBoxTRADM3">
                    <input type="date"  />
                    <span>Data de Pagamento</span>
                </div>
                <div className="inputBoxTRADM3">
                    <input type="date" />
                    <span>Data de Crédito</span>
                </div>
                <div className="inputBoxTRADM3">
                    <input type="text" placeholder='R$: 00,00' />
                    <span>Valor a Receber</span>
                </div>
                <BotaoPAG/>
                
            </div>

        </>
    );
}

export default TitReceberADM3;