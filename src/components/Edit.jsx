import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEditBlogMutation, useGetSingleBlogQuery } from "../feature/services/blogsApi";

const Edit = () => {

    const {id} = useParams();
    const {data :blog} = useGetSingleBlogQuery(id);
    console.log(blog)


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [getEditBlog] = useGetEditBlogMutation();
  const navigate = useNavigate();

  useEffect(()=>{
    setTitle(blog?.title)
    setDescription(blog?.description)
    setImage(blog?.image)
  },[blog])

  const createBlogHandler = (e) => {
    e.preventDefault();
    console.log(title, description, image);
    const newData = { id, title, description, image };
    getEditBlog(newData)
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={createBlogHandler}
        className="w-[500px] h-[450px] p-10 border border-black rounded-lg flex flex-col"
      >
        <h6 className="font-semibold text-2xl mb-10">Edit Blog</h6>
        <input
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7 overflow-x-scroll"
          placeholder=" Enter title"
        />
        <input
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7 overflow-x-scroll "
          placeholder=" Enter description"
        />
        <input
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="py-3 px-3 outline-none border border-sky-700 w-full rounded mb-7 overflow-x-scroll"
          placeholder=" Enter image adress"
        />
        <button
          type="submit"
          className="px-10 py-2 bg-indigo-200 duration-200 rounded font-semibold font-mono text-xl hover:bg-indigo-300"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
