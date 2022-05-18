import React, { useState } from "react";

export const AddPlayer = ({ addPlayer }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleValueChange}
        placeholder="プレイヤーの名前を入力"
      />
      <input type="submit" value="Add" />
    </form>
  );
};
