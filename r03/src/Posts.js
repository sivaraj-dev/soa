const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is my first post",
      noLikes: 10,
      noComments: 2,
    },
  ];

  return (
    <>
      <ol>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <p>
                <strong>{post.title}</strong>
              </p>
              <p>{post.content}</p>
              <p>
                <strong>{post.noLikes}</strong> likes •{" "}
                <strong>{post.noComments}</strong> Comments
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Posts;
