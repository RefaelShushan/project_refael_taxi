import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../component/Chart";
import Deposits from "../component/Deposits";
import TableComponentTravel from "../component/TableTravel";
import { Container } from "../../global/styled-component/continer.styled";
import { DivBox } from "../../global/styled-component/box.styled";
import { StyledPaper } from "../../global/styled-component/continer.styled";


export default function Home() {
  return (
    <DivBox>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <TableComponentTravel />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DivBox>
  );
}
