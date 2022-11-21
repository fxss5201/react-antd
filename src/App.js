import { RouterProvider } from "react-router-dom";
import router from './router/index';

function App() {
  return (
    <div className="App flex h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
