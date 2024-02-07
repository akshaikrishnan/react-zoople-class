import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  message: string;
  age: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-header text-center bg-primary text-white">
            <h3>Contact Us</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "invalid name",
                    },
                  })}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your full name"
                />
                <div className="text-danger">
                  {errors.name && errors.name.message}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  {...register("email", { required: "email is required" })}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="text-danger">Email is required</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "message needed!",
                    minLength: { value: 5, message: "short message" },
                  })}
                  className={`form-control ${
                    errors.message ? "border-danger" : ""
                  }`}
                  id="message"
                  rows={3 as number}
                  placeholder="Tell us what's on your mind"
                ></textarea>
                {errors.message && (
                  <div className="text-danger">{errors.message.message}</div>
                )}
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
