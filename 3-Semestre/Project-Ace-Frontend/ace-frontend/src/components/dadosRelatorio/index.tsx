import axios from "axios";
import React, { useState,useEffect } from "react";
import "./styles.css";



const DadosRelatorio: React.FC = () => {
    const userToken =localStorage.getItem("token")
    const [Clientes,setClientes] = useState(Object)


    useEffect(() => {
        axios.get('http://localhost:8080/Cliente',
        {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        }).then((Response) => { setClientes(Response.data) })

    }, [])

    let Totalareceber = 0
    let TotalPago = 0
    let tamanhoLista=Clientes.length
    for (let i = 0; i < tamanhoLista; i++) {
      Totalareceber= Totalareceber+parseFloat((Clientes[i]['servico']['preco']));

      for (let a = 0; a <(Clientes[i]['servico']['parcelas']).length; a++){
         TotalPago=TotalPago+Clientes[i]['servico']['parcelas'][a]['valorPago']
      }
      Totalareceber=Totalareceber-TotalPago

    }  
 
  return (
    <div className="myDiv">

      <table>
        <tr><th>Total Recebido </th><th>Total a Receber</th></tr>
        <tr><td>R$:{TotalPago.toFixed(2)}</td><td>R$:{Totalareceber.toFixed(2)}</td></tr>
      </table>
    </div>
    

  );
};

export default DadosRelatorio;
