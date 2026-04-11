import React from "react";

import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <p className="text-3xl">Error Page</p>
      <p>
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
