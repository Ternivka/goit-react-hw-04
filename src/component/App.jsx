import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { fetchImages } from "../services/api";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImagesData = async () => {
      try {
        const { results } = await fetchImages("react");
        setImages(results);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesData();
  }, []);
  return (
    <div>
      <h2>Images</h2>
      <ul>
        {images.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.urls.small} alt={item.alt_description} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
