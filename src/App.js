//A simple react app that uses the OpenAI API to answer questions by Caique Ponjjar :)
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Translator from "./api/Translator";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import SchoolIcon from "@mui/icons-material/School";
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
import { Edit } from "@mui/icons-material";
import themeStyle from "./api/Theme";
import ResponsiveAppBar from "./Header";

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
  const [loading, setLoading] = useState([false, false]);
  const [logo, setLogo] = // random number between 0 and 13
  useState(Math.floor(Math.random() * 14));
  const [result, setResult] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [openModalLang, setModalVisibleLang] = useState(false);
  const [temperature, setTemperature] = useState(0.1);
  const [askInput, setAskInput] = useState("");
  const [answerTitle, setAnswerTitle] = useState("");
  const [CopySucess, setCopySucess] = useState(false);
  const [themeApplyed, setTheme] = useState("light");
  if (
    localStorage.getItem("theme") != null &&
    localStorage.getItem("theme") != themeApplyed
  ) {
    setTheme(localStorage.getItem("theme"));
  } else if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", themeApplyed);
  }
  const theme = themeStyle(themeApplyed);

  const [userLang, setLang] = useState(
    localStorage.getItem("lang") != null
      ? localStorage.getItem("lang")
      : navigator.language || navigator.userLanguage
  );

  async function SubmitEvent(event, anotherAsk) {
    event.preventDefault();
    setLoading([true, true]);
    let loadingSubmit = true;
    const newAsk = anotherAsk != undefined ? anotherAsk : askInput;
    try {
      setResult(await onSubmit(newAsk, userLang, temperature));
    } catch {
      setResult("");
    }
    setLoading([false, true]);
    loadingSubmit = false;
    setAnswerTitle(newAsk);
    setAskInput("");
    if (loadingSubmit === false) {
      try {
        setSuggestions(await onSubmit(newAsk, userLang, temperature, true));
      } catch {
        console.log("Error on suggestions");
        setSuggestions("");
      }
      console.log("Suggestions: " + suggestions);
      setLoading([false, false]);
    }
  }

  React.useEffect(() => {
    if(
      window.location.pathname.includes("%20") && !result && suggestions.length < 1
    ) {
      SubmitEvent(
        { preventDefault: () => {} },
        window.location.pathname.split("/").join(" ").split("%20").join(" ")
        
      );
      setTimeout(() => { 
        window.history.replaceState({}, document.title, "/");

      }, 1000);
    }
    if (!result && suggestions.length < 1) {
      async function start() {
        setSuggestions(
          await onSubmit(
            Translator("otherFacts", userLang),
            userLang,
            0.1,
            true
          )
        );
      }
      start();
    }
  }, [result, suggestions]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

      <center>
        <ResponsiveAppBar
        theme = {theme}
        userLang = {userLang}
        ></ResponsiveAppBar>
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
            autoHideDuration={600}
            anchorOrigin={{
              vertical: "top",
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
            >
              {Translator("Copy", userLang)}
            </Alert>
          </Snackbar>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              borderRadius: "10px",
              backgroundColor: theme.palette.background.paper,
              padding: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              width: "fit-content",
            }}
          >
            {Translator("Title", userLang)}
            <IconButton>
              <SchoolIcon color="primary"></SchoolIcon>
            </IconButton>
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              padding: "5px",
              alignItems: "center",
              maxWidth: "85%",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label={Translator("labelAsk", userLang)}
              multiline
              size="large"
              maxRows={10}
              sx={{ ml: 1, flex: 1, marginRight: 0.5 }}
              variant="outlined"
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
                style={{ height: 56 }}
                startIcon={<CircularProgress size={25} />}
              >
                {" "}
                {Translator("Wait", userLang)}
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ height: 56 }}
                size="large"
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
                {answerTitle ? (
                  <>
                    <Typography
                      gutterBottom
                      variant="h6"
                      onClick={() => {
                        setAskInput(answerTitle);
                      }}
                    >
                      {answerTitle[0].toUpperCase() +
                        answerTitle.slice(1).toLowerCase()}
                      <IconButton color="primary">
                        {" "}
                        <Edit />
                      </IconButton>{" "}
                    </Typography>
                  </>
                ) : (
                  <></>
                )}

                {result ? (
                  <>
                    <Tooltip
                      placement="bottom"
                      title={Translator("Copy", userLang)}
                    >
                      <TextField
                        align="justify"
                        multiline
                        fullWidth
                        justify
                        value={result}
                        autoFocus={true}
                        InputProps={{
                          autoFocus: true,
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
                        src={process.env.PUBLIC_URL + `/logos/${
                          logo }.jpeg`}
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
            {loading[1] && suggestions.length > 1 && (
              <Skeleton
                variant="rectangular"
                style={{ marginTop: 3 }}
                height={5}
              />
            )}
            <Collapse
              style={{ marginTop: 3 }}
              in={!loading[1] && suggestions.length > 1}
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
                      suggestions.map((suggestion, index) => {
                        let color = [
                          "secondary",

                          "error",
                          "primary",
                          "warning",
                          "info",
                          "success",
                          "default",
                        ][index % 7];
                        return (
                          suggestion.trim() != "" && (
                            <Chip
                              size="large"
                              variant="outlined"
                              color={color}
                              label={suggestion}
                              onClick={(event) => {
                                let newData = event.target.innerText;
                                for (let i = 0; i < 3; i++) {
                                  if (newData.split("\n")[0] === "") {
                                    newData = newData.slice(1);
                                  }
                                }
                                setAskInput(newData);
                                SubmitEvent(event, newData);
                              }}
                            />
                          )
                        );
                      })
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
              padding: "50px",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
            onClose={() => setModalVisibleLang(!openModalLang)}
          >
            <Box
              sx={{
                position: "relative",
                width: "80%",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflowY: "hidden",
                padding: "1rem",
                borderRadius: "20px",
                backgroundColor: "#fff",
                flexDirection: "column",
                border: "1px solid " + theme.palette.primary.main,
                backgroundColor: theme.palette.background.default,
              }}
            >
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
              <FormControl
                fullWidth
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  padding: "4px",
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <InputLabel id="changeLang">
                  {" "}
                  {Translator("ChangeLang", userLang)}
                </InputLabel>

                <Select
                  labelId="changeLang"
                  id="changeLangSelect"
                  label={Translator("ChangeLang", userLang)}
                  onChange={(event) => {
                    setAskInput(answerTitle);
                    setLang(event.target.value);
                    SubmitEvent(event);
                    localStorage.setItem("lang", event.target.value);
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
              </FormControl>
              <FormControl
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  padding: "10px",
                  backgroundColor: theme.palette.background.paper,
                }}
                fullWidth
              >
                <label id="simple-select-label">
                  {Translator("Random", userLang)}
                </label>
                <Slider
                  label={Translator("Random", userLang)}
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
              </FormControl>
              <FormControl
                style={{
                  marginTop: 20,
                  borderRadius: 10,
                  padding: "4px",
                  backgroundColor: theme.palette.background.paper,
                }}
                fullWidth
              >
                <InputLabel id="changeTheme">
                  {" "}
                  {Translator("ChangeTheme", userLang)}
                </InputLabel>
                <Select
                  labelId="changeTheme"
                  id="changeThemeSelect"
                  label={Translator("ChangeTheme", userLang)}
                  onChange={(event) => {
                    localStorage.setItem("theme", event.target.value);
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
