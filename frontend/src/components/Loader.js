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
