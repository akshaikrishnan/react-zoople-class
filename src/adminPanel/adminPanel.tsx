import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  productName: string;
  description: string;
  price: number;
  image: FileList;
}

export default function AdminPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Here you can perform further actions like submitting the form data to the server
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header text-center bg-primary text-white">
          <h3>Add Product</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                {...register("productName", {
                  required: "Product name is required",
                })}
              />
              <p>{errors.productName?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <p>{errors.description?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price must be a positive number" },
                })}
              />
              <p>{errors.price?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                {...register("image", {
                  required: "Image is required",
                })}
              />
              <p>{errors.image?.message}</p>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
