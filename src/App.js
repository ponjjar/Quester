//A simple react app that uses the OpenAI API to answer questions by Caique Ponjjar :)
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Configuration, OpenAIApi } from "openai";
import { useState, component } from "react";
import Translator from "./api/Translator";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { blue, green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import reportWebVitals from "./reportWebVitals";

import LinearProgress from "@mui/material/LinearProgress";

import Modal from '@mui/material/Modal';
import { Box, Chip, CircularProgress, InputLabel, MenuItem, Select } from "@mui/material";
import onSubmit from "./api/Generate";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const theme = createTheme({
  palette: {
    background: {
      default: "#fcf4e6",
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
const availableLangs = Translator("availableLangs", "en");
export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [openModal, setModalVisible] = useState(false);
  const [askInput, setAskInput] = useState("");
  const [answerTitle, setAnswerTitle] = useState("");
  
  const [userLang, setLang] = useState(navigator.language || navigator.userLanguage);

  async function SubmitEvent(event) {
    event.preventDefault();
    setLoading(true);
    try {
      setResult(await onSubmit(askInput, userLang));
    } catch {
      setResult("");
    }
    setLoading(false);

    setAnswerTitle(askInput);
    setAskInput("");
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

      <center>
        {loading ? (
          <LinearProgress position="sticky" sticky></LinearProgress>
        ) : (
          <></>
        )}
        <br />
        <Container fixed>
          <Typography variant="h4" gutterBottom>
            {Translator("Title", userLang)}
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              padding: "5px",
              alignItems: "center",
              maxWidth: "75%",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label={Translator("labelAsk", userLang)}
              multiline
              maxRows={10}
              sx={{ ml: 1, flex: 1, marginRight: 0.5 }}
              variant="outlined"
              size="small"
              style={{ backgroundColor: "white" }}
              value={askInput}
              onChange={(e) => setAskInput(e.target.value)}
              placeholder={Translator("placeHolderAnswer", userLang)}
            />

            {loading ? (
              <Button
                variant="contained"
                disabled={true}
                startIcon={<CircularProgress size={25} />}
              >
                {" "}
                {Translator("Wait", userLang)}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={SubmitEvent}
                onSubmit={onSubmit}
                startIcon={<QuestionAnswerIcon />}
              >
                {Translator("Send", userLang)}
              </Button>
            )}
          </Box>

          <Collapse
            style={{ marginTop: 3 }}
            in={!loading}
            enter={300}
            timeout={300}
            collapsedSize={0}
          >
            <Card sx={{ maxWidth: "75%" }}>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {answerTitle ? (
                    answerTitle[0].toUpperCase() +
                    answerTitle.slice(1).toLowerCase()
                  ) : (
                    <></>
                  )}
                </Typography>
                {result ? (
                  <TextField
                    align="justify"
                    multiline
                    fullWidth
                    justify
                    value={result}
                    blocked
                  />
                ) : (
                  <div>
                    <p align="left">
                      <img
                        style={{
                          borderRadius: "50%",
                          float: "Left",
                          padding: "0 20px 0 0",
                        }}
                        src={process.env.PUBLIC_URL + "/OwlMaskotDallE.png"}
                        width={"105em"}
                        align="middle"
                      />
                      {Translator("Owl", userLang)}
                      <br />
                    </p>{" "}
                  </div>
                )}
              </CardContent>
              <CardActions style={{ float: "right" }}>
                <Chip
                  size="small"
                  variant="outlined"color="primary" 
                  label={Translator("Credits", userLang)}
                  onClick={(event) =>
                    (window.location.href =
                      "https://github.com/Caique-P/Quester")
                  }
                />
                <Chip
                  size="small"
                  variant="outlined"color="success" 
                  label={Translator("lang", userLang)}
                  onClick={() =>
                    setModalVisible(!openModal)
                  }
                />
           
              </CardActions>
            </Card>
          </Collapse>
          <Modal
  open={openModal}
  onClose={() =>(setModalVisible(!openModal))}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
<Box sx={{ ...style, width: 400 }}>
    <h2 id="parent-modal-title">Text in a modal</h2>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{Translator("ChangeLang", userLang)}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={ (event) => {
      setLang(event.target.value);
    }}
    value={userLang.substring(0, 2)}
  >
    {availableLangs.map(({ label, value }, index) =>  (<MenuItem key={index} value={value}>{label}</MenuItem>
    ))}
  </Select>
</FormControl>
  </Box>
</Modal>
        </Container>
      </center>
    </ThemeProvider>
  );
}
