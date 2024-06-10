import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h2>Oops! Something went error</h2>
      <p>
        {err.status}: {err.data}
      </p>
    </>
  );
};

export default Error;
