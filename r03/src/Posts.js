const Posts = () => {
  const posts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6",
    "Post 7",
  ];

  return (
    <>
      <ol>
        {posts.map((post, index) => {
          return <li key={index}>{post}</li>;
        })}
      </ol>
    </>
  );
};

export default Posts;
