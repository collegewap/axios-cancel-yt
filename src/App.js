import axios from "axios";

function App() {
  let cancelToken;
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    if (cancelToken) {
      cancelToken.cancel("Operations cancelled due to new request");
    }
    cancelToken = axios.CancelToken.source();
    let results;
    try {
      results = await axios.get("http://localhost:4000/animals?q=" + value, {
        cancelToken: cancelToken.token,
      });
    } catch (error) {
      console.log(error);
    }
    console.log({ results });
  };
  return (
    <div style={{ marginTop: "3rem", textAlign: "center" }}>
      <input
        style={{ width: "60%", height: "1.5rem" }}
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
