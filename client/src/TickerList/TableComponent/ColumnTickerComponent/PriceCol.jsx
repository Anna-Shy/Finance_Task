import React from "react";

import { StyledTableCell } from "../StyledTable";

export const PriceCol = ({ price }) => {
  return <StyledTableCell align="center">${price}</StyledTableCell>;
};
