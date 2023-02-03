import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

import GebruikersInterface from "../src/components/GebruikersInterface/GebruikersInterface";
import MijnReserveringen from "./components/MijnReserveringen/MijnReserveringen";
import Donatie from "./components/Donatie/Donatie";
import { Voorstellingen } from "./components/Voorstellingen/Voorstellingen";
import { Voorstelling } from "./components/Voorstelling";
import { Afrekenen } from "./components/Afrekenen";
import { Cancel } from "./components/Cancel";
import { Succes } from "./components/Succes";
import { Winkelwagen } from "./components/Winkelwagen/Winkelwagen";

import StoelReservatie from "./components/StoelReservatie/StoelReservatie";

//admin
import { OverzichtVoorstellingen } from "./components/Admin/Voorstellingen/OverzichtVoorstellingen";
import { DetailsVoorstelling } from "./components/Admin/Voorstellingen/DetailsVoorstelling";
import { CreateVoorstelling } from "./components/Admin/Voorstellingen/Create/CreateVoorstelling";
import { CreateZaal } from "./components/Admin/Zalen/CreateZaal";
import { CreatePlanning } from "./components/Admin/Planning/CreatePlanning";
import { PlanningsOverzicht } from "./components/Admin/Planning/PlanningsOverzicht";
import { Plannen } from "./components/Admin/Planning/Plannen";
import { CreateBand } from "./components/Admin/Bands/Create/CreateBand";
import { Bandpagina } from "./components/Admin/Bands/BandPagina";
import { UpdateBand } from "./components/Admin/Bands/Update/UpdateBand";
import { AddToBand } from "./components/Admin/Bands/Add/AddToBand";

//Authentication
import { Login } from "./components/Authentication/Login/Login";
import { Register } from "./components/Authentication/Register/Register";
import { RequireAuth } from "react-auth-kit";

//UserHomes
import { UserHome } from "./components/Accounts/User/UserHome";
import { Navigate } from "react-router-dom";
import { BandDetails } from "./components/Admin/Bands/Details/BandDetails";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Logout",
    element: <Register />,
  },
  {
    path: "/UserHome",
    element: (
      // <OverzichtVoorstellingen />

      <RequireAuth loginPath={"/login"}>
        <UserHome />
      </RequireAuth>
    ),
  },
  {
    path: "/voorstellingen",
    element: <Voorstellingen />,
  },
  {
    path: "/voorstelling",
    element: <Voorstelling />,
  },
  {
    path: "/StoelReservatie/:voorstellingId",
    element: <StoelReservatie />,
  },
  {
    path: "/GebruikersInterface",
    element: <GebruikersInterface />,
  },
  {
    path: "/MijnReserveringen",
    element: <MijnReserveringen />,
  },
  {
    path: "/Donatie",
    element: <Donatie />,
  },
  {
    path: "/Winkelwagen",
    element: (
      <RequireAuth loginPath={"/login"}>
        <Winkelwagen />
      </RequireAuth>
    ),
  },
  {
    path: "/Succes",
    element: <Succes />,
  },
  {
    path: "/Cancel",
    element: <Cancel />,
  },
  {
    path: "/Afrekenen",
    element: <Afrekenen />,
  },
  {
    path: "/admin/voorstellingen",
    element: (
      <RequireAuth loginPath={"/login"}>
        <OverzichtVoorstellingen />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/voorstellingen/:id",
    element: (
      <RequireAuth loginPath={"/login"}>
        <DetailsVoorstelling />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/voorstellingen/create",
    element: (
      <RequireAuth loginPath={"/login"}>
        <CreateVoorstelling />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/zalen/create",
    element: (
      <RequireAuth loginPath={"/login"}>
        <CreateZaal />
      </RequireAuth>
    ),
  },

  {
    path: "/admin/band/overzicht",
    element: (
      <RequireAuth loginPath={"/login"}>
        <Bandpagina />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/band/create",
    element: (
      <RequireAuth loginPath={"/login"}>
        <CreateBand />
      </RequireAuth>
    ),
  },
  {
    path: "/band/details/:id",
    element: <BandDetails />,
  },
  {
    path: "/admin/band/update/:id",
    element: (
      <RequireAuth loginPath={"/login"}>
        <UpdateBand />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/band/addUser/:id",
    element: (
      <RequireAuth loginPath={"/login"}>
        <AddToBand />
      </RequireAuth>
    ),
  },
];

export default AppRoutes;
