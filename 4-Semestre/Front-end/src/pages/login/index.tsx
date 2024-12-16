import React, { useContext, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { getUsuarioEmail, login } from "../../utils/axios.routes";
import { LoginContext } from "../../contexts/LoginContexts";
import useLogin from "../../hooks";
import { sha512 } from "sha512-crypt-ts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { writeToken, token } = useLogin();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: email,
      senha: sha512.crypt(password, "password"),
    };
    try {
      const response = await login(data);
      console.log(response);

      if (response.token) {
        writeToken(response.token);
        if (token) {
          navigate("/perfil");
          toast.success(`Bem vindo, ${email}!`, {
            position: "top-right",
          });
        }
      } else {
        toast.error("Email ou senha incorretos!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao realizar login", {
        position: "top-right",
      });
    }
    try {
      const res = await getUsuarioEmail(email);
      // console.log(res);
      localStorage.setItem("@id", res.id_usuario);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error(`Erro ao fazer login`, {
        position: "top-right",
      });
    }
  };
  const handlePublic = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      navigate("/estacoes");
      toast.success(`Bem vindo, ${email}!`, {
        position: "top-right",
      });
    } catch (error) {
      // console.error("Erro ao entrar no perfil publico", error);
      toast.error(`Erro ao entrar no perfil publico`, {
        position: "top-right",
      });
    }
  };



  return (
    <div className="login">
      <form action="">
        <div className="container">
          <div className="input">
            <div className="titulo">
              <h1> Login </h1>
            </div>
            <hr />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
            />
            <input
              type="password"
              required
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={30}
            />
            <button onClick={handleLogin} className="botaoLogin">
              <p>Entrar</p>
            </button>
            <hr />
            <button onClick={handlePublic} className="botaoPublico">
              <p>Entrar sem logar</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
