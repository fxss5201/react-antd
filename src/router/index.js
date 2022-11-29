import {
  createHashRouter
} from "react-router-dom";
import ErrorPage from './../error-page';
import HomeLayout from './../layout/HomeLayout';
import PageIndex from './../page/PageIndex';

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PageIndex />,
      },
    ],
  },
]);

export default router;
