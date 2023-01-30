import React from "react";
import { FaPlus } from "react-icons/fa";
import "./addItem.css";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" method="POST" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange= { (e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
