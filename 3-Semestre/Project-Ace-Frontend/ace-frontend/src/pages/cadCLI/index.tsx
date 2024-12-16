import React from 'react';
import Header from './../../components/header/index'
import erro404 from '../../img/erro404.png'
import FormCadCom2 from '../../components/formCad2';
import { Link } from 'react-router-dom';

const CadCLI: React.FC = () => {
    const userPermissao = localStorage.getItem("role")
    let paginaRetornada = null;

    const pagina = 
    <>
        <Header />
        <FormCadCom2/>
    </>
    
    const paginaVazia = 
    <>
    <div className='pge' >
        <div className='info' >
            <h1>Erro 404</h1>
            <h2> Ooops, A seginte rota não foi encontrada: /cadastroCLI</h2>
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

    if(userPermissao === "ADMIN" || userPermissao === "COMERCIAL"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
        paginaRetornada
    );
}

export default CadCLI;