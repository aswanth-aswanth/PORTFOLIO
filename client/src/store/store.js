import {create} from "zustand";

export const useStore=create((set)=>({

    //initial state properties and values
    darkMode:false,
    //actions to update the state    
    setDarkMode:()=>set(state=>({darkMode:!state.darkMode}))

    }));