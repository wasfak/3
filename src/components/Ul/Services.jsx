import ServComRight from "./ServComRight";
import ServComLeft from "./ServComLeft";
const Services = () => {
  return (
    <section id="services">
      <div className=" lg:pt-5 bg-[#1d1d1d]">
        <div className="text-center">
          <h2 className="text-white font-[800] text-[2.4rem] mb-5">
            What Do We Do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-white font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dolorem adipisci obcaecati ab quasi tempore a ipsa nostrum
            accusantium excepturi. Dicta architecto cumque porro voluptates
            laudantium recusandae quos esse suscipit!
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="realtive text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/*____________________LEFT CARD___________________*/}

              {/*____________________LEFT CARD  END___________________*/}
              <ServComLeft />
              {/*____________________RIGHT CARD___________________*/}
              <ServComRight />
              {/*____________________RIGHT CARD  END___________________*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
