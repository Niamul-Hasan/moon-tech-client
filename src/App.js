import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
  }, [])
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
