import "./hero.css";
import banner from "../../assets/images/portfolio-01.jpg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const Hero = () => {
  return (
    <section id="home">
      <div className="hero__container" id="home">
        <div className="hero__left">
          <div className="hero__h2">
            <h2>
              Grow Your <br />
              <span
                className="bg-box dynamic-bg"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Business
              </span>
              <br />
              with invo ideas
            </h2>
          </div>
          <div className="hero__h4">
            <h4>
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Iste possimus, eum officia laudantium non
              error <br />
              dolorem reprehenderit quos iure voluptatem?
            </h4>
          </div>
          <div className="hero__btn">
            <button>
              <a href="">Free Consultancy</a>
            </button>
          </div>
        </div>

        <div className="hero___img">
          <img src={banner} alt="" />
        </div>
        <div className="hero__social">
          <BsFacebook className="fb" />
          <AiOutlineWhatsApp className="fb" />
          <BsInstagram className="fb" />
          <BsWhatsapp className="fb" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
