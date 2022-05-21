import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <section className=" bg-emerald-700 mx-10 rounded shadow-lg shadow-emerald-800 py-20">
      <h2 className="text-white text-3xl font-bold text-center pb-10">
        Welcome To Recipe
        <span className="text-orange-400 ">Book</span>
      </h2>
      <p className="text-white text-center text-lg pb-7">
        A place to
        <span className="font-semibold text-orange-400"> share </span>
        and <span className="font-semibold text-orange-400">explore</span>{" "}
        recipes
      </p>
      <p className="text-white text-center text-lg">
        Register <span className="font-semibold text-orange-400">now</span> for{" "}
        <span className="font-semibold text-orange-400">Free!</span>
      </p>
      <RegistrationForm />
      
    </section>
  );
};

export default Registration;
