import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Singleitem from './Singleitem.jsx'
import Coustomheader from '../../../coustom_header/Coustomheader.jsx'
import './services.scss'

const Services = () => {
  const { t } = useTranslation()
  const services = t('servies', { returnObjects: true })
  const unque_headers = [...new Set(services.map((serv) => serv.header))]
const [index , setindex] = useState(0)

  return (
    <div className='servies'>
        <div className="container">
        <Coustomheader title = {t("servies_header")} />
        
        <div className="servies_container">
                  <div className="row">
                      <div className="col-4">
                          <div className="catgerys">
                                {
                                  unque_headers.map((header, i) => {
                                    return (
                                      <button  onClick={() => setindex(i)} className= { index === i ? ' catge-headers active_catgery ' : 'catge-headers'} key={header}> {header}</button>
                                    )
                                  })
                                }
                          </div>
                      </div>
                      <Singleitem  services = {services} index = {index}/>
                
                </div>
        
        
        </div>
         
        
        </div>
      
    </div>
  )
}

export default Services
