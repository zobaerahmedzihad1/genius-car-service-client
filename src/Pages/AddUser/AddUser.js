import React from "react";
import { useForm } from "react-hook-form";

const AddUser = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Add new user</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          className="mb-2"
          {...register("description")}
        />
        <input
          placeholder="price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Photo url"
          className="mb-2"
          type="text"
          {...register("img")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
