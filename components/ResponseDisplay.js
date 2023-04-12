const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log(data);
    content = "";
  } else {
    content = "";
  }

  return (
    <div className="response-display">
      <p>{content}</p>
    </div>
  );
};

export default ResponseDisplay;
