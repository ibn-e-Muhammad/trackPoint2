import Bus2 from "./bus2.png";
import Bus3 from "./bus3.png";
const Testimonial = () => {
  return (
    <section className="text-white font-montserrat">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex flex-col border-2 rounded-lg bg-gradient-to-tr from-black via-gray-800 to-black border-gray-200 border-opacity-50 p-8 sm:space-y-16 ">
              <div className="w-3/4 h-16 mx-auto sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
                <img src={Bus2} alt="Bus img" />
              </div>
              <div className="flex-grow mt-2">
                <h2 className=" text-2xl text-center font-semibold mb-3">
                  Track your Point
                </h2>
                <p className="leading-relaxed text-center">
                  No more guessing when the bus will arrive or enduring office
                  visits for complaints. <br />
                  <em className="text-xl font-semibold ">TrackPoint </em> keeps
                  it straightforward, just like your student life should be.{" "}
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Predictabe</em>
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Predictabe</em>
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Predictabe</em>
                  <br />
                </p>
                <a
                  className="mt-3 font-semibold text-indigo-500 inline-flex items-center"
                  href="#">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg bg-gradient-to-tr from-black via-gray-800 to-black border-gray-200 border-opacity-50 p-8 sm:space-y-16 flex-col">
              <div className="w-3/4 h-16 mx-auto sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
                <img src={Bus3} alt="Bus img" />
              </div>
              <div className="flex-grow mt-5">
                <h2 className=" text-2xl text-center font-semibold mb-3">
                  Have any Complain?
                </h2>
                <p className="leading-relaxed text-center">
                  At <em className="text-xl font-semibold ">TrackPoint</em>,
                  your voice matter. We're here to listen and make things right.
                  Our approach to handling complaints is :
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Simple</em>
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Simple</em>
                  <br />
                  <br />
                  <em className="text-xl font-semibold ">✨Simple</em>
                  <br />
                </p>
                <a
                  className="mt-3 font-semibold text-indigo-500 inline-flex items-center"
                  href="#">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="button py-2 px-4 rounded-lg bg-[#60da09] text-center text-gray-900 text-2xl font-semibold mx-auto my-5 w-3/4 cursor-pointer hover:bg-[#90da09] hover:font-bold">
              <button>Start Tracking</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
