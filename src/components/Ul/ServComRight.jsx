import frontendImg from "../../assets/images/front-end.png";
const ServCom = () => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="flex justify-end w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pl-8">
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easy-in duration-150"
            >
              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] text-2xl">
                Backend Development
              </h3>
              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                dolorem obcaecati enim, temporibus dolores beatae eius iusto?
                Molestias, dolorum omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <figure className="rounded-full bg-primaryColor border-white border-4 w-10  h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex item-center justify-center">
          <img src={frontendImg} alt="front end" />
        </figure>
      </div>
    </div>
  );
};

export default ServCom;
