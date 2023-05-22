import React from "react";
import { useGetBlogsQuery } from "../feature/services/blogsApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  // console.log(blogs);

  return (
    <>
      <div className="w-full p-10 ms-[100px] ">
        <Link to={"/createBlog"}>
          <button className="px-10 py-2 bg-indigo-200 duration-200 rounded font-semibold font-mono text-xl hover:bg-indigo-300">
            Create Blog
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {blogs?.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
