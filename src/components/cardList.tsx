import React from "react";
import { Result } from "../types";
import Card from "./card"
type Props = {
  datas: Array<Result>;
};

const CardList = (props: Props) => {
  return (
    <div className="cardListContainer">
      {props.datas.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default CardList;
