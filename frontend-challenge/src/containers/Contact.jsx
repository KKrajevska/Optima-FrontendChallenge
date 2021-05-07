import { Typography } from "@material-ui/core";
import React from "react";
import { Banner, ContainerWrapper } from "./shared.styles";

const Contact = () => {
  return (
    <ContainerWrapper>
      <Banner>
        <Typography variant="h5">Contact</Typography>
        <Typography>Telephone: 123456</Typography>
        <Typography>Address: No Name</Typography>
      </Banner>
    </ContainerWrapper>
  );
};

export default Contact;
