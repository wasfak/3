import "./teammember2.css";
import logo from "../../assets/images/muhib.png"; // Import your images here

const Teammember = () => {
  return (
    <div className="teammember__container" id="members">
      <h2>Team Members</h2>
      <div className="pic__container">
        <div className="teammember__images">
          <img src={logo} alt="" />
          <h2>Ibrahim Daher</h2>
          <h4>Co-Founder, CEO</h4>
        </div>
        <div className="teammember__images">
          <img src={logo} alt="" />
          <h2>Ahmed Wasfy</h2>
          <h4>Co-Founder, CEO</h4>
        </div>
        <div className="teammember__images">
          <img src={logo} alt="" />
          <h2>Ehab Mourad</h2>
          <h4>Co-Founder, CEO</h4>
        </div>
      </div>
    </div>
  );
};

export default Teammember;
