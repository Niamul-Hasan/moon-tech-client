import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes"
import ProductProvider from "./ContextApi/ProductProvider";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;