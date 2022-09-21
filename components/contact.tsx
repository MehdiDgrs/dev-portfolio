import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

let Contact: React.FC = () => {
  let [submited, setHandleSubmited] = React.useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setHandleSubmited(false);
    const endpoint = "/api/form";

    let JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setHandleSubmited(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-start bg-white">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Contact me</h1>
        <h2 className="text-sm font-small text-gray-900 bold my-2">
          Or call me at 0618719325
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                {...register("Name", {
                  required: { value: true, message: "Field required" },
                  maxLength: { value: 20, message: "Too many characters" },
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "invalid characters",
                  },
                })}
                type="text"
                name="Name"
                className="peer block w-full appearance-none border-0 border-b border-[#1C3864] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#1C3864] focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ${
                  errors.Name
                    ? "peer-focus:text-red"
                    : "peer-focus:text-[#1C3864]"
                } peer-focus:dark:text-[#1C3864] ${
                  errors.Name && "text-red-600"
                }`}
              >
                {errors.Name ? `${errors.Name.message}` : "Your Name"}
              </label>
            </div>
            <div className="relative z-0">
              <input
                {...register("email", {
                  required: { value: true, message: "Field required" },

                  pattern: {
                    value:
                      /^[_ a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9_ ]+)*$/,
                    message: "Invalid Email adress",
                  },
                })}
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-[#1C3864] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#1C3864] focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  ${
                  errors.email
                    ? "peer-focus:text-red-600 peer-focus:dark:text-red-600"
                    : "peer-focus:text-[#1C3864] peer-focus:dark:text-[#1C3864]"
                }`}
              >
                {errors.email ? `${errors.email.message}` : "Your Email"}
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                {...register("message", {
                  required: { value: true, message: "Field required" },
                })}
                id="message"
                name="message"
                rows={5}
                className={`peer block w-full appearance-none border-0 border-b border-[#1C3864] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#1C3864] focus:outline-none focus:ring-0`}
              ></textarea>
              <label
                className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  ${
                  errors.message
                    ? "peer-focus:text-red-600 peer-focus:dark:text-red-600"
                    : "peer-focus:text-[#1C3864] peer-focus:dark:text-[#1C3864]"
                }`}
              >
                {errors.message ? `${errors.message.message}` : "Your message"}
              </label>
            </div>
          </div>
          {submited ? (
            <div className="mt-5 justify-center bold py-2 text-[#1C3864] ">
              Thanks for your message !
            </div>
          ) : (
            <button
              type="submit"
              className="sm:text-sm mt-5 rounded-md bg-[#1C3864] justify-center px-10 py-2 text-white"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
