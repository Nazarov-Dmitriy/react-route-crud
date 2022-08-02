import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostsContext from "../context/PostsContext";

export default function New() {
  const { inputValue, setInputValue, setFetchReqFlag } =
    useContext(PostsContext);

  const navigate = useNavigate();

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };

  const handlePublishedPost = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        content: inputValue,
      }),
    });
    setFetchReqFlag((prev) => !prev);
    navigate(`/`);
  };

  return (
    <div className="new-post">
      <div className="new-header">
        <div className="new-header-items">
          <div className="new-header-item" onClick={handlePublishedPost}>
            <img
              src="https://img.icons8.com/windows/344/pencil-tip.png"
              alt="edit"
            />
            <p> Публикация </p>
          </div>
          {" | "}
          <div className="new-header-item">
            <img
              src="https://img.icons8.com/sf-regular/344/add-camera.png"
              alt="load images"
            />
            <p> Фото / Видео </p>
          </div>
          {" | "}
          <div className="new-header-item">
            <img
              src="https://img.icons8.com/metro/344/day-camera.png"
              alt="live"
            />
            <p> Прямой эфир </p>
          </div>
          {" | "}
          <div className="new-header-item">
            <img
              src="https://img.icons8.com/ios-filled/344/ellipsis.png"
              alt="more"
            />
            <p> Еще </p>
          </div>
        </div>
        <button
          className="new-btn-close"
          onClick={(e) => {
            navigate(`/`);
          }}
        >
          x
        </button>
      </div>
      <div className="post-content">
        <img
          className="post-content-img"
          src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
          alt="avatar"
        />
        <textarea
          className="post-content-textarea"
          name=""
          id=""
          cols="30"
          rows="5"
          onChange={handleValue}
        ></textarea>
      </div>
      <div className="post-footer">
        <button className="btn-publush" onClick={handlePublishedPost}>
          Опубликовать
        </button>
      </div>
    </div>
  );
}
