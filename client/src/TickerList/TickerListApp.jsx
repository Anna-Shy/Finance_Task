import * as React from "react";

import { TableHeadComp } from "./TableComponent/TableHeadComp";
import { TableBodyComp } from "./TableComponent/TableBodyComp";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

export function TickerListApp({ tickerList }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="Ticker Table">
        <TableHeadComp />
        <TableBodyComp tickerList={tickerList} />
      </Table>
    </TableContainer>
  );
}
