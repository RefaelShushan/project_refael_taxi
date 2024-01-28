import { Route, Routes } from "react-router-dom";
import ROUTES from "./routeModel";
import Home from "../features/travel/pages/TravelsPage";
import SignIn from "../features/TaxiDriver/pages/SignInPage";
import AddNewTravel from "../features/travel/component/AddNewTravel";
import Layout from "../features/global/layout/Layout";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.TRAVELPAGE} element={<Layout />}>
        <Route path={ROUTES.TRAVELPAGE} element={<Home />} />
        <Route path={ROUTES.ADDNEWTRAVEL} element={<AddNewTravel />} />
      </Route>

      <Route path={ROUTES.SINGIN} element={<SignIn />} />
    </Routes>
  );
}
