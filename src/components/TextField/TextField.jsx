import "./TextField.css";

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextField;
