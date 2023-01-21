export default function Translator(value, userLang) {
  if (value === "lang") {
    return userLang;
  }
  else if (value == "availableLangs") {
    const availableLangs = [
      { value: "en", label: "English" },
      { value: "pt", label: "Português" },
      { value: "es", label: "Español" },
      { value: "fr", label: "Français" },
      { value: "de", label: "Deutsch" },
      { value: "it", label: "Italiano" },
      { value: "ru", label: "Русский" },
      { value: "ja", label: "日本語" },
      { value: "zh", label: "中文" },
    ];
    return availableLangs;
  }
  else if (userLang.toLowerCase().includes("pt")) {
    const portuguese = {
      labelAsk: "Qual é a sua pergunta?",
      placeHolderAsk: "Por que o céu é azul?",
      Ask: "Dê a resposta para esta pergunta: ",
      Owl: "Uilando e assobiando meu conhecimento ao longo do dia, eu sou a Sabichona, a Coruja Questionadora. Digite uma pergunta para começar!",
      Title: "Bem vindo ao Quester",
      Send: "Enviar",
      Wait: "Aguarde",
      Credits: "Feito por Caique Ponjjar",
      Error: "Algo deu errado, tente novamente mais tarde",
      ChangeLang: "Escolha seu idioma",
    };
    return portuguese[value];
  } else if (userLang.toLowerCase().includes("es")) {
    const spanish = {
      labelAsk: "¿Cuál es tu pregunta?",
      placeHolderAsk: "¿Por qué el cielo es azul?",
      Ask: "Dame la respuesta sobre esta pregunta: ",
      Owl: "Uilando y asustando mi conocimiento a lo largo del día, soy Quester, el búho preguntón. ¡Escribe una pregunta para comenzar!",
      Title: "¡Dame una pregunta, AHORA!",
      Send: "Enviar",
      Wait: "Espere",
      Credits: "Hecho por Caique Ponjjar",
      Error: "Algo salió mal, inténtalo de nuevo más tarde",
      ChangeLang: "Elige tu idioma",
    };
    return spanish[value];
  } else if (userLang.toLowerCase().includes("fr")) {
    const french = {
      labelAsk: "Quelle est ta question?",
      placeHolderAsk: "Pourquoi le ciel est bleu?",
      Ask: "Donnez la réponse à cette question: ",
      Owl: "Uilando et asustando mon savoir tout au long de la journée, je suis Quester, la chouette qui pose des questions. Tapez une question pour commencer!",
      Title: "Donne-moi une question, MAINTENANT!",
      Send: "Envoyer",
      Wait: "Attendez",
      Credits: "Fait par Caique Ponjjar",
      Error: "Quelque chose s'est mal passé, réessayez plus",
      ChangeLang: "Choisissez votre langue",
       }
    return french[value];
  } else if (userLang.toLowerCase().includes("de")) {
    const german = {
      labelAsk: "Was ist deine Frage?",
      placeHolderAsk: "Warum ist der Himmel blau?",
      Ask: "Geben Sie die Antwort auf diese Frage: ",
      Owl: "Uilando und erschreckend mein Wissen den ganzen Tag lang, bin ich Quester, der Frage stellende Eule. Tippen Sie eine Frage ein, um zu beginnen!",
      Title: "Gib mir eine Frage, JETZT!",
      Send: "Senden",
      Wait: "Warten",
      Credits: "Gemacht von Caique Ponjjar",
      Error: "Etwas ist schief gelaufen, versuchen Sie es später erneut",
      ChangeLang: "Wählen Sie Ihre Sprache",
    };
    return german[value];
  } else if (userLang.toLowerCase().includes("it")) {
    const italian = {
      labelAsk: "Qual è la tua domanda?",
      placeHolderAsk: "Perché il cielo è blu?",
      Ask: "Dai la risposta a questa domanda: ",
      Owl: "Uilando e spaventando la mia conoscenza durante tutto il giorno, sono Quester, la civetta che fa domande. Scrivi una domanda per iniziare!",
      Title: "Dammela una domanda, ORA!",
      Send: "Inviare",
      Wait: "Aspetta",
      Credits: "Fatto da Caique Ponjjar",
      Error: "Qualcosa è andato storto, riprova più tardi",
      ChangeLang: "Scegli la tua lingua",
    };
    return italian[value];
  } else if (userLang.toLowerCase().includes("ru")) {
    const russian = {
      labelAsk: "Какой у тебя вопрос?",
      placeHolderAsk: "Почему небо синее?",
      Ask: "Дайте ответ на этот вопрос: ",
      Owl: "Uilando и пугая мои знания в течение всего дня, я Quester, сова, которая задает вопросы. Напишите вопрос, чтобы начать!",
      Title: "Дай мне вопрос, СЕЙЧАС!",
      Send: "Отправить",
      Wait: "Подождите",
      Credits: "Сделано Caique Ponjjar",
      Error: "Что-то пошло не так, попробуйте позже",
      ChangeLang: "Выберите свой язык",
    };
    return russian[value];
  } else if (userLang.toLowerCase().includes("ja")) {
    const japanese = {
      labelAsk: "あなたの質問は何ですか？",
      placeHolderAsk: "なぜ空は青いのですか？",
      Ask: "この質問についての答えをください： ",
      Owl: "私はQuester、質問をするフクロウです。質問を入力して始めてください！",
      Title: "今すぐ私に質問を与えてください！",
      Send: "送信",
      Wait: "待って",
      Credits: "Caique Ponjjarによって作られた",
      Error: "何かが間違っていたので、後でもう一度やり直してください",
      ChangeLang: "あなたの言語を選択してください",
    };
    return japanese[value];
  } else if (userLang.toLowerCase().includes("zh")) {
    const chinese = {
      labelAsk: "你的问题是什么？",
      placeHolderAsk: "为什么天空是蓝色的？",
      Ask: "给出这个问题的答案： ",
      Owl: "我是Quester，提问的猫头鹰。输入一个问题开始吧！",
      Title: "现在给我一个问题！",
      Send: "发送",
      Wait: "等待",
      Credits: "由Caique Ponjjar制作",
      Error: "出了一些问题，请稍后再试",
      ChangeLang: "选择你的语言",
    };
    return chinese[value];
   }
  else {
    const english = {
      labelAsk: "What's your question?",
      placeHolderAsk: "Why is the sky blue?",
      Ask: "Give the answer about this question: ",
      Owl: "Hootin' and tootin' my knowledge around the clock, I'm Quester the Question-Asking Owl. Type a  question to get started!",
      Title: "Gimme a question, NOW!",
      Credits: "By Caique Ponjjar",
      Send: "Send",
      Wait: "Wait",
      Error: "Some error ocurred, try again later",
      ChangeLang: "Choose your language",
    };
    return english[value];
  }
}
