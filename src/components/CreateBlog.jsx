import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCreateBlogMutation } from "../feature/services/blogsApi";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [getCreateBlog] = useGetCreateBlogMutation();

  const navigate = useNavigate()

  const createBlogHandler = (e) => {
    e.preventDefault();
    console.log(title,description,image);
    const newData = {id:Date.now(),title,description,image}
    getCreateBlog(newData)
    navigate('/')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={createBlogHandler} className="w-[500px] h-[450px] p-10 border border-black rounded-lg flex flex-col">
        <h6 className="font-semibold text-2xl mb-10">Create Blog</h6>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7"
          placeholder=" Enter title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7 "
          placeholder=" Enter description"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7"
          placeholder=" Enter image adress"
        />
        <button
          type="submit"
          className="px-10 py-2 bg-indigo-200 duration-200 rounded font-semibold font-mono text-xl hover:bg-indigo-300"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
