import { createContext, useState } from "react";


export const wwContext = createContext({
    reserveringen: [],
    voegToeAanWw: () => {},
    verwijderVanWw: () => {},
    getTotaal: () => {}
});

export function wwProvider({children}){
const [wwReserveringen, setWwReserveringen] = useState([]);



    //in de ww [{id:}] 
const contextValue ={
    reserveringen: wwReserveringen,
    voegToeAanWw,
    verwijderVanWw,
    getTotaal
    }
    return(
        <wwContext.Provider value={contextValue}>
            {children}
        </wwContext.Provider>
    )
}


//provider -> toegang tot context overal in de 
