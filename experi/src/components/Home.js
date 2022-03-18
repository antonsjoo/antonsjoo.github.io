import {
  Circle,
  Square,
  PolygonCard,
  CircleGrid,
  Diamond,
  Hexagon,
  Triangle,
} from "react-awesome-shapes";

const Home = ({ colors, grade }) => {
  const navBar = [
    { type: "About" },
    { type: "Contact" },
    { type: "Projects" },
    { type: "Photography" },
  ];
  navBar.map((e) => console.log(e.type));
  return (
    <div className="bg-gray-300">
      <div className="flex space-x-4 h-20 items-center px-4 sm:px-6  lg:px-8 text-gray-800 text-2xl font-light">
        {navBar.map((categories) => (
          <h1 className=" cursor-pointer no-underline hover:underline transition">
            {categories.type}
          </h1>
        ))}
      </div>
      <div className={`h-screen flex items-center`}>
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="flex justify-start max-w-3xl">
              <h1 className="text-7xl text-left text-gray-800">
                Anton Sjöö is an interaction designer from Småland.
              </h1>
            </div>
            <div className="flex justify-start py-12">
              {" "}
              <div className="flex space-x-4 h-20 items-center  text-gray-800 text-2xl font-light ">
                <Circle position="" color="#ff2e3f" size="60px" zIndex={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
