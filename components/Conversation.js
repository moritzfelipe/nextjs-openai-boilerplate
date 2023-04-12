const Conversation = ({ messages }) => {
  return (
    <div>
      {messages.map(({ role, content }) => (
        <p>
          {role !== "system" && <span>{role}: </span>}
          <span>{content}</span>
        </p>
      ))}
    </div>
  );
};

export default Conversation;
