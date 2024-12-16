import React from 'react';
import './styles.css'
import BotaoGT from '../botaoAvan';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
// import axios from "../../service/axios"
import axios from "axios"
import { stringify } from 'querystring';

const TitReceberADM: React.FC = () => {

    
    useEffect(()=>{
        axios.get('http://localhost:8080/Cliente').then((Response)=>{setLista(Response.data)})

    },[])  
    const [Lista, setLista]=useState([])
    const Listastr = JSON.stringify(Lista)
    const ListaJson = JSON.parse(Listastr); 
    const [Pesquisa, setPesquisa] = useState("")
    const [IdEscolhido, setIdEscolhido] = useState('')
    const [id, setId] = useState({})
    const [newId, setnewId] = useState('')
    
    const SetTheId = (e: React.SetStateAction<{}>)=>{
        setId(e)
        const a=(JSON.stringify(id)) //convertendo a resposta que recebo de cada usuario para string e depois json para que o react consiga entende-lo como um objeto
        var b=(JSON.parse(a))
        const actualId = JSON.stringify(b["id"]); 
        b = Number(actualId)
        console.log(b+1)
        window.localStorage.setItem('id',b);
    }
    
    const handleOptionChange = (event: { target: { value: any; }; }) => {
        setId(event.target.value);
      }
    

    const sendId =(e: string)=>{
        window.localStorage.setItem('id',e);
    };

    const getId=()=>{
        const a=window.localStorage.getItem('id')
        console.log(a)
    }


    return (
        <>  
            <div className="bg" >
                <h1> Controle de Títulos a Receber </h1>
                <div className="inputBox">
                    <input type="text" placeholder='⌕ pesquisar: ' onChange={(e)=>setPesquisa(e.target.value)} />
                    <span>Cliente</span>
                </div>

                    <div className='Listbox'>
                        <tbody>
                            
                            <tr>
                            <th>Id</th>
                            <th> Nome</th>
                            <th>Cpf</th>
                            <th>Parcelas</th>

                            </tr>
                            {ListaJson.filter((item: { nome: string; })=>{
                                if (Pesquisa===""){
                                    return item
                                }
                                else if(item.nome.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())){
                                    return item
                                }
                            })
                            .map((item: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; nome: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> |React.ReactFragment | React.ReactPortal | null | undefined; cpf: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, id: React.Key | null | undefined) => (
                            <tr key={id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td> 
                                    
                                    {/* <Link to="/ControleTitulosADM2">  */}
                                        {/* <div className="containerbuttonAVC">
                                            <button className="btn btn1" onClick={()=>[SetTheId({id})]}> Editar ▸ </button>
                                        </div> */}
                                    {/* </Link> */}

                                </td>
                            </tr>
                            ))}
                        </tbody>                        
                    </div>

                <Link to="/ControleTitulosADM2">
                    <BotaoGT />
                </Link>

                <button className="btn btn1" onClick={SetTheId}> Send ▸</button>
                
                <button className="btn btn1" onClick={getId}> Get ▸</button>
            </div>

        </>
    );
}

export default TitReceberADM;