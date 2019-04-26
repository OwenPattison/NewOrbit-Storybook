import * as React from "react";

interface FarewellProps {
  name: string;
  age: string;
}

const Farewell: React.FunctionComponent<FarewellProps> = ({ name, age }) => (
  <div>
    <h1>
      Goodbye {name} ({age})
    </h1>
  </div>
);

export { Farewell };
