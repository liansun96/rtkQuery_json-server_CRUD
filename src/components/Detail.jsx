import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../feature/services/blogsApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  console.log(blog);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] h-[300px] border border-cyan-900 p-2 flex flex-col justify-evenly items-center space-y-3 rounded-md ">
        <div className="flex justify-evenly items-center ">
          <div className="w-[40%]">
            <img
              src={blog?.image}
              className="w-[200px] h-[200px] object-cover object-center"
              alt=""
            />
          </div>
          <div className="w-[50%]">
            <h6 className="text-2xl font-bold">{blog?.title}</h6>
            <p className="">{blog?.description}</p>
          </div>
        </div>
        <div className="flex space-x-12">
          <Link to={`/`}>
            <button className="w-[250px] py-1 duration-200 bg-red-300 hover:bg-red-400 rounded font-mono font-bold ">
              Cancel
            </button>
          </Link>
          <Link to={`/edit/${blog?.id}`}>
            <button className="w-[250px] py-1 duration-200 bg-cyan-400 hover:bg-cyan-500 rounded font-mono font-bold ">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
