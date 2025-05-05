import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link } from "react-router-dom";

export default function NewPost({ onAddPost }) {
  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export function action() {
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
