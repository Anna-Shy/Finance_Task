import React from "react";

import { StyledTableCell } from "./StyledTable";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const TableHeadComp = () => {
  const columns = [
    { name: "Ticker", id: "ticker" },
    { name: "Exchange", id: "exchange" },
    { name: "Price", id: "price" },
    { name: "Change", id: "change" },
    { name: "Dividend", id: "dividend" },
    { name: "Last Trade Time", id: "last_trade_time" }
  ];

  return (
    <TableHead>
      <TableRow>
        {columns.map((data) => {
          return (
            <StyledTableCell key={data.id} align="center">
              {data.name}
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
