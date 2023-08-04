import React from 'react'
import './About.scss'
import Member from './Member.jsx'
import BreadCrumb from '../breadCrumb/BreadCrumb.js'
import { useTranslation } from 'react-i18next'
const About = () => {
  const { t } = useTranslation();
  const data = t('about.about_our_work', { returnObjects: true })
  return (
<>
<BreadCrumb title = {"About"} />
    <section className='about'>
        <div className="container">
          <div className='about-up'>
          <div className="row">
                    <div className="col-6">
                        <div className="image">
                          <img src="../images/about-img.png" alt="about-img" />
                        </div>

                    
                    </div>
               <div className="col-6">
                        <div className="text">
                          <h2>{t("about.about_title")}</h2>
                          <p>{t("about.about_text_1")}</p>
                          <p>{t("about.about_text_2")}</p>
                        </div>
                        
                    
                    </div>
              </div>
          </div>
          <div className="about-center">
            <div className="title-text-up">
              <h2>{t("about.about_our_work_title_1")}</h2>
              <h3>{t("about.about_our_work_title_2")}</h3>
            </div>
            <div className="row">
              {data.map((item) => {
                return (
                  <div className='col-4' key={item.id}>
                    <div className="about-center-content">
                    <div className="number-box">
                   {item.id}
                    </div>
                    <div className="img-box">
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                    <div className="text-box">
                      <h3>{item.title}</h3>
                      <p>{item.dec}</p>
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
              <Member />
        </div>
    
    </section>
    </>
  )
}

export default About