import * as React from "react";

import { StyledTableRow } from "./StyledTable";
import { TickerCol } from "./ColumnTickerComponent/TickerCol";
import { ExchangeCol } from "./ColumnTickerComponent/ExchangeCol";
import { PriceCol } from "./ColumnTickerComponent/PriceCol";
import { ChangeCol } from "./ColumnTickerComponent/ChangeCol";
import { DividendCol } from "./ColumnTickerComponent/DividendCol";
import { LastTradeTimeCol } from "./ColumnTickerComponent/LastTradeTimeCol";

import TableBody from "@mui/material/TableBody";

export const TableBodyComp = ({ tickerList }) => {
  return (
    <TableBody>
      {tickerList.map((data) => (
        <StyledTableRow key={data.ticker}>
          <TickerCol ticker={data.ticker} />
          <ExchangeCol exchange={data.exchange} />
          <PriceCol price={data.price} />
          <ChangeCol change={data.change} />
          <DividendCol dividend={data.dividend} />
          <LastTradeTimeCol time={data.last_trade_time} />
        </StyledTableRow>
      ))}
    </TableBody>
  );
};
