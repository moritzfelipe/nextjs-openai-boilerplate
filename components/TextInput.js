const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder="Enter your prompt here (e.g. 'I want a pet name for my dog')"
    />
  );
};

export default TextInput;