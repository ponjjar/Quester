//A simple react app that uses the OpenAI API to answer questions by Caique Ponjjar :)
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Configuration, OpenAIApi } from "openai";
import { useState , component} from "react";

import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';

import LinearProgress from '@mui/material/LinearProgress';
import { CircularProgress } from '@mui/material';
import onSubmit from './api/Generate';
const theme = createTheme({
  palette: {
    background: {
      default: "#fcf4e6"
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});    


export default function App() {
    
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [askInput, setAskInput] = useState("");
  const [answerTitle, setAnswerTitle] = useState("");

  async function SubmitEvent(event) {

    event.preventDefault();
    setLoading(true);
    try {
    setResult(await onSubmit(askInput));
    }catch{
      
    setResult("Algum erro foi encontrado, tente novamente.");
    }
    setLoading(false);
  
    setAnswerTitle(askInput)
    setAskInput("");
  }
  return (
  <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

      <center>
        {loading? 
        <LinearProgress></LinearProgress> : <></>}<br/>
        <Container fixed>
      <Typography variant="h4" gutterBottom>
        Gimme a question, NOW!
      </Typography>
      <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', maxWidth:"75%" }}
        >
      
        
      <TextField
          id="outlined-multiline-flexible"
          label="What's you ask?"
          multiline
          maxRows={10}
          sx={{ ml: 1, flex: 1 }}
          size="small"
          value={askInput}
          
          onChange={(e) => setAskInput(e.target.value)}
          placeholder="Why is the sky blue?"
        />
        
        {loading ? ( <Button variant="contained"  
          endIcon={<CircularProgress 
            size={25}/>}> Wait
       </Button>)  : (
          <Button variant="contained"           
          onClick={SubmitEvent}
          
           onSubmit={onSubmit}
           endIcon={<SendIcon />}>
            
          Send
        </Button>
        )}
        </Paper> 
        
        <br/>
        <Collapse in={!loading} enter={300} timeout={300} collapsedSize={0}>
        <Card sx={{ maxWidth: "75%" }}>
        
      <CardContent>
        <Typography gutterBottom variant='h6' component="div">
          {answerTitle? answerTitle[0].toUpperCase() + answerTitle.slice(1).toLowerCase() : <></>}
        </Typography>
          {result ? 
        <TextField align="justify" multiline fullWidth justify value={result}
        blocked/>
       :<div><p align="left">
       <img style={{borderRadius: "50%", float: "Left", padding: "0 20px 0 0"}} src={process.env.PUBLIC_URL + '/OwlMaskotDallE.png'}  width={"105em"}  align="middle"/>{"Hootin' and tootin' my knowledge around the clock, I'm Quester the Question-Asking Owl. Type a  question to get started!"}<br/></p>  </div>
        }
       
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={event =>  window.location.href='https://github.com/Caique-P'}>By Caique Ponjjar</Button>
      </CardActions>
    </Card></Collapse>
        

        </Container>
        </center>

</ThemeProvider>
  );}