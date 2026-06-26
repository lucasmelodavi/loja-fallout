export default function Usuario({ user }) {
  return (
    <div className="usuario">
      <h2>Sobrevivente: {user.Sobrevivente}</h2>

      <p>Tampas: {user.tampas}</p>
    </div>
  );
}