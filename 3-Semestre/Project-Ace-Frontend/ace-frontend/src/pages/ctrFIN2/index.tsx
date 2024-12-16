import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/index'
import TitReceber2 from '../../components/Titreceber2';
import { api } from '../../service/api';
import erro404 from '../../img/erro404.png'
import { Link } from 'react-router-dom';

const CtrFIN2: React.FC = () => {
    const { idCliente } = useParams();
    let paginaRetornada = null;
    const [ parcela, setParcela] = useState()
    const userPermissao = localStorage.getItem("role");

    useEffect(()=>{
        getParcela()
    }, [])

    const userToken = localStorage.getItem("token")
    async function getParcela(){
        api.get(`/Parcela/buscarParcela/${idCliente}`, {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        })
        .then(response => {
            setParcela(response.data)
        })
    }  

    const pagina = 
    <>
        <Header />
        {parcela && <TitReceber2 parcela={parcela}/>}
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

    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO" || userPermissao === "COMERCIAL" ){
        paginaRetornada = pagina;
    }else{
    paginaRetornada = paginaVazia;
    }
    return (
       paginaRetornada 
    );
}

export default CtrFIN2;