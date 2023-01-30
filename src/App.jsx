import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

import { Header, Content, Footer, AddItem, SearchItem } from "./containers";

const App = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Unexpected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

      fetchItems()
  }, []);

  const addItem = async (item) => {
    const id =  items.length ? (items[ items.length - 1].id +1 ): 1;
    const userNewItem =  { id, checked: false, name: item };
    const listItems = [...items, userNewItem];


    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {
       ...item, checked: !item.checked } :  item )

    setItems(listItems)


      const userItem = listItems.filter( item => item.id === id)
      const updateOptions = {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {checked: userItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOptions)
      if (result) setFetchError(result)

    };


  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

     const deleteOptions = { method: 'DELETE'}
     const reqUrl = `${API_URL}/${id}`
     const result = await apiRequest(reqUrl, deleteOptions)
     if (result) setFetchError(result)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading ...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
