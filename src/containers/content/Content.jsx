import React from "react";
import "./content.css";
import ItemList from "./logic/ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h3>Your list is empty.</h3>
      )}
    </>
  );
};

export default Content;
