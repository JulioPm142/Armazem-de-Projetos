import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index'
import erro404 from '../../img/erro404.png'
import TitReceber from '../../components/TitReceber';
import { Link } from 'react-router-dom';

const CtrFIN: React.FC = () => {

    let paginaRetornada = null;
    const [userPermissaoo, setUserPermissaoo] = useState<string | null>(null)

useEffect(() =>{
    const userPermissao = localStorage.getItem("role");
    setUserPermissaoo(userPermissao)
}, [])
    const pagina = 
        <>   
            <Header />
            <TitReceber/>    
        </>
    
    const paginaVazia = 
    <>
    <div className='pge' >
        <div className='info' >
        <h1>Erro 404</h1>
        <h2> Ooops, A rota não foi encontrada</h2>
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
    if(userPermissaoo === "ADMIN" || userPermissaoo === "COMERCIAL" || userPermissaoo === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
       
     paginaRetornada
 
    );
    
}


export default CtrFIN;