import React, { createContext, useEffect } from "react";

import Posts from "./components/Posts";
import Selector from "./components/Selector";

export const Context = createContext();
const { Provider } = Context;

const fetchPosts = (sub) =>
  fetch(`https://www.reddit.com/r/${sub}.json`).then((response) =>
    response.json()
  );

export default function App() {
  const [posts, setPosts] = React.useState([]);
  const [sub, setSub] = React.useState("reactjs");
  const [loading, setLoading] = React.useState(false);
  const context = { posts, setSub };
  const isEmpty = posts.length === 0;
  useEffect(() => {
    setLoading(true);
    fetchPosts(sub).then((posts) => {
      setPosts(posts.data.children.map(({data:{title, permalink}}) => ({title, link: `https://www.reddit.com${permalink}`})));
      setLoading(false);
    });
  }, [sub]);
  return (
    <div className="App">
      <Provider value={context}>
        <Selector />
        {loading && <h2>Loading...</h2>}
        {!loading && isEmpty && <h2>Empty.</h2>}
        {!loading && !isEmpty && <Posts />}
      </Provider>
    </div>
  );
}
