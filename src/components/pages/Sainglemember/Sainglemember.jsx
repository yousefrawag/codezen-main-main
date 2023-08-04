import React from 'react'
import "./singlemember.scss"
import BreadCrumb from "../breadCrumb/BreadCrumb.js"
import Coustomheader from '../../coustom_header/Coustomheader'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
const Sainglemember = () => {
  const {t} =useTranslation();
  const {id} = useParams()
  const teamData = t("team_staff" , {returnObjects: true});
  const fetch_Mebmer = teamData.find((item) => item.name === id)
  
  return (
    <div className='single_member'>
    <BreadCrumb  title = {fetch_Mebmer.name}/>
        <div className="container">
              <div className="parent_memeber">
                    <div className="row">
                      <div className="col-8">
                          <div className="about_me">
                              <div className="member_image_name">
                                  <div className="member_image">
                                      <img src={fetch_Mebmer.image} alt={fetch_Mebmer.image} />
                                  </div>
                                  <h6>{fetch_Mebmer.name}</h6>
                                  
                              </div>
                              <hr className='member_hr'/>
                              <div className="about_me_text">
                                  <Coustomheader title = {"about me"} />
                                  <p>
                                        {
                                          fetch_Mebmer.description
                                        }
                                  </p> 

                              </div>
                          </div>
                      </div>
                        <div className="col-4">
                            <div className="logo">
                                  logo team
                            </div>
                      
                        </div>
                      
                </div>
              
              </div>

        </div>
     
    </div>
  )
}

export default Sainglemember
