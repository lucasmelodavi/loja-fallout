import { useState } from "react";
import Loja from "./Loja";

export default function Login() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function handleLogin() {
    if (!id) {
      alert("DIGITE SEU ID");
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
        alert("ID NÃO ENCONTRADO");
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
            type="text"
            placeholder="DIGITE SEU ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
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