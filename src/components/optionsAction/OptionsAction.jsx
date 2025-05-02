import React from 'react';
import "./OptionsAction.css"

const OptionsAction = ( {data, currentOption, handleOption} ) => {


  return (
    <>
      {data.map(option => (
            <div className={option.code == currentOption ? 'phoneActions__optionActive' : 'phoneActions__option' }
            key={option.code}
            onClick={() => handleOption(option.code)}>
              <p>{option.name}</p>
            </div>
          ))}
    </>
  );
};

export default OptionsAction;