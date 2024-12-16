import React, { useState } from 'react';
import Logo from '../../img/logo.png'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

const LoginADM: React.FC = () => {

    interface Usuario {
        email: string
        senha: string
    }

    interface Token {
        token: string
        role: string
    }



    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const user = {
        email: email,
        password: senha,

    }

    function handleFunction(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        api.post("/login/autenticado", user).then(response => {
            const token: Token = response.data
            console.log(token);

            localStorage.setItem("token", token.token)
            localStorage.setItem("role", token.role)

            if (token) {
                alert("Bem vindo!")
                navigate("/controletitulosfin")
                console.log(localStorage.getItem("token"))
                console.log(localStorage.getItem("role"))
            } else {
                alert("Tente novamente!")
            }

        }).catch(error => {
            alert("Login ou senha inválidos!")
        })



    }


    return (
        <>
            <div className='loginall'>
                <form action="">
                    <div className="container">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="titulo">
                            <h1>Bem Vindo!</h1>
                            <p>Entre na sua conta:</p>
                        </div>

                        <div className="inputs">
                            <input type="email" placeholder="digite seu login..." onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="digite sua senha..." onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <button className="Botaoentrar" onClick={handleFunction}> <p> Entrar </p></button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginADM;