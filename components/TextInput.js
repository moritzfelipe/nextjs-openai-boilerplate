// file: /components/TextInput.js
const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder="Enter an animal"
    />
  );
};

export default TextInput;