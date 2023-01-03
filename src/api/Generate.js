const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.1,
  "max_tokens": 2048,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}

function generatePrompt(ask) {
  const Ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase();
  return `Give the answer about this question.
Ask: ${ask}
Answer:`;

}
export default async function onSubmit(askInput) {


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
    },
    body: JSON.stringify({...DEFAULT_PARAMS , 
      'prompt': generatePrompt(askInput)
    })
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  
  const data = await response.json();

/*  const completion = await openai.createCompletion("text-davinci-003", {
    prompt: generatePrompt(answerInput),
    temperature: 0.6,
  });
  //const body = await openai.text();
  //console.log(body);
  res.status(200).json({ result: completion.data.choices[0].text });
  const data = await res.json();
  console.log(data)*/
  console.log(data.choices[0].text)
  return(data.choices[0].text)
}