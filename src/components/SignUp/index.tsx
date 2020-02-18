import * as React from "react";

interface Props {
  email: string;
}

export default (props: Props) => {
  return <div>
    <h1>Email: {props.email}</h1>
  </div>
}