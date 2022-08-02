import React, { useContext } from "react";
import PostsContext from "../context/PostsContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function View() {
  const { selectedPost, setFetchReqFlag } = useContext(PostsContext);
  const navigate = useNavigate();

  const handleDeletePost = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:7777/posts/${selectedPost.id}`,
      {
        method: "DELETE",
      }
    );
    setFetchReqFlag((prev) => !prev);
    navigate(`/`);
  };

  const handleDeleteEdit = () => {
    navigate(`/edit`);
  };

  return (
    <div className="post-item">
      <div className="post-item-header">
        <img
          className="post-item-img"
          src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
          alt="avatar"
        />
        <div className="post-item-title">
          <h3>Dmitry Nazarov</h3>
          <p>Создано: {moment(selectedPost.created).format("HH:mm")}</p>
        </div>
      </div>
      <div className="post-item-contnent">
        <p>{selectedPost.content}</p>
      </div>
      <div className="post-item-footer">
        <div className="post-item-btn">
          <button className="post-btn-delete" onClick={handleDeletePost}>
            Удалить
          </button>
          <button className="post-btn-create" onClick={handleDeleteEdit}>Изменить</button>
        </div>
      </div>
    </div>
  );
}
