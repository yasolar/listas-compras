import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <div className="title">📋 Minha Lista de Compras</div>
      
      <div className="shop-list">
        <div className="subtitle">Organize suas compras de forma rápida e prática: </div>
        <form onSubmit={onSubmit}>
          <input
            className="input-item"
            type="text"
            name="item"
            placeholder="Adicione um item"
            maxlength="25"
            required
          />
          <button className="button-add">Adicionar</button>
        </form>
        <div className="items">
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <div className="item">
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        ❌
      </button>
    </div>
  );
}
