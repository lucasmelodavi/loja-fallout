import { useState, useRef, useEffect } from "react";
import Loja from "./Loja";

export default function Login() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Referência para o input
  const inputRef = useRef(null);

  // Coloca o cursor no input quando a tela abrir
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function handleLogin() {
    if (!id) {
      alert("DIGITE SEU CODIGO");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.ok) {
        setUser(data.user);
      } else {
        alert("Sobrevivente não Encontrado");
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      alert("ERRO AO CONECTAR COM O BACKEND");
    }

    setLoading(false);
  }

  return (
    <>
      {!user ? (
        <div className="login-box">
          <h1>[ FALLOUT STORE ]</h1>

          <input
            ref={inputRef}
            type="text"
            placeholder="DIGITE SEU CODIGO"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "CONECTANDO..." : "ENTRAR"}
          </button>
        </div>
      ) : (
        <Loja user={user} />
      )}
    </>
  );
}