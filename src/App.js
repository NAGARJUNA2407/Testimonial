import React from "react";
import reviews from "./data"

import Testimonial from "./components/Testimonial";
const App = () => {
  return (
  <div className="flex flex-col justify-center items-center bg-gray-200 w-[100vw] h-[100vh]">
    <div className="text-center ">
      <h1 className="text-4xl font-bold">Our Testimonials </h1>
      <div className="bg-violet-400 h-[4px] w-3/5 mt-1 mx-auto"></div>
    </div>
    <Testimonial reviews={reviews} />

  </div>
  );
};

export default App;
