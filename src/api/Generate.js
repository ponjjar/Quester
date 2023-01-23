import Translator from "./Translator";
const DEFAULT_PARAMS = {
  model: "text-davinci-003",
  temperature: 0.1,
  max_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

function generatePrompt(ask, userLang) {
  const Ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase();
  return `${Translator("Ask", userLang)}:
${ask}
`;
}
export default async function onSubmit(askInput, userLang, temperature) {
  if (temperature != 0.1) {
    DEFAULT_PARAMS.temperature = temperature;
  }
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.REACT_APP_API_KEY),
    },
    body: JSON.stringify({
      ...DEFAULT_PARAMS,
      prompt: generatePrompt(askInput,userLang),
    }),
  };
  const response = await fetch(
    "https://api.openai.com/v1/completions",
    requestOptions
  );

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
  //remove the first line if has a line break
  for (let i = 0; i < 3; i++) {
    if (data.choices[0].text.split("\n")[0] === "") {
      data.choices[0].text = data.choices[0].text.slice(1);
    }
  }
  return data.choices[0].text;
}
