import { useContext } from "react";
import Weathercontext from "../weathercontent";
import Card from "./card";
function content() {
  const { info } = useContext(Weathercontext);
  return (
    <div className="content">
      {info.map((item, key) => (
        <Card item={item} key={key} />
      ))}
    </div>
  );
}

export default content;
