import banner from "../../assets/images/portfolio-03.jpg";
import "./approch.css";
const Approch = () => {
  return (
    <section className="app__container">
      <div className="app__h2">
        <h2>Our Approach</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum
          aspernatur nulla pariatur aliquam quia <br />
          temporibus saepe iusto nihil distinctio quis?
        </h4>
      </div>
      <div className="app__mid">
        <img src={banner} alt="" />
        <div className="app__h">
          <h2>Unlock The Potential of Your Business.</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur fuga numquam voluptatem ducimus culpa. Error dolorum
            perspiciatis nisi fugiat mollitia.
          </h4>
          <div className="line"> </div>
        </div>
        <img src={banner} alt="" className="img-2" />
      </div>
    </section>
  );
};

export default Approch;
