import { imageBuilder } from "../lib/sanity";

export default function Avatar({ name, picture }) {
  return (
    <div style={{ width: "15rem" }}>
      <img
        style={{ borderRadius: "75% 100% 75% 100%", margin: "1rem" }}
        src={imageBuilder(picture).width(150).height(150).url()}
        alt={name}
      />
      <div style={{ fontSize: "2rem", textAlign: "center" }}>{name}</div>
    </div>
  );
}
