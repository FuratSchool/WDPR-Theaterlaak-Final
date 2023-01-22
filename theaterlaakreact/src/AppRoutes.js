import { Home } from "./components/Home";
import GebruikersInterface from '../src/components/GebruikersInterface/GebruikersInterface';
import MijnReserveringen from './components/MijnReserveringen/MijnReserveringen';
import Donatie from './components/Donatie/Donatie';
import { Voorstellingen } from "./components/Voorstellingen";
import { Voorstelling } from "./components/Voorstelling";
import { Afrekenen } from "./components/Afrekenen";
import { Cancel } from "./components/Cancel";
import { Succes } from "./components/Succes";
import { Winkelwagen } from "./components/Winkelwagen";
import {Bandpagina1} from "./components/Bandpagina1";

//admin
import { OverzichtVoorstelling } from './components/Admin/Voorstellingen/Voorstellingen';
import { CreateVoorstelling } from './components/Admin/Voorstellingen/CreateVoorstelling';
import { CreateZaal } from './components/Admin/Zalen/CreateZaal';
import { CreatePlanning } from './components/Admin/Planning/CreatePlanning';
import { PlanningsOverzicht } from './components/Admin/Planning/PlanningsOverzicht';
import { Plannen } from './components/Admin/Planning/Plannen';

const AppRoutes = [
    {
        
        index: true,
        element: <Home />    
    },
    {
        path: '/voorstellingen',
        element: <Voorstellingen />
    },
    {
        path: '/voorstelling',
        element: <Voorstelling />
    },

    {
        path: '/GebruikersInterface',
        element: <GebruikersInterface />
    },
    {
        path: '/MijnReserveringen',
        element: <MijnReserveringen />
    },
    {
        path: '/Donatie',
        element: <Donatie />
    },
    {
        path: '/Winkelwagen',
        element: <Winkelwagen />
    },
    {
        path: '/Succes',
        element: <Succes />
    },
    {
        path: '/Cancel',
        element: <Cancel />
    },
    {
        path: '/Afrekenen',
        element: <Afrekenen />
    },
    {
        path: '/admin/voorstellingen',
        element: <OverzichtVoorstelling />
    },
    {
        path: '/admin/voorstellingen/create',
        element: <CreateVoorstelling />
    },
    {
        path: '/admin/zalen/create',
        element: <CreateZaal />
    },
    {
        path: '/admin/planning',
        element: <PlanningsOverzicht />
    },
    {
        path: '/admin/planning/create',
        element: <CreatePlanning />
    },
    {
        path: '/admin/planning/update',
        element: <Plannen />
    },
    {
        path: '/admin/bandpagina',
        element: <Bandpagina1 />
    },
];

export default AppRoutes;
