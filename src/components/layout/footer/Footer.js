import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill
} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {FaEnvelope} from "react-icons/fa"
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  const footerCenterLinks = t("footerCenterLinks", {returnObjects: true});
  const footerEndLinks = t("footerEndLinks", {returnObjects: true})
  return (
    <>
      <footer
        className="footer-upper"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="sign d-flex align-items-center text-white">
                <img src="../images/newsletter.png" alt="newsletter" />
                <p>{t('footer_upper.best_inbox')}</p>
              </div>
            </div>
            <div className="col-7">
              <div className="Sub-email">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t('footer_upper.place_holder')}
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                    {t('footer_upper.Subscribe')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="footer-center"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="txt-footer-center">
                <div className="footer-center-links">
                  <div className="img-logo-footer">
                    <img src="../images/15.png" alt="logo" />
                  </div>
                  <div className="social_icons">
                  <ul className="wrapper">
  <li className="icon facebook">
    <span className="tooltip">Facebook</span>
    <span> <BsFacebook/> </span>
  </li>
  <li className="icon twitter">
    <span className="tooltip">Twitter</span>
    <span><BsTwitter/> </span>
  </li>
  <li className="icon instagram">
    <span className="tooltip">Instagram</span>
    <span> <BsInstagram/> </span>
  </li>
  <li className="icon github">
    <span className="tooltip">Github</span>
    <span> <BsGithub/> </span>
  </li>
  <li className="icon youtube">
    <span className="tooltip">Youtube</span>
    <span> <BsYoutube/> </span>
  </li>
</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
              <h4>{t('footer_center.head_1')}</h4>
                <div className="footer-center-links">
                <address style={{ color: "#dadada", fontSize: "14px", marginBottom: '5px' }}>
                  <ImLocation style={{margin: '0 3px'}}/> {t('footer_center.address')}
                  </address>
                  <a href="tel: +201118459882"> <BsFillTelephoneFill style={{margin: '0 3px'}}/>{t('footer_center.phone')}</a>
                  <a
                    style={{ textTransform: "lowercase" }}
                    href="mailto: codezen99@gmail.com"
                  >
                  <FaEnvelope style={{margin: '0 3px'}}/>  {t('footer_center.mail')}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
                <h4>{t('footer_center.head_2')}</h4>
                <div className="footer-center-links">
                  {footerCenterLinks.map((item) => {
                    return (
                      <Link key={item.id} to={item.href}> {item.text} </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="txt-footer-center">
                <h4>{t('footer_center.head_3')}</h4>
                <div className="footer-center-links">
                {footerEndLinks.map((item) => {
                    return (
                      <Link key={item.id} to={item.href}> {item.text} </Link>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="txt-co">
                <p style={{ textTransform: "capitalize" }}>
                  &copy; {t("footer_copy")}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="cards d-flex justify-content-end">
                <div>
                  <img src="./images/discover-svgrepo-com.svg" alt="discover" />
                </div>
                <div>
                  <img
                    src="./images/master-card-svgrepo-com.svg"
                    alt="master-card"
                  />
                </div>
                <div>
                  <img src="./images/paypal-3-svgrepo-com.svg" alt="paypal" />
                </div>
                <div>
                  <img src="./images/wepay-svgrepo-com.svg" alt="wepay" />
                </div>
                <div>
                  <img src="./images/maestro-svgrepo-com.svg" alt="maestro" />
                </div>
                <div>
                  <img src="./images/shopify-svgrepo-com.svg" alt="shopify" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
