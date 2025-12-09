import { createContext ,useState} from "react";  

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setname] = useState("sree");
  const [count, setcount] = useState(100);
  const demo=()=>{
    return "hello world";
  }
  return (
    <DataContext.Provider value={{ name, setname, count, setcount ,demo}}>
      {children}
    </DataContext.Provider>
  );
};  
export default DataProvider;