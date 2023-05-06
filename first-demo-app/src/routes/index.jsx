import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import { PageNames } from "../constants/page-name";
import ApiDemo from "../pages/api-demo";
import ApiDetail from "../pages/api-detail";
import FormDemo from "../pages/form-demo";
import RowColDemo from "../pages/row-col-demo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={PageNames.HOME} element={<Home />} />
      <Route path={PageNames.LOGIN} element={<Login />} />
      <Route path={PageNames.CART} element={<Cart />} />
      <Route path={PageNames.API_DEMO} element={<ApiDemo />} />
      <Route path={PageNames.API_DETAIL} element={<ApiDetail />} />
      <Route path={PageNames.FORM_DEMO} element={<FormDemo />} />
      <Route path={PageNames.ROW_COL_DEMO} element={<RowColDemo />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
