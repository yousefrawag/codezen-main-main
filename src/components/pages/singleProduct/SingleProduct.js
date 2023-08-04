import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SingleProduct.scss';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import {BiShow} from "react-icons/bi";
const   SingleProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const projects = t('Projects', { returnObjects: true });
  const project = projects.find((p) => p.id === id);
  const navbalinks = t("navbarlinks", {returnObjects: true})
  
  return (
    <>
    <BreadCrumb title="project" />
    <div className='single-product-wrapper'>
      
      <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card-product">
                <div className="title-card">
                  <h4>Where do you want to go ?</h4>
                </div>
                <div className="card-links-upper">
                {
          navbalinks.map((item)=> {
            return (
             <Link to={item.href} key={item.id}>
              {item.text}
              </Link>
            )
          })
        }
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="single-product-card">
                <div className="card-title">
                  <h4>{project.bage.title}</h4>
                </div>
                <div className="card-image">
                  <img src={project.bage.imgUrl} alt="design" />
                </div>
                <div className="card-description">
                  <p>
                    {project.bage.description}
                  </p>
                  <div style={{display: "flex"}}>
                  <span style={{ padding: "0 10px 0 0" }}> <BiShow/> 925 </span>
                  <span
                    style={{ borderLeft: "1px solid #ccc", padding: "0 10px" }}
                  >
                      <ReactStars
                        count={5}
                        size={13}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                  </span>
                  </div>
                </div>
              </div>
              <div className="back-to-product">
                <Link to="/blogs">
                  {" "}
                  <HiOutlineArrowNarrowLeft /> go to our work
                </Link>
              </div>
              <div className="single-product-comment">
                <h4>Does it fit your idea?</h4>
                <form className="single-form">
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <div className="form-group">
                    <input
                      placeholder="name*"
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      placeholder="email*"
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="phone*"
                      type="phone"
                      name="phone"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  </div>
                  <div className="form-group" style={{ width: "100%" }}>
                    <textarea placeholder="comment*"></textarea>
                  </div>

                  <div className="single-product-buttons">
                    <button className="btn">send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default SingleProduct