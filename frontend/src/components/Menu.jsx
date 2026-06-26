export default function Menu({ aba }) {
  return (
    <div className="menu">
      <span className={aba === "loja" ? "ativo" : ""}>
        LOJA
      </span>

      <span>|</span>

      <span className={aba === "pagamento" ? "ativo" : ""}>
        PAGAMENTO
      </span>
    </div>
  );
}