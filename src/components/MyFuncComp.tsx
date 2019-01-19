import * as React from "react";

export interface IProps {
  name: "Farah";
}

const MyFuncComp = (props: IProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default MyFuncComp;
