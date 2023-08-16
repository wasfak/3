import "./teammember.css";
import logo from "../../assets/images/muhib.png"; // Import your images here

const Teammember = () => {
  return (
    <div className="teammember__container">
      <h2>Team Members</h2>
      <div className="teammember__images">
        <img src={logo} alt="Team Member" className="teammember__image" />
        <img src={logo} alt="Team Member" className="teammember__image" />
        <img src={logo} alt="Team Member" className="teammember__image" />
      </div>
    </div>
  );
};

export default Teammember;
