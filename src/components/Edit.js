import React, { useContext } from "react";
import PostsContext from "../context/PostsContext";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const { selectedPost, setInputValue, inputValue, setFetchReqFlag } =
    useContext(PostsContext);
  const navigate = useNavigate();

  const onChangeEdit = (e) => {
    setInputValue(e.target.value);
  };

  const onEditPost = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: selectedPost.id,
        content: inputValue,
      }),
    });
    setFetchReqFlag((prev) => !prev);
    navigate(`/`);
  };

  return (
    <div className="edit-page">
      <div className="edit-page-header">
        <p className="edit-header-description">Редактировать публикацию</p>
        <button className="edit-btn-close"   onClick={(e) => {
            navigate(`/view/${selectedPost.id}`);
          }}>x</button>
      </div>
      <div className="edit-page-content">
        <img
          className="edit-content-img"
          src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
          alt="avatar"
        />
        <textarea
          className="edit-content-textarea"
          name=""
          id=""
          cols="30"
          rows="5"
          defaultValue={selectedPost.content}
          onChange={onChangeEdit}
        ></textarea>
      </div>
      <div className="edit-item-footer">
        <div className="edit-item-btn">
          <button className="edit-btn-edit" onClick={onEditPost}>Изменить</button>
        </div>
      </div>
    </div>
  );
}
