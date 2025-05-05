import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

 

  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post fighter={enteredAuthor} quote={enteredBody} />
        <Post fighter="Islam" quote="Kangaroo have no wrestling brether" />
      </ul>
    </>
  );
}
