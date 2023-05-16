// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  console.log("data in ResponseDisplay", data);
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    content = (
      <>
        <p>Name: {data.result.name}</p>
        <p>Description: {data.result.description}</p>
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
