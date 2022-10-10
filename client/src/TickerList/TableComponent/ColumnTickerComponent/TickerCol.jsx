import React from "react";

import { StyledTableCell } from "../StyledTable";

export const TickerCol = ({ ticker }) => {
  switch (ticker) {
    case "AAPL":
      ticker = "Apple";
      break;
    case "GOOGL":
      ticker = "Alphabet";
      break;
    case "MSFT":
      ticker = "Microsoft";
      break;
    case "AMZN":
      ticker = "Amazon";
      break;
    case "FB":
      ticker = "Facebook";
      break;
    case "TSLA":
      ticker = "Tesla";
      break;
    default:
      ticker = "nothing";
      break;
  }

  return (
    <StyledTableCell component="th" scope="row" align="center">
      {ticker}
    </StyledTableCell>
  );
};
