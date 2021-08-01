// import React from 'react'
// import { Spinner } from 'react-bootstrap'

// const Loader = () => {
//     return (
//         <Spinner animation='border' role='status' style={{ width:'100px',height:'100px',margin:'auto',display:'block'}}>
//             <span className='sr-only'>Loading...</span>
//         </Spinner>
//     )
// }

// export default Loader

import { useState } from "react";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
  let color = "lightgreen";

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: lightgreen;
  `;

  return (
    <ClimbingBoxLoader color={color} loading={true} css={override} size={15} />
  );
};

export default Loader;
