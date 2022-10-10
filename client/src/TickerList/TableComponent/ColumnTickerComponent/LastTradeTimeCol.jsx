import React from "react";

import { StyledTableCell } from "../StyledTable";

export const LastTradeTimeCol = ({ time }) => {
  time = new Date(time).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",

    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return <StyledTableCell align="center">{time}</StyledTableCell>;
};
