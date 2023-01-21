export default function Translator(value) {
  const userLang = navigator.language || navigator.userLanguage;
  console.log(userLang)
  if (userLang.toLowerCase() != "pt-br") {
    const english = {
      labelAsk: "What's your question?",
      placeHolderAsk: "Why is the sky blue?",
      Ask: "Give the answer about this question:",
      Owl: "Hootin' and tootin' my knowledge around the clock, I'm Quester the Question-Asking Owl. Type a  question to get started!",
      Title: "Gimme a question, NOW!",
      Credits: "By Caique Ponjjar",
      Send: "Send",
      Wait: "Wait",
      Error: "Some error ocurred, try again later",
    };
    return english[value];
  } else {
    const portuguese = {
        labelAsk: "Qual é a sua pergunta?",
      placeHolderAsk: "Por que o céu é azul?",
      Ask: "Dê a resposta para esta pergunta:",
      Owl: "Uilando e assobiando meu conhecimento ao longo do dia, eu sou a Sabichona, a Coruja Questionadora. Digite uma pergunta para começar!",
      Title: "Bem vindo ao Quester",
      Send: "Enviar",
      Wait: "Aguarde",
      Credits: "Feito por Caique Ponjjar",
      Error: "Algo deu errado, tente novamente mais tarde",
    };
    return portuguese[value];
  }
}
