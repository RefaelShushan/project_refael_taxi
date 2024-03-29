import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "../../global/styled-component/continer.styled";
import { DivBox } from "../../global/styled-component/box.styled";
import TravelPageHeader from "../component/TravelPageHeader";
import TotalSelsAndGraph from "../component/TotalSelsAndGraph";
import BadyTravelTable from "../component/BadyTravelTable";
import ROUTES from "../../../routes/routeModel";
import NavigationButton from "../../global/useNvigate/NavigationButton";
import { ButtonStyle } from "../../global/styled-component/button.styled";

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
        <TravelPageHeader />

        <Container style={{ paddingTop: 12 }}>
          <Grid container spacing={3}>
            <TotalSelsAndGraph />
            <DivBox way="column" width="100%" padding="30px" margin="20px">
              <ButtonStyle>
                <NavigationButton to={ROUTES.ADDNEWTRAVEL}>
                  add New Travel
                </NavigationButton>
              </ButtonStyle>
            </DivBox>
            <BadyTravelTable />
          </Grid>
        </Container>
      </Box>
    </DivBox>
  );
}
