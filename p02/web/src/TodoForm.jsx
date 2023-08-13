import { useState } from "react";

export const TodoForm = (props) => {
  const defaultValue = "Todo ";
  const [content, setContent] = useState(defaultValue);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSave({_id: 'new', content});
    setContent(defaultValue);
  };

  return (
    <form onSubmit={onSubmit} method="post">
      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
