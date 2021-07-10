import React, { lazy, Suspense, useEffect } from "react";

import Header from "../../components/MainScreenComponents/Header/Header";
import AddPost from "../../components/MainScreenComponents/AddPost/AddPost";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = lazy(() =>
  import("../../components/MainScreenComponents/Post/Post")
);

const Main = () => {
  const history = useHistory();

  const addPostStatus = useSelector((state) => state.posts.addPostStatus);
  const postsList = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);

  return (
    <div>
      <Header />
      {addPostStatus && <AddPost />}
      <Suspense fallback={<p>Loading...</p>}>
        {postsList.map((el) => {
          return <Post key={el._id} postInfo={el} />;
        })}
      </Suspense>
    </div>
  );
};

export default Main;
