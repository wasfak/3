import "./contactus.css";
import { BsArrowUpRight } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="hero__container__contact" id="contact">
      <div className="bg"></div>
      <div className="cir">
        <h2>Contact Us</h2>
        <BsArrowUpRight className="arrow" />
      </div>
    </div>
  );
};

export default ContactUs;
