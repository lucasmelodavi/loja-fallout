import { useState, useEffect } from "react";

export default function Store ({ user }) {
    const [items, setItems] = useState([
  ]);

  useEffect(() => {
  async function carregarItens() {
    const res = await fetch("http://localhost:4000/itens");
    const data = await res.json();

    if (data.ok) {
      setItems(data.itens);
    }
  }

  carregarItens();
}, []);

 return (
    <div className="store">
      <h1>FALLOUT STORE</h1>

      <h2>Bem-vindo, {user.Sobrevivente}</h2>

      <p>Tampas: {user.tampas}</p>

      <hr />

      <h2>Itens disponíveis</h2>

      {items.map((item, index) => (
        <div key={index} className="item">
          <p>{item.nome}</p>
          <p>{item.preco} tampas</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}
