import React, { useEffect } from 'react'
import "./whats.scss"
import { useGlobalContext } from '../context/context'
import {MdSend} from "react-icons/md"
import imgUser from "../pages/images/user.svg"
import imgHello from "../pages/images/hello.svg"
import { useTranslation } from 'react-i18next'
import {AiFillCloseCircle} from "react-icons/ai"

const Whatsaapcontact = () => {
  const { massage_Apper ,  close_massage  ,massageHandelar} = useGlobalContext()
  useEffect(() => {
    setTimeout(massageHandelar, 2000); // 2 minutes = 120,000 milliseconds
  }, []);
  const { t } = useTranslation();
  return (
  
      <div className={massage_Apper ? "massage_section active_massage " : "massage_section"}>

        <button type='button' className='close_massage' onClick={ close_massage}> <AiFillCloseCircle/> </button>
        <div className="intrduce_massager">

            <div className="content_massager">

                <div className="welcom_massage">
                    {t("whatsApp_message.title_ms")}
                </div>
                <div className="name_of_respons">
                <p> {t("whatsApp_message.text_ms")} <img style={{width: "15px", margin: "0 5px"}} src={imgHello} alt="" /></p>  <img src={imgUser} alt="" /> 
                </div>
                <div className="massage_container">
                    <input type="text"  placeholder={t("whatsApp_message.place_holder_ms")} className='input'/>
                    <a href=""> <MdSend/> </a>
                </div>
            
            </div>
     
        </div>

      </div>

 
  )
}

export default Whatsaapcontact