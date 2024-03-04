import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  interface FormValues {
    name: string;
    email: string;
    message: string;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header text-center bg-primary text-white">
            <h3>Contact Us</h3>
          </div>
          <div className="card-body">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <br />
                <input
                  className="form-control"
                  {...register("name", {
                    required: { value: true, message: "Required field" },
                  })}
                  placeholder="Full name"
                />
                <p>{errors.name?.message}</p>
                {/* <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                /> */}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <br />
                <input
                  className="form-control"
                  {...register("email", {
                    required: { value: true, message: "Required field" },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="email"
                />
                <p>{errors.email?.message}</p>
                {/* <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                /> */}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <br />
                <textarea
                  className="form-control"
                  {...register("message", {
                    required: { value: true, message: "Required field" },
                    minLength: {
                      value: 4,
                      message: "Minimum length of message is 4",
                    },
                  })}
                  placeholder="Tell us what's on your mind"
                  rows={3 as number}
                ></textarea>
                <p>{errors.message?.message}</p>

                {/* <textarea
                  className="form-control"
                  id="message"
                  rows={3 as number}
                  placeholder="Tell us what's on your mind"
                ></textarea> */}
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
