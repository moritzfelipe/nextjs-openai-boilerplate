const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder="Enter your prompt here (e.g. 'Name for a pet dog')"
    />
  );
};

export default TextInput;