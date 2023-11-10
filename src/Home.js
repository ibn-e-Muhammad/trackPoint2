import logo from "./muetlogo.png";
import gradient from "./gradient.png";
const Home = () => {
  return (
    <div className="header font-montserrat text-gray-900">
      <div className="home w-full h-screen bg-[url(bus1.jpg)] bg-no-repeat bg-cover relative top-16">
        <img className="w-full h-full" src={gradient} alt="" />
        <div className="w-full h-full">
          <div className="box h-full flex flex-col mx-3 absolute top-0 space-y-80">
            <div className="logo">
              <img
                className=" w-20 h-20 ml-5 mt-20"
                src={logo}
                alt="fuck the logo didn't load"
              />
              <p className="text-sm  font-bold">Mehran University</p>
            </div>
            <div className="textcontentbox flex flex-col ">
              <div className="heading ">
                <h1 className="text-5xl  font-bold">TrackPoint</h1>
                <h2 className="text-lg  font-bold ml-10">
                  Making your journey <br />
                  easier
                </h2>
              </div>
              <div className="button ml-8 mt-12">
                <button className="px-4 py-2 bg-gradient-to-tr from-gray-950 via-gray-700 to-gray-800 text-[#88BA09] hover:text-[#5eba09fb] focus:bg-gray-900 focus:text-[#88BA09] font-semibold text-xl rounded-lg">
                  Start Tracking
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  />
        <img className="w-full h-full" src={gradient} alt="fuck the img didn't load" /> */}
      </div>
    </div>
  );
};

export default Home;
