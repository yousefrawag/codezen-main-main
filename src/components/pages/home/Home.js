import { useTranslation } from 'react-i18next';
import {BsCheck2Square} from 'react-icons/bs';
import './Home.scss';
import Header from "../../layout/header/Header";
import Servies from './services/services';
import Projects from './projects/Projects';


const Home = () => {
  const {t} = useTranslation()
  return (
    <>

    {/* header */}

    <Header/>

    {/* Home Wrapper 1 */}

    <Servies/>


    {/* projects */}

    <Projects/>

     
     {/* Home Wrapper 2 */}

    <section className='home-wrapper-2'>
      <div className='container'>
              <div className='row'>
        <div className='col-6'>
          <div className="text-section">
            <h1 className='title-section'>{t('home_wrapper_2.title')}</h1>
            <p>{t('home_wrapper_2.text')}</p>
            <div className='check-section'>
              <div className='check check-one'>
                <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_1')}</span>
                </div>
                <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_2')}</span>
                </div>
                <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_3')}</span>
                </div>

              </div>
              <div className="check check-tow">
              <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_4')}</span>
                </div>
                <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_5')}</span>
                </div>
                <div>
                  <BsCheck2Square/>
                  <span>{t('home_wrapper_2.feat_6')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className="image-section">
            <img src="../images/img-home-1.jpg" alt="design" />
          </div>
        </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default Home