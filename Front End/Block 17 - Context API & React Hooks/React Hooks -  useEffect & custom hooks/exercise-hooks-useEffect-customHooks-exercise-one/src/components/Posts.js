import React, { useContext } from "react";
import { Context } from "../App";

export default function Posts() {
  const { posts } = useContext(Context);
  return (
    <div className="Posts">
      {posts.map(({ title, link }) => (
        <div key={link}>
          <a href={link}>{title}</a>
        </div>
      ))}
    </div>
  );
}
