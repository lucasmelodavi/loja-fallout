export default function Item({ item, selecionado }) {
  return (
    <div className="item">
      <span className="cursor">
        {selecionado ? "►" : " "}
      </span>

      <span>{item.nome}</span>

      <span>{item.preco} Tampas</span>
    </div>
  );
}