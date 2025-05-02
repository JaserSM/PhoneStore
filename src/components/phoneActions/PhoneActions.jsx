import React, { useEffect, useState } from 'react';
import './PhoneActions.css';
import OptionsAction from '../optionsAction/OptionsAction';
import { addPhoneToCart } from '../../services/api';

const MobilePhoneActions = ( {phoneData} ) => {

  const [storage, setStorage] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {

    if(phoneData.options.colors.length > 1){
      setColor(0)
    }
    else{
      setColor(phoneData.options.colors[0].code)
    }
    if(phoneData.options.storages.length > 1){
      console.log("storage if")
      setStorage(0)
    }
    else{
      console.log("storage else")
      console.log(phoneData.options.storages.length )
      console.log(phoneData.options.storages)
      setStorage(phoneData.options.storages[0].code)
    }
  }, [phoneData]);


  function setCurrentColor(code){
    setColor(code);
  }
  function setCurrentStorage(code){
    setStorage(code);
  }

  async function addToCart() {
    console.log("click");
    if(color == 0 || storage == 0){
      return
    }
    const phoneDataToCart = { id : phoneData.id, colorCode: color, storageCode: storage}
    try {
      const cartPhones = await addPhoneToCart(phoneDataToCart);
      localStorage.setItem("cartPhones", cartPhones.count);
    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <>
    <div className="phoneActionsCard">   
      <div className="phoneActions">
        <div className="phoneActions__storage">
          <p className="actionLabelBlack">Storage. <span className="actionLabel">How much space do you need?</span></p>
          <div className='phoneActions__options'>
            <OptionsAction data={phoneData.options.storages} currentOption={storage} handleOption={setCurrentStorage} />
          </div>
        </div>
        <div className="phoneActions__color">
          <p className="actionLabelBlack">Colors. <span className="actionLabel">Choose your favorite.</span></p>
          <div className='phoneActions__options'>
            <OptionsAction data={phoneData.options.colors} currentOption={color} handleOption={setCurrentColor} />
          </div>
        </div>
      </div>
    </div>
    <div className="buttonAddToCart">
      <button onClick={addToCart}>Add to cart</button>
    </div>
    </>
  );
};

export default MobilePhoneActions;