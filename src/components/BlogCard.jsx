import React from "react";
import { Link } from "react-router-dom";
import { useGetDeleteBlogMutation } from "../feature/services/blogsApi";

const BlogCard = ({ blog }) => {
  const [getDeleteBlog] = useGetDeleteBlogMutation();

  return (
    <div className="w-[300px] h-[400px] border border-cyan-900 p-2 flex flex-col items-center space-y-3 rounded-md ">
      <img
        src={blog.image}
        className="w-[200px] h-[200px] object-cover object-center"
        alt=""
      />
      <h6 className="text-2xl font-bold">
        {blog.title.length > 35
          ? `${blog.title.substring(0, 35)} . . . .`
          : blog.title}
      </h6>
      <p className="">{blog.description}</p>
      <div className="flex space-x-4">
        <Link to={`/detail/${blog?.id}`}>
          <button className="w-[120px] py-1 bg-cyan-400 duration-200  hover:bg-cyan-500 rounded font-mono font-bold ">
            Detail
          </button>
        </Link>

        <button
          onClick={() => getDeleteBlog(blog?.id)}
          className="w-[120px] py-1 bg-red-400 duration-200  hover:bg-red-500 rounded font-mono font-bold "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
