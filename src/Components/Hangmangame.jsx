import React, { useState } from "react";
import randomcategory from "./randomcategory";
import step0 from "../images/0.jpg";
import step1 from "../images/1.jpg";
import step2 from "../images/2.jpg";
import step3 from "../images/3.jpg";
import step4 from "../images/4.jpg";
import step5 from "../images/5.jpg";
import step6 from "../images/6.jpg";
import { Box, Button,Grid, Stack, Typography } from "@mui/material";
import gamebg from "../images/gamebg.jpg";
import { useNavigate } from "react-router-dom";

const Hangmangame = () => {
  const navigate = useNavigate();
  const maxWrong = 6;
  const images = [step0, step1, step2, step3, step4, step5, step6];
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState(randomcategory());
  const [score, setScore] = useState(0);

  const handleBack = () => {
    navigate("/backhome");
  };
  // user guess
  const handleGuess = (e) => {
    let letter = e.target.value;
    setGuessed((prevGuessed) => new Set(prevGuessed).add(letter));

    // score add for correct letter
    if (answer.word.includes(letter)) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => Math.max(prev - 5, 0));
    }

    // set mistake
    setMistake(
      (prevMistake) => prevMistake + (answer.word.includes(letter) ? 0 : 1)
    );
  };

  // guess words
  const guessedWord = () => {
    return answer.word
      .split("")
      .map((letter) => (guessed.has(letter) ? letter : " _ "));
  };

  // for genrate alphabet keyboard
  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#18CAB6",
          ":hover": {
            backgroundColor: "#FFB6C1",
          },
        }}
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.has(letter)}
      >
        {letter}
      </Button>
    ));
  };
  // reset btn
  const resetButton = () => {
    setMistake(0);
    setGuessed(new Set());
    setAnswer(randomcategory());
    setScore(0);
  };

  // logic for win and loss
  const gameOver = mistake >= maxWrong;
  const isWinner = guessedWord().join("") === answer.word;
  let gameStat = generateButtons();

  if (isWinner) {
    gameStat = "You Won 🏆!!!  save the Hangman ";
  }

  if (gameOver) {
    gameStat = "You Lost!!!  Hangman Hang 😔 ";
  }

  // for ui
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py="150px"
      sx={{
        backgroundImage: `url(${gamebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 5,
          width: { xs: "83%", sm: "90%", lg: "70%", md: "90%" },
          boxShadow: "0px 2px 19px 0px rgba(217, 216, 255, 0.83)",
          borderRadius: "15px",
          backgroundColor: "white",
          border: "3px solid #FFB6C1",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ lg: 0, xs: "20px", sm: "20px", md: "20px" }}
        >
          <Grid item lg={6} sm={11} xs={12} md={11}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              
            >
              <Typography
              fontSize={"20px"}
                textAlign={"left"}
                color={"#FC65C3"}
              >
                Wrong Guesses: {mistake} of {maxWrong}
              </Typography>
              <Typography
                 fontSize={"20px"}
                textAlign={"left"}
                color={"#FC65C3"}
              >
                Score: {score}
              </Typography>
            </Stack>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={images[mistake]} alt="" />
            </Box>
          </Grid>
          <Grid item lg={6} sm={11} xs={12} md={11} textAlign={"center"}>
            <Typography fontSize={"20px"} pb={"10px"} color={"#FC65C3"}>
              Guess the word in the {answer.category} category:
            </Typography>
            <Typography pb="30px" fontSize={"30px"} color={"#FC65C3"}>
              {!gameOver ? guessedWord() : answer.word}
            </Typography>

            <Box
              pb="30px"
              justifyContent={"center"}
              display={"flex"}
              gap="10px"
              alignItems={"center"}
              flexWrap={"wrap"}
              color={"#FC65C3"}
            >
              {gameStat}
            </Box>

            <Stack
              direction={"row"}
              gap="10px"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                variant="contained"
                onClick={resetButton}
                sx={{
                  backgroundColor: "#18CAB6",
                  ":hover": {
                    backgroundColor: "#FFB6C1",
                  },
                }}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                onClick={handleBack}
                sx={{
                  backgroundColor: "#18CAB6",
                  ":hover": {
                    backgroundColor: "#FFB6C1",
                  },
                }}
              >
                Back to Home
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hangmangame;
