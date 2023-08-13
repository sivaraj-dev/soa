const TodoList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.content}</li>
      ))}
    </ul>
  );
};

export default TodoList;
