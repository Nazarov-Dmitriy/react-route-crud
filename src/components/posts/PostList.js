import { useContext } from "react";
import PostsContext from "../../context/PostsContext";
import Loader from "../../Loader/Loader";
import PostItem from "./PostItem";

export default function PostList(props) {
  const { loading, error } = useContext(PostsContext);
  const { posts } = props;
  
  return (
    <>
      {
        (posts.length === 0 ? (
          <div className="post-list-none">У вас еще нет постов</div>
        ) : (
          <div className="post-list">
            {loading ? (
              <Loader />
            ) : error ? (
              <div>{error}</div>
            ) : (
              posts.map((post) => <PostItem key={post.id} {...post} />)
            )}
          </div>
        ))
      }
    </>
  );
}
