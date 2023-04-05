import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

const App = function () {
  return <RouterProvider router={router}/>;
};

export default App;
