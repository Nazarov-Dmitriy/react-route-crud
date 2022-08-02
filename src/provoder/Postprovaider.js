import { useState } from "react";
import useFetch from "../hook/useFetch";
import PostsContext from "../context/PostsContext";

export default function Postprovaider(props) {
  const url = "http://localhost:7777/posts";

  const [posts, setPost, loading, error, fetchReqFlag, setFetchReqFlag] =
    useFetch(url);
  const [inputValue, setInputValue] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPost,
        loading,
        error,
        fetchReqFlag,
        setFetchReqFlag,
        inputValue,
        setInputValue,
        selectedPost,
        setSelectedPost,
      }}
    >
      <div className="post-container">{props.children} </div>
    </PostsContext.Provider>
  );
}
