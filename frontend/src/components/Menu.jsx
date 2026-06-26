export default function Menu({ setAba }) {
  return (
    <div className="menu">
      <button onClick={() => setAba("loja")}>
        LOJA
      </button>

      <button onClick={() => setAba("pagamento")}>
        PAGAMENTO
      </button>
    </div>
  );
}