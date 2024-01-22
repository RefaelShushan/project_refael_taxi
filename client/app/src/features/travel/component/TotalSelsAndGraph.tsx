import { DivBox } from "../../global/styled-component/box.styled";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Grid from "@mui/material/Grid";

export default function TotalSelsAndGraph() {
  return (
    <DivBox width="100%" padding="10px" margin="10px">
      <Grid item xs={12} md={8} lg={9}>
        <DivBox
          way="column"
          padding="2px"
          height="240px"
          margin="0 20px"
          backgroundcolor="white"
          box_shadow="0.5px 2px 0px 0px rgba(0, 0, 0, 0.1)"
          radius="5px"
        >
          <Chart />
        </DivBox>
      </Grid>

      <Deposits />
    </DivBox>
  );
}
