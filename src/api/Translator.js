export default function Translator(value, userLang) {
  if (value === "lang") {
    return userLang;
  }  if (userLang === null) {
    userLang = "en";
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
  }  else if (value == "availableThemes") {
    const availableLangs = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "night", label: "Night" },
      { value: "sunLight", label: "Sun Light" },
      { value: "DioGo", label: "Diogo (secret)" },
      { value: "JuLiA", label: "Julia (secret)" },
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
      ChangeTheme: "Alterar o tema",
      Random: "Padrões aleatórios",
      Customs: "Personalizações",
      Copy: "Copiar",
      AnotherAsks: "Sugestões de perguntas",
      suggestions: "Dê outras (minimo de 3, maximo 10) principais perguntas separadas em tópicos por '-' sobre ",
      otherFacts: "Outros assuntos"
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
      ChangeTheme: "Cambiar el tema",
      Random: "Patrones aleatorios",
      Customs: "Personalizaciones",
      Copy: "Copiar",
      AnotherAsks: "Sugerencias de preguntas",
      suggestions: "Dame otras (mínimo de 3, máximo 10) principales preguntas separadas por '-' sobre ",
      otherFacts: "Otros temas"

      

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
      ChangeTheme: "Changer le thème",
      Random: "Modèles aléatoires",
      Copy: "Copier",
      Customs: "Personnalisation",
      AnotherAsks: "Suggestions de questions",
      suggestions: "Donnez d'autres (minimum de 3, maximum 10) principales questions séparées par '-' sur "
      ,
      otherFacts: "Autres sujets"
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
      ChangeTheme: "Thema ändern",
      Random: "Zufällige Muster",
      Copy: "Kopieren",
      Customs: "Personalisierungen",
      AnotherAsks: "Vorschläge für Fragen",
      suggestions: "Geben Sie weitere (mindestens 3, maximal 10) Hauptfragen mit '-' getrennt über ",
      otherFacts: "Andere Themen"
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
      ChangeTheme: "Cambia il tema",
      Random: "Modelli casuali",
      Copy: "Copia",
      Customs: "Personalizzazioni",
      AnotherAsks: "Suggerimenti di domande",
      suggestions: "Dai altre (minimo 3, massimo 10) domande principali separate da '-' su ",
      otherFacts: "Altri argomenti"
    };
    return italian[value];
  } else if (userLang.toLowerCase().includes("ru")) {
    const russian = {
      labelAsk: "Какой у тебя вопрос?",
      placeHolderAsk: "Почему небо синее?",
      Ask: "Дайте ответ на этот вопрос: ",
      Owl: " пугая мои знания в течение всего дня, я Quester, сова, которая задает вопросы. Напишите вопрос, чтобы начать!",
      Title: "Дай мне вопрос, СЕЙЧАС!",
      Send: "Отправить",
      Wait: "Подождите",
      Credits: "Сделано Caique Ponjjar",
      Error: "Что-то пошло не так, попробуйте позже",
      ChangeLang: "Выберите свой язык",
      ChangeTheme: "Изменить тему",
      Random: "Случайные образцы",
      Copy: "Копировать",
      AnotherAsks: "Предложения вопросов",
      Customs: "Настройки",
      suggestions: "Дайте другие (минимум 3, максимум 10) основные вопросы, разделенные '-' на ",
      otherFacts: "Другие темы"
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
      ChangeTheme: "テーマを変更する",
      Random: "ランダムなパターン",
      Copy: "コピー",
      AnotherAsks: "質問の提案",
      Customs: "カスタマイズ",
      suggestions: "他の主要な質問（最小3、最大10）を'-'で区切って入力してください ",
      otherFacts: "その他のトピック"
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
      ChangeTheme: "更改主题",
      Random: "随机模式",
      Copy: "复制",
      Customs: "自定义",
      AnotherAsks: "问题建议",
      suggestions: "给出其他（最少3个，最多10个）主要问题，用'-'分隔 ",
      otherFacts: "其他主题"
    };
    return chinese[value];
   }
  else {
    const english = {
      labelAsk: "What's your question?",
      placeHolderAsk: "Why is the sky blue?",
      Ask: "Give the answer about this question: ",
      Owl: "Hootin' and tootin' my knowledge around the clock, I'm Quester the Question-Asking Owl. Type a  question to get started!",
      Title: "Welcome to Quester",
      Credits: "By Caique Ponjjar",
      Send: "Send",
      Wait: "Wait",
      Error: "Some error ocurred, try again later",
      ChangeLang: "Choose your language",
      ChangeTheme: "Change theme",
      Random: "Random patterns",
      Copy: "Copy",
      Customs: "Customizations",
      AnotherAsks: "Questions suggestions",
      suggestions: "Give other (at least 3, at most 10) main questions separated by '-' about ",
      otherFacts: "Other topics"
    };
    return english[value];
  }
}
