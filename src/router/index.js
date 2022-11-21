import {
  createHashRouter
} from "react-router-dom";
import HomeLayout from './../layout/HomeLayout'

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "team",
        // element: <Team />,
      },
    ],
  },
]);

export default router;
