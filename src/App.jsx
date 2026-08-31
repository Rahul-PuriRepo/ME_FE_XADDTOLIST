import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmedItem = item.trim();

    if (!trimmedItem) {
      return;
    }

    setItems((prevItems) => [...prevItems, trimmedItem]);
    setItem("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const removeItem = (indexToRemove) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="app">
      <div className="list-card">
        <h1>Add Items to List</h1>

        <div className="input-row">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={addItem}>Add</button>
        </div>

        {items.length === 0 ? (
          <p className="empty-message">No items yet. Add your first one!</p>
        ) : (
          <ul>
            {items.map((currentItem, index) => (
              <li key={`${currentItem}-${index}`}>
                <span>{currentItem}</span>
                <button
                  className="remove-button"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
