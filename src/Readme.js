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
import ReactMarkdown from 'react-markdown'
import AssignmentIcon from '@mui/icons-material/Assignment';
import Modal from "@mui/material/Modal";
import {
  Alert,
  Autocomplete,
  Box,
  ButtonGroup,
  Chip,
  CircularProgress,
  Divider,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Snackbar,
  Switch,
  Tooltip,
} from "@mui/material";
import onSubmit from "./api/Generate";
import { Edit, FavoriteRounded, GitHub, Settings } from "@mui/icons-material";
import themeStyle from "./api/Theme";
import ResponsiveAppBar from "./Header";
import { pink } from "@mui/material/colors";

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
export default function Readme() {
  //loading [loading, loadingSuggestions]
  const [loading, setLoading] = useState([false, false]);
  const [result, setResult] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [openModalLang, setModalVisibleLang] = useState(false);
  const [temperature, setTemperature] = useState(0.1);
  const [askInput, setAskInput] = useState("");
  const [askDescInput, setAskDescInput] = useState("");
  const [openSourcer, setOpenSourcer] = useState("");
  const [license, setLicense] = useState(null);
  const [answerTitle, setAnswerTitle] = useState("");
  const [madeBy, setMadeBy] = useState(localStorage.getItem("username") != null ? localStorage.getItem("username") : "");
  const [answerDesc, setAnswerDesc] = useState("");
  const [CopySucess, setCopySucess] = useState(false);
  const [viewMarkdown, setViewMarkdown] = useState(true);
  const [themeApplyed, setTheme] = useState("light");
  const [errors, setErrors] = useState({
    askInput: "",
    askDescInput: "",
    madeBy: "",
  });

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

  async function SubmitEvent(event, anotherAsk, anotherDesc) {
    if (askInput === "" || askDescInput === "" || madeBy === "") {
      setErrors({
        askInput: askInput === "" || askInput == undefined ? Translator("Required", userLang) : "",
        askDescInput: askDescInput === "" || askDescInput == undefined ? Translator("Required", userLang) : "",
        madeBy: madeBy === "" || madeBy == undefined? Translator("Required", userLang) : "",
      });
      return ;
    }else {
      setErrors({
        askInput: "",
        askDescInput: "",
        madeBy: "",
      });
    }
    event.preventDefault();
    setLoading([true, true]);
    let loadingSubmit = true;
    const newAsk = anotherAsk != undefined ? anotherAsk : askInput;
    const newDesc = anotherDesc != undefined ? anotherDesc : askDescInput;
    try {
      setResult(await onSubmit( newAsk+  ". \n " + newDesc + ". \n " + Translator("ReadmeCredits") +  madeBy + ". \n"+ (license != null && license != "" ? "this project have license. \n" + license : "this project dont have any license. \n")  +  (openSourcer ? "project is openSourcer and accept contributtions" : "not is opensourcer and dont accept contributtions")+ " \n " , userLang, temperature));
    } catch {
      setResult("");
    }
    setLoading([false, true]);
    loadingSubmit = false;
    setAnswerTitle(newAsk);
    setAnswerDesc(newDesc);
    setAskInput("");
    setAskDescInput("");
    setMadeBy("");
    setOpenSourcer("");
  
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

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
        <Container >
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
            {Translator("Title", userLang).replace("Quester", "Readmer")}
            <IconButton>
              <AssignmentIcon color="primary"></AssignmentIcon>
            </IconButton>
          </Typography>

          <Box 
            component="form" sx={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              padding: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}>
          <Box
            sx={{
              alignSelf: "center",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              alignItems: "center", 
            }}
          >
            <TextField
              id="Title"
              label={Translator("readmeAskTitle", userLang)}
              error={errors.askInput}
              size="large"
              maxRows={10}
              sx={{ ml: 1, flex: 1, marginRight: 0.5 }}
              variant="outlined"
              style={{ backgroundColor: theme.palette.background.paper }}
              value={askInput}
              onChange={(e) => {
                setAskInput(e.target.value);
              }}
            /> <TextField
            id="Made by" 
            size="large"
            error={errors.madeBy}
            sx={{flex: 0.5, marginRight:1  ,
            }}
            variant="outlined"
            style={{ backgroundColor: theme.palette.background.paper }}
            value={ madeBy}
            label={Translator("ReadmeCredits", userLang)}
            onChange={(e) => {
              setMadeBy(e.target.value);
            }}
            placeholder={ ["Jhon Doe", "Caique", "Diogo", "Julia", "Maria", "João", "Pedro", "Paulo", "Carlos", "Ana", "Carla", "Cristina", "Cristian"] [Math.floor(Math.random() * 12)] + " & " + 
           ["Jhon Doe", "Caique", "Diogo", "Julia", "Maria", "João", "Pedro", "Paulo", "Carlos", "Ana", "Carla", "Cristina", "Cristian"] [Math.floor(Math.random() * 12)] 
          }
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
              type = "submit"
                variant="contained"
                style={{ height: 56 }}
                size="large"
                onClick={(e) => {
                  e.preventDefault();
                  
                  SubmitEvent(e);}}
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(e);
                }}
                startIcon={<QuestionAnswerIcon />}
              >
                {Translator("Send", userLang)}
              </Button>
            )}
       
          </Box>
              
                <TextField
              id="Description"
              error={errors.askDescInput}
              label={Translator("readmeAskDesc", userLang)}
              multiline
              size="large"
              minRows={3}
              maxRows={10}
              sx={{ m: 1, flex: 1,
                width: "97.5%", 

              }}
              variant="outlined"
              style={{ backgroundColor: theme.palette.background.paper }}
              value={askDescInput}
              onChange={(e) => {
                setAskDescInput(e.target.value);
                
              }}
              placeholder={Translator("placeHolderAnswer", userLang)}
            />
            <Box sx={{
              alignSelf: "right",
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              alignItems: "right",
              width: "100%",
              justifyContent: "right",

            }}>
            <Switch checked = {openSourcer} onChange = {() => {
              setOpenSourcer(!openSourcer);
            }}
            color="warning"
            checkedIcon = {<FavoriteRounded ></FavoriteRounded>} 
            ></Switch>
            <Typography variant = "subtitle1" sx = {{padding: "5px"}}> openSource</Typography>
            <Switch checked = {license != null} onChange = {() => {
              setLicense(license != null ? null : "");
            }}
            checkedIcon = { <AssignmentIcon/>} 
            
            color =  "warning"
            
            ></Switch>
            
  <Collapse in = {license == null} timeout = {300} collapsedSize = {0}
              mountOnEnter unmountOnExit
              orientation="horizontal"
  >
            <Typography variant = "subtitle1" sx = {{padding: "5px"}}> License</Typography>
            </Collapse>
            <Collapse in = {license != null} timeout = {300} collapsedSize = {0}
             mountOnEnter unmountOnExit
             orientation="horizontal"
            
            >
            <FormControl sx = {{width: "100%"}}>
              
             
            <Autocomplete
            id="combo-box-demo"
            options={
              [
                "MIT",
                "Apache-2.0",
                "GPL-2.0",
                "GPL-3.0",
                "BSD-3-Clause",
                "BSD-2-Clause",
                "LGPL-3.0",
                "MPL-2.0",
                "AGPL-3.0",
                "CC0-1.0",
                "EPL-2.0",
                "CDDL-1.0",
                "CPL-1.0",
                "ECL-2.0",
                "IPL-1.0",
                "ISC",
                "LPPL-1.3c",
                "MS-PL",
                "NCSA",
                "ODbL-1.0",
                "PDDL-1.0",
                "WTFPL",
                "Zlib",
                // github licenses:
                "AFL-3.0",
                "AGPL-3.0-only",
                "AGPL-3.0-or-later",
                "APL-1.0",
                "Artistic-2.0",
                "BSL-1.0",
                "CATOSL-1.1",
                "CC-BY-4.0",
                "CC-BY-SA-4.0",
                "CC-BY-NC-4.0",
                "CC-BY-NC-SA-4.0",
                "CC-BY-NC-ND-4.0",
                "CC-BY-ND-4.0",
                "CC0-1.0",
                "CDDL-1.1",
                "CECILL-2.1",
                "CERN-OHL-1.2",
                "CERN-OHL-P-2.0",
                "CERN-OHL-S-2.0",
                "CERN-OHL-W-2.0",
                "ClArtistic",
                "CNRI-Python",
                "CPAL-1.0",
                "CPL-1.0",
                "CUA-OPL-1.0",
                "ECL-2.0",
                "EFL-2.0",
                "EPL-1.0",
                "EPL-2.0",
                "EUPL-1.1",
                "EUPL-1.2",
                "Fair",
                "Frameworx-1.0",
                "FTL",
                "GFDL-1.1-only",
                "GFDL-1.1-or-later",
                "GFDL-1.2-only",
                "GFDL-1.2-or-later",
                "GFDL-1.3-only",
                "GFDL-1.3-or-later",
                "Giftware",
                "GL2PS",
                "Glide",
                "Glulxe",
                "HPND",
                "IBM-pibs",
                "ICU",
                "IJG",
                "IPA",
                "IPL-1.0",
                "ISC",
                "LAL-1.3",
                "LGPL-2.0-only",
                "LGPL-2.0-or-later",

                "LGPL-2.1-only",
                "LGPL-2.1-or-later",
                "LGPL-3.0-only",
                "LGPL-3.0-or-later",
                "LGPLLR",
                "Libpng",
                "libselinux-1.0",
                "libtiff",

                "LiLiQ-P-1.1",
                "LiLiQ-R-1.1",
                "LiLiQ-Rplus-1.1",
                "LPL-1.02",
                "LPPL-1.0",
                "LPPL-1.1",
                "LPPL-1.2",

                "LPPL-1.3a",
                "LPPL-1.3c",
                "MakeIndex",
                "MirOS",
                "MIT-0",

              ]

            }
            getOptionLabel={(option) => option}
            style={{ 
                borderRadius: "10px",
                backgroundColor: theme.palette.background.paper,
                padding: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "200px",
            }}
            renderInput={(params) => <TextField {...params} label="License" variant="outlined" />}
            value = {license}
            onChange = {(e, value) => {
              setLicense(value);
            }}
          />
          
          </FormControl>
            </Collapse>
             
                <IconButton color="primary"  
                sx = {{
                  height: "fit-content",

                }}
                onClick={() => setModalVisibleLang(!openModalLang)}>
                  <Settings />
                </IconButton>


            </Box>
           </Box>

          <Collapse
            style={{ marginTop: 3 }}
            in={!loading[0] && 
              answerTitle.length > 0 &&
              answerDesc.length > 0
            }
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
                      sx =  {
                        {
                          
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }
                      }
                      onClick={() => {
                        setAskInput(answerTitle);
                        setAskDescInput(answerDesc);
                        
                      }}
                    >
                      {answerTitle[0].toUpperCase() +
                        answerTitle.slice(1).toLowerCase()}
                      <IconButton color="primary">
                        {" "}
                        <Edit />
                      </IconButton>{" "}
                    </Typography> <Typography
                      gutterBottom
                      variant="subtitle1"
                      sx =  {
                        {
                          
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }
                      }
                      onClick={() => {
                        setAskInput(answerTitle);
                        setAskDescInput(answerDesc);
                      }}
                    >
                      {answerDesc[0].toUpperCase() +
                        answerDesc.slice(1).toLowerCase()}
                        
                    </Typography>
                  </>
                ) : (
                  <></>
                )}
                <ButtonGroup 
                sx =  {
                {
                    // show in the end
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",


                }
                }
                 aria-label="outlined primary button group">
                  <Button onClick={ () => {setViewMarkdown(!viewMarkdown)}} variant={viewMarkdown ? "contained" : "outlined"}
                  >Github</Button>
                  <Button onClick={ () => {setViewMarkdown(!viewMarkdown)}} variant={!viewMarkdown ? "contained" : "outlined"}>Raw</Button>
                </ButtonGroup>
              <Divider/>
                {result ? (
                  <>
                  {!viewMarkdown ? (
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
                      </Tooltip>):(
                      <ReactMarkdown>
                        {result }
                      </ReactMarkdown>)}
                  </>
                ) : (
                <></>

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
             
              </CardActions>
            </Card>
        
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
 
    </ThemeProvider>
  );

  
  
}
