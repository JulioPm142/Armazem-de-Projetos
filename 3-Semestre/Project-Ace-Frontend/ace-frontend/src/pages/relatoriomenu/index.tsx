import React from 'react';
import Header from '../../components/header/index'
import './styles.css'
import erro404 from '../../img/erro404.png'
import { Link } from 'react-router-dom';

const userPermissao = localStorage.getItem("role")
let paginaRetornada = null;

const RelatorioMenu: React.FC = () => {
    const pagina = 
        <>
            <Header />
            <div className="bgboxSelect" >
                <h1> Selecione um tipo de relatório: </h1>
            </div>

            <div className="boxButtons">
                <div className='alinhar'>

                    <Link to="/relatoriopag">
                        <button className='button' >Data de Pagamento</button>
                    </Link>

                    <Link to="/relatoriocre">
                        <button className='button' >Data de Crédito</button>
                    </Link>
                    
                    <Link to="/relatorioven">
                        <button className='button' >Data de Vencimento</button>
                    </Link>

                </div>
            </div>
        </>
    const paginaVazia =
    <>
    <div className='pge' >
        <div className='info' >
        <h1>Erro 404</h1>
        <h2> Ooops, A seginte rota não foi encontrada: /relatoriomenu</h2>
        <Link to="/">
            <button className='vol'>
                voltar
            </button>
        </Link>
        </div>
        <div className="errinho">
            <img src={erro404} alt="erro" />
        </div>
    </div>
    </>

    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }

    return (
        paginaRetornada
    );
}

export default RelatorioMenu;