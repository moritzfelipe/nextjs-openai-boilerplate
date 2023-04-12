const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder="Enter your text here"
    />
  );
};

export default TextInput;
