export default function Tooltip({ text, x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        background: "#009688",
        color: "white",
        padding: "4px 10px",
        borderRadius: "8px",
        fontSize: "20px",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        zIndex: 100,
        opacity: 0.9,
        fontWeight: 400,
      }}
    >
      {text}
    </div>
  );
}
