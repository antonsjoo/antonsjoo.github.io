import {
  Circle,
  Square,
  PolygonCard,
  CircleGrid,
  Diamond,
  Hexagon,
  Triangle,
} from "react-awesome-shapes";

const ContentBlock = ({ colors, grade }) => {
  console.log("in colors", { colors });
  return (
    <div className="flex items-center bg-blacku">
      <div className={`h-screen justify-start flex items-center`}>
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/*  */}
            <div className="flex max-w-3xl pb-10">
              <h1 className="text-5xl text-left font-medium text-gray-400">
                Photography is one of my passions, i like to capture scenes from
                the night.
              </h1>
            </div>
            <div className="flex max-w-3xl">
              {" "}
              <p className="text-xl text-left font-light text-gray-300">
                Synthesizers typically create sounds by generating waveforms,
                through methods including subtractive synthesis, additive
                synthesis and frequency modulation synthesis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-12 ">
        {" "}
        <div className="">
          <img src="photo.jpg" alt="" className=" w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
