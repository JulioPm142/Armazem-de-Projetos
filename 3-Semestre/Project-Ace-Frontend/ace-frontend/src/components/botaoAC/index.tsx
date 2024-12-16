import React from 'react';
import './styles.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const BotaoAC= ({
    onClick
}: ButtonProps) =>{
    return(
        <>
            <div className="containerbuttonAVC">
                <button className="btn2 btn2" onClick={onClick}>◂ voltar </button>
            </div>
        </>
    );
}

export default BotaoAC;