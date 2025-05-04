import Post from "./Post";
import classes from "./PostsList.module.css";
export default function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post fighter="Dustin" quote="Don't be silly, jump the gilly" />
      <Post fighter="Islam" quote="Kangaroo have no wrestling brether" />
    </ul>
  );
}
