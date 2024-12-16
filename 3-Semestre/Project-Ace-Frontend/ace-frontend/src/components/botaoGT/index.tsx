import React from 'react';

import './styles.css'




interface ButtonProps {
    
    onClick?: () => void;
    
}

const BotaoAvancar: React.FC = ({
    onClick 
}: ButtonProps) =>{
    return(
        <>
            <div className="containerbuttonAVC">
                <button className="btn btn1" onClick={onClick}> AGerenciar Títulos ▸</button>
            </div>
        </>
    );
}

export default BotaoAvancar;