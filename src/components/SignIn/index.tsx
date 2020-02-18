import * as React from "react";

interface Props {
  name: string;
  age?: number;
}

export default (props: Props) => {
  return <div>
    <h1>Name: {props.name}</h1>
  </div>
}