import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { CarreerCard } from "../components/CarreerCard";
import { Banner, ContainerWrapper } from "./shared.styles";

const Carreer = () => {
  return (
    <ContainerWrapper>
      <Banner>
        <Typography variant="h3">Carreers</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CarreerCard />
          </Grid>
          <Grid item xs={4}>
            <CarreerCard />
          </Grid>
          <Grid item xs={4}>
            <CarreerCard />
          </Grid>
        </Grid>
      </Banner>
    </ContainerWrapper>
  );
};

export default Carreer;
