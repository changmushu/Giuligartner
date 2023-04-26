import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./app.scss"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
