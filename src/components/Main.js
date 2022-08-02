import React, { useState, useEffect, useContext } from "react";
import WrapperItem from "./WrapperItem";
import PostsContext from "../context/PostsContext";
import { useNavigate } from "react-router-dom";
import PostList from "./posts/PostList";

export default function Main() {
  const { posts, inputValue } = useContext(PostsContext);
  const navigate = useNavigate();

  return (
    <WrapperItem className="page">
      <div className="edit-post">
        <button
          onClick={(e) => {
            navigate(`/posts/new`);
          }}
        >
          Создать пост
        </button>
      </div>
      <PostList posts={posts} />
    </WrapperItem>
  );
}
