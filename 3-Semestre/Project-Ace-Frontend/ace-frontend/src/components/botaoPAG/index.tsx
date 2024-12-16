import React from 'react';
import './styles.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const BotaoPAG= ({
    onClick
}: ButtonProps) =>{
    return(
        <>
            <div className="containerbuttonAVC">
                <button className="btn btn1" onClick={onClick}> Registrar Pagamento ▸</button>
            </div>
        </>
    );
}

export default BotaoPAG;