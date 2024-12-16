import React from 'react';
import './styles.css'

/*interface ButtonProps {
  
    onClick?: (e:any) => void;
  
}*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  }

const BotaoGT = ({
    onClick
}: ButtonProps) =>{
    return(
        <>
            <div className="containerbuttonAVC">
                <button className="btn btn1" onClick={onClick}> Avançar ▸</button>
            </div>
        </>
    );
}

export default BotaoGT;