const categories = ["All", "React", "Node", "JavaScript"];

const Filters = ({ setCategory }) => {
  return (
    <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filters;
