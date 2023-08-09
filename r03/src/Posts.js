import { useEffect, useState } from "react";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setLoading(false);
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {loading && <p>Loading...</p>}
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
              }}
            >
              <strong>{post.title}</strong>
              <br />
              {post.body}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
