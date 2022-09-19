import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

let Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white text-black flex flex-col justify-center text-center min-h-screen">
      <div className="pb-10">
        <h2 className=" text-3xl lg:text-4xl"> Me contacter.</h2>
      </div>
      <form
        className=" bold grid w-2/4 gap-y-6 mx-auto text-2xl lg:text-3xl border border-solid border-cyan-200 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="grid grid-cols-2 ">
          <label className="place-items-end " htmlFor="lastName">
            Last Name :
          </label>
          <input
            type="text"
            className="border-pink-400"
            id="lastName"
            {...register("lastName")}
          />
        </div>
        <div className="grid grid-cols-2">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName")} />
        </div>
        <div className="grid grid-cols-2">
          <label htmlFor="Mail">Email</label>
          <input type="text" id="Mail" {...register("Mail")} />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea type="text" id="Message" {...register("Message")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Contact;
