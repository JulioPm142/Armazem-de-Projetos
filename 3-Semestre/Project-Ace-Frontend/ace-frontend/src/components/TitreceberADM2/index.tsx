import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { FaSearch } from 'react-icons/fa';
import BotaoAC from '../botaoAC';
import { Link } from 'react-router-dom';

const TitReceberADM2: React.FC = () => {
    
    const getId=()=>{
        const a=window.localStorage.getItem('id')
        console.log(a)
    }
    return (
        <>

            <div className="bgTRADM2" >
                <h1> Gerenciamento de Títulos </h1>
                <div className="inputBoxTRADM2">
                    <input type="text" placeholder='⌕ pesquisar: '  />
                    <span>Usuário</span>
                </div>
                
                <div className="inputBoxTRADM2">
                    <input type="text" placeholder='parcela - 0 ' />
                    <span>Próxima Parcela</span>
                </div>
                <div className="inputBoxTRADM2">
                    <input type="date" />
                    <span>Data de Vencimento</span>
                </div>
                <div className="inputBoxTRADM2">
                    <input type="text" placeholder='R$: 00,00' />
                    <span>Valor pago</span>
                </div>
                <BotaoAC />
                <Link to="/ControleTitulosADM3">
                    <BotaoAvancar />
                </Link>
                <button  onClick={getId} />
            </div>

        </>
    );
}

export default TitReceberADM2;