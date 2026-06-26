import { useState, useEffect } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Usuario from "../components/Usuario";
import Item from "../components/Item";

export default function Loja({ user }) {
  const [items, setItems] = useState([]);
  const [aba, setAba] = useState("loja");

  useEffect(() => {
    async function carregarItens() {
      try {
        const res = await fetch("http://localhost:4000/itens");
        const data = await res.json();

        if (data.ok) {
          setItems(data.itens);
        }
      } catch (error) {
        console.error(error);
      }
    }

    carregarItens();
  }, []);

  return (
    <div className="store">
      <Header />

      <Menu aba={aba} setAba={setAba} />

      <Usuario user={user} />

      <hr />

      {aba === "loja" && (
        <div className="lista-itens">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}

      {aba === "pagamento" && (
        <div className="pagamento">
          <h2>Pagamento</h2>

          <p>Saldo disponível: {user.tampas} tampas.</p>

          <p>Em breve você poderá visualizar suas compras aqui.</p>
        </div>
      )}
    </div>
  );
}

