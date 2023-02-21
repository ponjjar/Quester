//A simple react app that uses the OpenAI API to answer questions by Caique Ponjjar :)
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Configuration, OpenAIApi } from "openai";
import { useState, component } from "react";
import Translator from "./api/Translator";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { blue, green, purple, yellow } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import reportWebVitals from "./reportWebVitals";
import SchoolIcon from '@mui/icons-material/School';
import LinearProgress from "@mui/material/LinearProgress";

import Modal from "@mui/material/Modal";
import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Snackbar,
  Tooltip,
} from "@mui/material";
import onSubmit from "./api/Generate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function App() {
  //loading [loading, loadingSuggestions]
  const [loading, setLoading] = useState([false, true]);
  const [result, setResult] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [openModalLang, setModalVisibleLang] = useState(false);
  const [temperature, setTemperature] = useState(0.1);
  const [askInput, setAskInput] = useState("");
  const [answerTitle, setAnswerTitle] = useState("");
  const [CopySucess, setCopySucess] = useState(false);
  const [themeApplyed, setTheme] = useState("night");
  if(sessionStorage.getItem("theme") != null && sessionStorage.getItem("theme") != themeApplyed){
    setTheme(sessionStorage.getItem("theme"));
  }else if(sessionStorage.getItem("theme") == null){
    sessionStorage.setItem("theme", themeApplyed);
  }

  const theme = themeApplyed == "sunLight" ? createTheme({
    palette: {
      background: {
        default:  "#ffe4a6",
        paper:  "#fcf4e6",
      },
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
  }): themeApplyed == "night" ? createTheme({
    palette: {
      background: {
        mode: 'dark',
        default:  "#0f0a26",
        paper: "#1C1347",
      },
      primary: {
        main: blue[500],
      },
      text: {
        primary: "#fff",
        secondary: "#b3b3b3",
      },
      secondary: {
        main: green[500],
      },
    },
  }): themeApplyed == "dark" ? createTheme({
    palette: {
      background: {
        mode: 'dark',
        default:  "#000000",
        paper: "#1a1a1a",
      },
      primary: {
        main: blue[900],
      },

      text: {
        primary: "#fff",
        secondary: "#b3b3b3",
      },
      secondary: {
        main: green[900],
      },
    },
  }): themeApplyed == "DioGo" ? createTheme({
    palette: {
      background: {
        mode: 'dark',
        default:  "#002e02",
        paper: "#00291e",
      },
      primary: {
        main: green[900],
      },

      text: {
        primary: "#fff",
        secondary: green[1000],
      },
      secondary: {
        main: yellow[900],
      },
    },
  }): themeApplyed == "JuLiA" ? createTheme({
    palette: {
      background: {
        mode: 'light',
        default:  "#fc86c3",
        paper: "#fac5e1",
      },
      primary: {
        main: purple[500],
      },

      text: {
        secondary: purple[900],
      },
      secondary: {
        main: green[900],
      },
    },
  }): themeApplyed == "light" && createTheme({
    palette: {
      background: {
        default:  "#fcf4e6",
      },
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  const [userLang, setLang] = useState(
    navigator.language || navigator.userLanguage
  );

  async function SubmitEvent(event, anotherAsk) {
    event.preventDefault();
    setLoading([true, true]);
    let newAsk = anotherAsk != undefined ? anotherAsk : askInput;
    try {
      setResult(await onSubmit(newAsk, userLang, temperature));
    } catch {
      setResult("");
    }
    setLoading([false, true]);
    setAnswerTitle(askInput);
    setAskInput("");
    if (loading[0] == false && loading[1] == true) {
      try {
        setLoading([false, true]);
        setSuggestions(await onSubmit(newAsk, userLang, temperature, true));
      } catch {
        setSuggestions("");
      }
      console.log("Suggestions: " + suggestions);
      setLoading([false, false]);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

      <center>
        {loading[0] ? (
          //  <Skeleton variant="rectangular" width={210} height={118} />
          <LinearProgress position="sticky" sticky></LinearProgress>
        ) : (
          <></>
        )}
        <br />
        <Container fixed>
          <Snackbar
            open={CopySucess}
            autoHideDuration={6000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            onClose={() => {
              setCopySucess(false);
            }}
          >
            <Alert
              onClose={() => {
                setCopySucess(false);
              }}
              severity="success"
              sx={{ width: "100%" }}
            >
              {Translator("Copy", userLang)}
            </Alert>
          </Snackbar>
          <Typography variant="h4" gutterBottom style={{borderRadius:"10px", backgroundColor:theme.palette.background.paper, padding:"10px", marginTop:"10px", marginBottom:"10px", width:"fit-content"}}>
            {Translator("Title", userLang)}
            <IconButton >
              <SchoolIcon color="primary"></SchoolIcon>
            </IconButton>
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
              style={{ backgroundColor: theme.palette.background.paper }}
              value={askInput}
              onChange={(e) => {
                setAskInput(e.target.value);
              }}
              placeholder={Translator("placeHolderAnswer", userLang)}
            />

            {loading[0] ? (
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
            in={!loading[0]}
            enter={300}
            timeout={300}
            collapsedSize={0}
          >
            <Card>
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
                  <>
                    <Tooltip
                      placement="right"
                      title={Translator("Copy", userLang)}
                    >
                      <TextField
                        align="justify"
                        multiline
                        fullWidth
                        justify
                        value={result}
                        InputProps={{
                          readOnly: true,
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <ContentCopyIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        onClick={() => {
                          navigator.clipboard.writeText(result);
                          setCopySucess(true);
                        }}
                        blocked
                      />
                    </Tooltip>
                  </>
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
              <CardActions style={{ display: "block", float: "right" }}>
                <Chip
                  size="small"
                  variant="outlined"
                  color="info"
                  label={Translator("Credits", userLang)}
                  onClick={(event) =>
                    (window.location.href =
                      "https://github.com/Caique-P/Quester")
                  }
                />
                <Chip
                  size="small"
                  variant="outlined"
                  color="success"
                  label={Translator("lang", userLang)}
                  onClick={() => setModalVisibleLang(!openModalLang)}
                />

                <Chip
                  size="small"
                  variant="outlined"
                  color="warning"
                  label={themeApplyed}
                  onClick={() => setModalVisibleLang(!openModalLang)}
                />
                <Chip
                  size="small"
                  variant="outlined"
                  color="error"
                  label={Translator("Random", userLang) + " " + temperature}
                  onClick={() => setModalVisibleLang(!openModalLang)}
                />
              </CardActions>
            </Card>
            {/* Card de sugestões de perguntas */}
            {loading[1] && result && (
              <Skeleton
                variant="rectangular"
                style={{ marginTop: 3 }}
                height={5}
              />
            )}
            <Collapse
              style={{ marginTop: 3 }}
              in={!loading[1]}
              enter={300}
              timeout={300}
              collapsedSize={0}
            >
              <Card sx={{ marginTop: "10px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {Translator("AnotherAsks", userLang)}
                  </Typography>

                  <CardActions style={{ display: "block" }}>
                    {suggestions ? (
                      suggestions.map(
                        (suggestion) =>
                          suggestion.trim() != "" && (
                            <Chip
                              size="large"
                              variant="outlined"
                              color={
                                [
                                  "primary",
                                  "secondary",
                                  "success",
                                  "error",
                                  "warning",
                                  "info",
                                  "default",
                                ][Math.floor(Math.random() * 7)]
                              }
                              label={suggestion}
                              onClick={(event) => {
                                let newData = suggestion;
                                for (let i = 0; i < 3; i++) {
                                  if (newData[i].split("\n")[0] === "") {
                                    newData[i] = newData[i].slice(1);
                                  }
                                }
                                setAskInput(newData
                                  );
                                SubmitEvent(event, newData);
                              }}
                            />
                          )
                      )
                    ) : (
                      <></>
                    )}
                  </CardActions>
                </CardContent>
              </Card>
            </Collapse>
          </Collapse>
          {/* Round modal styled */}
          <Modal
            open={openModalLang}
            sx={{
              padding: '50px',
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}

            onClose={() => setModalVisibleLang(!openModalLang)}
          >
            <Box sx={{   position: 'relative',
        width: '80%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
        padding: '1rem',
        borderRadius: '20px',
        backgroundColor: '#fff',
        flexDirection: 'column',backgroundColor: theme.palette.background.default }}>
              {/* give and title cool to modal and beutiful */}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {Translator("Customs", userLang)}
              </Typography>
              {/* create and border rounded background into style form */}
              <FormControl fullWidth style={{ marginTop: 20, borderRadius: 10, padding:"4px",  backgroundColor:theme.palette.background.paper}}>
              <InputLabel 
                  id="changeLang"> {Translator("ChangeLang", userLang) }</InputLabel>

                <Select
                  labelId="changeLang"
                  id="changeLangSelect"

                  label =  {Translator("ChangeLang", userLang) }
                  onChange={(event) => {
                    setAskInput(answerTitle);
                    setLang(event.target.value);
                    SubmitEvent(event);
                  }}
                  value={userLang.substring(0, 2)}
                >
                  {Translator("availableLangs", userLang).map(
                    ({ label, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {label}
                      </MenuItem>
                    )
                  )}
                </Select>
                
              </FormControl><FormControl style ={{ marginTop:20 , borderRadius: 10, padding:"10px",  backgroundColor:theme.palette.background.paper }} fullWidth>
                <label id="simple-select-label">
                  {Translator("Random", userLang)}
                </label>
                <Slider
                  
                  label= {Translator("Random", userLang)}
                  defaultValue={temperature}
                  onChange={(event, newValue) => {
                    setTemperature(newValue);
                  }}
                  valueLabelDisplay="auto"
                  step={0.1}
                  marks
                  min={0.1}
                  max={0.9}
                />
                </FormControl><FormControl style ={{ marginTop:20, borderRadius: 10, padding:"4px",  backgroundColor:theme.palette.background.paper }}fullWidth>
                 <InputLabel id="changeTheme"> {Translator("ChangeTheme", userLang) }</InputLabel>
                <Select
                
                labelId="changeTheme"
                  id="changeThemeSelect"
                  label =  {Translator("ChangeTheme", userLang) }
                  onChange={(event) => {
                    sessionStorage.setItem("theme", event.target.value);
                    setTheme(event.target.value);
                  }}
                  value={themeApplyed}
                >
                  {Translator("availableThemes", userLang).map(
                    ({ label, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {label}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>

            </Box>
          </Modal>
        </Container>
      </center>
    </ThemeProvider>
  );
}
