import { createContext, useState } from "react";
const Weathercontext = createContext();
export const Weatherprovior = ({ children }) => {
  const [city, setCity] = useState();
  const [info, setInfo] = useState([]);
  const data = {
    city,
    setCity,
    info,
    setInfo,
  };
  return (
    <Weathercontext.Provider value={data}>{children}</Weathercontext.Provider>
  );
};
export default Weathercontext;
