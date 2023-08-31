import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import gamebg from "../images/gamebg.jpg";

const HomeScreen = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/hangman");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py={"200px"}
      sx={{
        backgroundImage: `url(${gamebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        sx={{
          px: 2,
          py: 8,
          width: { lg: 600, xs: "90%", sm: "80%", md: 650 },
          textAlign: "center",
          boxShadow: "0px 2px 19px 0px rgba(217, 216, 255, 0.83)",
          backgroundColor: "#FFB6C1",
          borderRadius: "15px",
        }}
      >
        <Typography
          pb="30px"
          fontSize={{ lg: "40px", xs: "12px", md: "37px", sm: "30px" }}
          fontWeight={550}
          color="#783114"
        >
          Lets Play <br></br>Hangman Game 🤩
        </Typography>
        <Button
          onClick={startGame}
          sx={{
            borderRadius: "50px",
            backgroundColor: "#18CAB6",
            py: 3,
            px: 3,
            ":hover":{
              backgroundColor:'#FD62C0'
            }
          }}
          variant="contained"
        >
          <PlayArrowIcon/>
        </Button>
      </Card>
    </Box>
  );
};

export default HomeScreen;
