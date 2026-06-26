import { useState, useEffect } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Usuario from "../components/Usuario";
import Item from "../components/Item";

export default function Loja({ user }) {
  const [items, setItems] = useState([]);
  const [aba, setAba] = useState("loja");
  const [selecionado, setSelecionado] = useState(0);

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

  useEffect(() => {
    function teclado(e) {
      
      if (e.key === "ArrowDown") {
        setSelecionado((atual) =>
          Math.min(atual + 1, items.length - 1)
        );
      }

      if (e.key === "ArrowUp") {
        setSelecionado((atual) =>
          Math.max(atual - 1, 0)
        );
      }

      
      if (e.key === "ArrowLeft") {
        setAba("loja");
      }

      if (e.key === "ArrowRight") {
        setAba("pagamento");
      }
    }

    window.addEventListener("keydown", teclado);

    return () => {
      window.removeEventListener("keydown", teclado);
    };
  }, [items]);

  return (
    <div className="store">
      <Menu aba={aba} setAba={setAba} />

      <Header />

      <Usuario user={user} />

      <hr />

      {aba === "loja" && (
        <div className="lista-itens">
          {items.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              selecionado={index === selecionado}
            />
          ))}
        </div>
      )}

      {aba === "pagamento" && (
        <div className="pagamento">
          <h2>PAGAMENTO</h2>
        </div>
      )}
    </div>
  );
}