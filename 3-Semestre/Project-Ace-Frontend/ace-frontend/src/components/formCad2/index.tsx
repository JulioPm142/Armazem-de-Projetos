import React, { useState, useRef } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { IMaskInput } from "react-imask";
import IMask from 'imask';
import { error } from 'console';


const FormCadCom2: React.FC = () => {   


    const { setValue, register, setFocus } = useForm();

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState(0)
    const [complemento, setComplemento] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")
    const [preco, setPreco] = useState(0)
    const [preco2, setPreco2] = useState("");

    function StrToFloat(Str: string): number {
        const fixedValue = parseFloat(Str.replace(/\./g, '').replace(',', '.'));
        return (fixedValue);
      }

    const userCadastrado = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        endereco: {
            cep: cep,
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            numero: numero,
            complemento: complemento,
            uf: uf
        },
        servico: {
            preco: StrToFloat(preco2),
            parcelas: [
                {
                  valorPago: 0,
                }
              ]
        }
    }

    const userToken = localStorage.getItem("token")
    //const userRole

    const urlPost = "http://localhost:8080/Cliente/inserir"
    const handleSubimit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const cpfString = cpf.toString()
        
        if(nome === "" || cpf === "" || preco2 === "" || cpfString.length !== 14 ){
            alert('Preencha os campos corretamente!')
        }else{
        axios.post(urlPost, userCadastrado, {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        }).then((response) => {
            console.log(response)
            alert("Cliente cadastrado com sucesso!")
            navigate("/controletitulosfin")
        })
            .catch(error => console.log(error))
    }}

    const navigate = useNavigate();

    const checkCEP = (value: React.ChangeEvent<HTMLInputElement>) => {
        const cep = value.target.value.replace(/\D/g, "");
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setValue("rua", data.logradouro);
                setValue("uf", data.uf);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setFocus("number");
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUf(data.uf);
            });


    };
    
    return (
        <>
            <h1> Cadastro de Cliente</h1>
            <div className="bg" >
                <div className="coluna">
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        name='nome' 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                        />
                        <span>Nome</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <IMaskInput
                            mask="(00) 00000-0000"
                            required
                            onAccept={(value: React.SetStateAction<string>) => setTelefone(value)}
                        />
                        <span>telefone</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <IMaskInput
                            mask="000.000.000-00"
                            onAccept={(value: React.SetStateAction<string>) => setCpf(value)}
                            required
                        />
                        <span>CPF</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text"
                         name='cep' 
                         onBlur={checkCEP} 
                         onChange={(e) => setCep(e.target.value)} 
                         required 
                         />
                        <span>CEP</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        {...register('rua')} 
                        name='rua' 
                        value={rua}
                        onChange={(e) => setRua(e.target.value)} 
                        required
                        />
                        <span>Logradouro</span>
                    </div>
                </div>
                <div className='coluna2'>
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        {...register('bairro')} 
                        name='bairro' 
                        onChange={(e) => setBairro(e.target.value)} 
                        required
                        />
                        <span>Bairro</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        {...register('cidade')} 
                        name='cidade' 
                        onChange={(e) => setCidade(e.target.value)} 
                        required
                        />
                        <span>Cidade</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        {...register('uf')} 
                        name='uf' 
                        onChange={(e) => setUf(e.target.value)} 
                        required
                        />
                        <span>Estado</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="number"
                         name='numero' 
                         onChange={(e) => setNumero(parseInt(e.target.value))} 
                         required
                         />
                        <span>numero</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" 
                        name='complemento'
                        onChange={(e) => setComplemento(e.target.value)} 
                        required                         
                         />
                        <span>Complemento</span>
                    </div>
                </div>

            </div>
            <div className="coluna3">
                <div className="inputBoxCADCLI">
                    <IMaskInput
                        mask="numeric"
                        blocks={{
                            // Define um bloco de números com duas casas decimais
                            numeric: {
                                // Definição de caracteres aceitáveis
                                mask: Number,
                                signed: false,
                                scale: 2,
                                thousandsSeparator: '.',
                                padFractionalZeros: false,
                                normalizeZeros: false,
                                radix: ',',
                                mapToRadix: ['.']
                            },
                        }}
                        autofix={true}
                        value={preco2}
                        onAccept={(value: React.SetStateAction<string>) => setPreco2(value)}
                        dir="rtl"
                        placeholder="R$: 0,00"
                        required
                    />
                    <span>valor serviço:</span>
                </div>

            </div>
            <div className='botaoA'>
                <div className="containerbuttonAVC">
                    <button className="btn btn1" onClick={handleSubimit}> Cadastrar ▸</button>
                </div>
            </div>

        </>
    );
}

export default FormCadCom2;