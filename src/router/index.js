import {
  createHashRouter
} from "react-router-dom";
import HomeLayout from './../layout/HomeLayout'
import PageIndex from './../page/PageIndex'

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "index",
        element: <PageIndex />,
      },
    ],
  },
]);

export default router;
