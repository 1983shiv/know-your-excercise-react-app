// eslint-disable-next-line no-console
/* eslint-disable */

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.svg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "100px", xs: "35px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#5d5df9" fontWeight="bold" fontSize="100px">
      Fitness
    </Typography>
    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: "44px", xs: "40px" },
        lineHeight: "40px",
        fontWeight: "bold",
        fontFamily: "system-ui",
      }}
      mb="23px"
      mt="8px"
    >
      Is Not A Destination <br />
      its a journey
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective <br /> exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#5d5df9",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      class="gradient-text"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
