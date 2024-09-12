import axios from "axios";
import "./App.css";

function App() {
  const getManga = async (title: string) => {
    const baseUrl = "https://api.mangadex.org";

    const resp = await axios({
      method: "GET",
      url: `${baseUrl}/manga`,
      params: { title },
    });

    console.log(resp.data.data);
  };

  return (
    <>
      <button onClick={() => getManga("Naruto")}>get manga</button>
    </>
  );
}

export default App;
