import { RouterProvider } from "react-router-dom";
import router from './router/index';
import 'antd/dist/reset.css';

console.log(router)

function App() {
  return (
    <div className="App flex h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
