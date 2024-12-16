import React, { useEffect, useState } from 'react';
import './styles.css'
import Dropdown from '../dropdown';
import BotaoAvancar from '../botaoAvan';
import { Link } from 'react-router-dom';
import { api } from '../../service/api';




const FormADM: React.FC = () => {
    
    const [userToken, setUserToken] = useState<string | null>()

    useEffect(()=> {
        const tokinho = localStorage.getItem("token")
        setUserToken(tokinho)
    }, [])

    interface UserInfo{
        email?: string
        senha?: string
        cargo?: string

    }
    
    const [userEmail, setUserEmail] = useState("")
    const [userSenha, setUserSenha] = useState("")
    const [cargo, setCargo] = useState("")

    const userInfo: UserInfo = {
        email : userEmail,
        senha : userSenha,
        cargo : cargo
    }

    function handleFunction(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()

        console.log(userInfo)
        api.post("/login/", userInfo,
        {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        }).then(
            response => {
                const resposta = response.data
                console.log(resposta)
                alert("Usuário cadastrado com sucesso!")
            }
        ).catch(error => {
            alert("Erro ao cadastrar, tente novamente!")
        })
    }

    function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        if(cargo === ""){
            setCargo(e.target.value)
        }if(cargo === "COMERCIAL"){
            
            const comercialCheckbox = document.getElementById('comercialbox') as HTMLInputElement;
            comercialCheckbox.checked = false;
            setCargo(e.target.value)
        }
        if(cargo === "FINANCEIRO"){
            const financeiroCheckbox = document.getElementById('financeirobox') as HTMLInputElement;
            financeiroCheckbox.checked = false;
            setCargo(e.target.value)
        }
        
        
    }
    
    // function handleCheckBoxFinanceiro(){

    // }

    return (
        <>

            <div className="bgformadm" >
                <h1> Cadastro de usuários</h1>
                <div className="inputBoxformadm">
                    <input type="email" required onChange={(e) => setUserEmail(e.target.value)}/>
                    <span>Email</span>
                </div>
                <div className="inputBoxformadm">
                    <input type="password" required onChange={(e) => setUserSenha(e.target.value)}/>
                    <span>senha</span>
                </div>

                    <div>
                    <p>
                        <input type="checkbox" id="financeirobox" required value="FINANCEIRO" onChange={(e) => handleCheckBox(e)}/>
                        <label htmlFor="financeirobox">Financeiro</label>
                    </p>
                    <p>
                        <input type="checkbox" id="comercialbox" required value="COMERCIAL" onChange={(e) => handleCheckBox(e)}/>
                        <label htmlFor="comercialbox">Comercial</label>
                    </p>
                    </div>

                <div className="containerbuttonAVC">
                    <button className="btn btn1" onClick={(e) => handleFunction(e)}> Avançar ▸</button>
                </div>

            </div>

        </>
    );
}

export default FormADM;