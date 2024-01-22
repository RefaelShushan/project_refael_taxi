import * as React from "react";
import Title from "./Title";
import { Text } from "../../global/styled-component/p.styled";
import { StyledLink } from "../../global/styled-component/link.styled";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Title>Recent Deposits</Title>
        <Text size="15px">
          <h1>$3,024.00</h1>
        </Text>
        <Text size="20px" color="text.secondary">
          on 15 March, 2019
        </Text>

        <StyledLink color="primary" href="#" onClick={preventDefault}>
          View balance
        </StyledLink>
      </Paper>
    </Grid>
  );
}
