import React, { useState } from 'react';
import './styles.css';

type DropdownProps = {
  options: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
    <div className='DropContainer'>
      <button className='btDrop' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || '▾ Selecione uma função'}
      </button>
      
      {isOpen && (
        <ul className='listinha'>
          {options.map((option) => (
            <li className='optlist' key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Dropdown;