export default function Avatar({ name, picture }) {
  return (
    <div>
      <img src={`${picture}?h=150`} alt={name} />
      <div>{name}</div>
    </div>
  );
}
