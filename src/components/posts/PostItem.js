import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../../context/PostsContext";
import moment from 'moment';


export default function PostItem(props) {
  const { id, content, created } = props;
  const { setSelectedPost } = useContext(PostsContext);

  return (
    <Link to={`/view/${id}`} onClick={() => setSelectedPost(props)}>
      <div className="post-item">
        <div className="post-item-header">
          <img
            className="post-item-img"
            src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
            alt="avatar"
          />
          <div className="post-item-title">
            <h3>Dmitry Nazarov</h3>
            <p>
              Создано: {moment(created).format('HH:mm')}
            </p>
          </div>
        </div>
        <div className="post-item-contnent">
          <p>{content}</p>
        </div>
        <div className="post-item-footer">
          <img
            className="post-item-img"
            src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
            alt="avatar"
          />
          <input type="text" placeholder="Ваш комментарий" />
        </div>
      </div>
    </Link>
  );
}
