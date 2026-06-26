export default function Item({ item }) {
  return (
    <div className="item">
      <span>{item.nome}</span>

      <span>{item.preco} Tampas</span>

      <button>Comprar</button>
    </div>
  );
}