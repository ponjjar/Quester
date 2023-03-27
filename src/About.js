
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import themeStyle from './api/Theme';
import ResponsiveAppBar from './Header'
import TurndownService from 'turndown';
import { CssBaseline, LinearProgress, Paper } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { Container } from '@mui/system';

export default function About() {
    const turndownService = new TurndownService({
        br: '\n \n', 
      })
    turndownService.addRule('img', {
        filter: ['img'],
        replacement: function (content, node) {
            return '![' + node.alt + '](' + node.src + ')'
        }
    })
    turndownService.addRule('a', {
        filter: ['a'],
        replacement: function (content, node) {
            return '[' + content + '](' + node.href + ')'
        }
    })
    turndownService.addRule('code', {
        filter: ['code'],
        replacement: function (content, node) {
            return '`' + content + '`'
        }
    })   


  const [themeApplyed, setTheme] = useState("light");
  if (
    sessionStorage.getItem("theme") != null &&
    sessionStorage.getItem("theme") != themeApplyed
  ) {
    setTheme(sessionStorage.getItem("theme"));
  } else if (sessionStorage.getItem("theme") === null) {
    sessionStorage.setItem("theme", themeApplyed);
  }
  const theme = themeStyle(themeApplyed);

    const [userLang, setLang] = useState(
        sessionStorage.getItem("lang") != null
          ? sessionStorage.getItem("lang")
          : navigator.language || navigator.userLanguage
      );
 //show github readme in ReactMarkdown

    
 //create a async const
    const [readme, setReadme] = useState ( 'Loading...' );
    const getReadme = async () => {
        const response = await fetch('https://raw.githubusercontent.com/Caique-P/Quester/main/README.md');
        const data = await response.text();
        // convert from html to markdown

        const markdown = turndownService.turndown(data.replace(/^\s*$(?:\r\n?|\n)/gm        , '<br/>'))

        // set the state
        
        //replace all '[\n'  to '['  in the string 
        
        setReadme(markdown.toString().replace(/[\\"]/g, '')) 
        setReadme(markdown.toString().replace(/[\\"]/g, '')) 
        console.log(markdown.replace(/[\\"]/g, ''))
                

    }
    if (readme === 'Loading...'){getReadme();}

    
    return (
            
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
            <ResponsiveAppBar 
            userLang={userLang}
            theme={theme}
            />
      { readme == 'Loading...'? (
          //  <Skeleton variant="rectangular" width={210} height={118} />
          <LinearProgress position="sticky" sticky></LinearProgress>
        ) : (
          <></>
        )}
        <br />
        <Container fixed>
            <center>
            <Paper>
            <ReactMarkdown>{
readme + '\n ## This page is a mirror of the github readme, you can access the source code on [github page]( https://github.com/Caique-P/Quester ) ' 
            }</ReactMarkdown></Paper>
        </center>
            </Container>
            </ThemeProvider>
    )
}