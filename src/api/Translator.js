export default function Translator(value, userLang) {
  if ( userLang === undefined) {
    userLang = "en";
  }
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
      tabs: ["Pergunte-me algo", "Fatos aleatórios", "Criar readme", "Saiba mais"],

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
      otherFacts: "Outros assuntos",

      //Readme
      readmeAskTitle : "Qual é o titulo do seu projeto?",
      readmeAskDesc : "Qual é a descrição do seu projeto?",
      ReadmeCredits: "Feito por  ",
      Required: "Prencha este campo",
      readmeAsk : "Crie um arquivo README.md para o projeto com uma descrição e titulo melhorada. O readme deve ser intuitivo, com uma longa descrição separada por tópicos e com um titulo customizado, com labels das linguagens usadas no projeto. utilize os dados abaixos: ",
      profile :  "Perfil",
      openSettings :  "Abrir configurações",
      logout :  "Sair",
      username :  "Nome de usuário",
      getOpenAIKey: "Obter chave da OpenAI",
      apiKeyError: "Antes de começar, você precisa obter uma chave da OpenAI. Clique no botão abaixo para obter uma chave gratuita.",
      
    };
    return portuguese[value];
  } else if (userLang.toLowerCase().includes("es")) {
    const spanish = {
      labelAsk: "¿Cuál es tu pregunta?",
      tabs: ["Pregúntame algo", "Hechos aleatorios", "Crear readme para el proyecto", "Saber más"],
      placeHolderAsk: "¿Por qué el cielo es azul?",
      Ask: "Dame la respuesta sobre esta pregunta: ",
      Owl: "Uilando y asustando mi conocimiento a lo largo del día, soy Quester, el búho preguntón. ¡Escribe una pregunta para comenzar!",
      Title:  "Bienvenido a Quester",
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
      otherFacts: "Otros temas",
      readmeAskTitle: "¿Cuál es el nombre de tu proyecto?",
      Required: "Rellena este campo",
      readmeAskDesc: "¿Cuál es la descripción de tu proyecto?",
      ReadmeCredits: "Hecho por ",
      readmeAsk: "Crea un archivo README.md para el proyecto con la respectiva descripción y título. El readme debe ser intuitivo, con una buena descripción separada por temas y con un título personalizado, con etiquetas de los lenguajes usados en el proyecto."
      ,profile :  "Perfil",
      openSettings :  "Abrir configuraciones",
      logout :  "Cerrar sesión",
      username :  "Nombre de usuario",
      getOpenAIKey: "Obtener clave de OpenAI",
      apiKeyError: "Antes de comenzar, necesitas obtener una clave de OpenAI. Haga clic en el botón a continuación para obtener una clave gratuita.",
      

    };
    return spanish[value];
  } else if (userLang.toLowerCase().includes("fr")) {
    const french = {
      labelAsk: "Quelle est ta question?",
      tabs: ["Demandez-moi quelque chose", "Faits aléatoires", "Créer un readme pour le projet", "En savoir plus"],
      placeHolderAsk: "Pourquoi le ciel est bleu?",
      Ask: "Donnez la réponse à cette question: ",
      Owl: "Uilando et asustando mon savoir tout au long de la journée, je suis Quester, la chouette qui pose des questions. Tapez une question pour commencer!",
      Title:  "Bienvenue à Quester",
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
      Required:  "Remplissez ce champ",

      otherFacts: "Autres sujets"
      ,readmeAskTitle : "Quel est le nom de votre projet?",  
      readmeAskDesc : "Quelle est la description de votre projet?",
      ReadmeCredits: "Fait par ",
      readmeAsk : "Créez un fichier README.md pour le projet avec la description et le titre respectifs. Le readme doit être intuitif, avec une bonne description séparée par des sujets et un titre personnalisé, avec des étiquettes des langages utilisés dans le projet."
      ,profile :  "Profil",
      openSettings :  "Paramètres",
      logout :  "Se déconnecter",
      username :  "Nom d'utilisateur",
      getOpenAIKey: "Obtenir une clé OpenAI",
      apiKeyError: "Avant de commencer, vous devez obtenir une clé OpenAI. Cliquez sur le bouton ci-dessous pour obtenir une clé gratuite.",
    }

    return french[value];
  } else if (userLang.toLowerCase().includes("de")) {
    const german = {
      labelAsk: "Was ist deine Frage?",
      tabs: ["Frag mich etwas", "Zufällige Fakten", "Erstellen Sie eine Readme für das Projekt", "Mehr erfahren"],
      placeHolderAsk: "Warum ist der Himmel blau?",
      Ask: "Geben Sie die Antwort auf diese Frage: ",
      Owl: "Uilando und erschreckend mein Wissen den ganzen Tag lang, bin ich Quester, der Frage stellende Eule. Tippen Sie eine Frage ein, um zu beginnen!",
      Title:  "Willkommen bei Quester",
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
      Required: "Füllen Sie dieses Feld aus",
      otherFacts: "Andere Themen"
      ,readmeAskTitle : "Wie lautet der Name deines Projekts?", 
      readmeAskDesc : "Was ist die Beschreibung deines Projekts?",
      ReadmeCredits: "Gemacht von ",
      readmeAsk : "Erstellen Sie eine Datei README.md für das Projekt mit der jeweiligen Beschreibung und dem Titel. Die Readme sollte intuitiv sein, mit einer guten Beschreibung, die in Themen unterteilt ist, und mit einem benutzerdefinierten Titel, mit Labels der in dem Projekt verwendeten Sprachen."
      ,profile :  "Profil",
      openSettings :  "Einstellungen öffnen",
      logout :  "Ausloggen",
      username : "Benutzername",
      getOpenAIKey: "OpenAI-Schlüssel erhalten",
      apiKeyError: "Bevor Sie beginnen, müssen Sie einen OpenAI-Schlüssel erhalten. Klicken Sie auf die Schaltfläche unten, um einen kostenlosen Schlüssel zu erhalten.",
    };
    return german[value];
  } else if (userLang.toLowerCase().includes("it")) {
    const italian = {
      labelAsk: "Qual è la tua domanda?",
      tabs: ["Chiedimi qualcosa", "Fatti casuali", "Crea readme per il progetto", "Saperne di più"],

      placeHolderAsk: "Perché il cielo è blu?",
      Ask: "Dai la risposta a questa domanda: ",
      Owl: "Uilando e spaventando la mia conoscenza durante tutto il giorno, sono Quester, la civetta che fa domande. Scrivi una domanda per iniziare!",
      Title:    "Benvenuto a Quester",
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
      Required: "Compila questo campo",
      otherFacts: "Altri argomenti"
      ,readmeAskTitle : "Qual è il nome del tuo progetto?",
      readmeAskDesc : "Qual è la descrizione del tuo progetto?",
      ReadmeCredits: "Fatto da ",
      readmeAsk : "Crea un file README.md per il progetto con la descrizione e il titolo rispettivi. Il readme deve essere intuitivo, con una buona descrizione suddivisa per argomenti e un titolo personalizzato, con etichette dei linguaggi utilizzati nel progetto."
      , profile : "Profilo",
      openSettings :  "Apri impostazioni",
      logout :  "Disconnettersi",
      username :  "Nome utente",
      getOpenAIKey: "Ottieni una chiave OpenAI",
      apiKeyError: "Prima di iniziare, devi ottenere una chiave OpenAI. Fai clic sul pulsante qui sotto per ottenere una chiave gratuita.",
    };  
    return italian[value];
  } else if (userLang.toLowerCase().includes("ru")) {
    const russian = {
      labelAsk: "Какой у тебя вопрос?",
      tabs: ["Спроси меня что-нибудь", "Случайные факты", "Создать readme для проекта", "Узнать больше"],
      placeHolderAsk: "Почему небо синее?",
      Ask: "Дайте ответ на этот вопрос: ",
      Owl: " пугая мои знания в течение всего дня, я Quester, сова, которая задает вопросы. Напишите вопрос, чтобы начать!",
      Title:  "Добро пожаловать в Quester",
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
      Required: "Заполните это поле",
      otherFacts: "Другие темы"
      ,readmeAskTitle : "Как называется ваш проект?",
      readmeAskDesc : "Каково описание вашего проекта?",
      ReadmeCredits: "Сделано ",
      readmeAsk : "Создайте файл README.md для проекта с соответствующим описанием и названием. Readme должен быть интуитивным, с хорошим описанием, разделенным на темы, и с настраиваемым названием, с метками языков, используемых в проекте."
      ,profile : "Профиль",
      openSettings : "Открыть настройки",
      logout : "Выйти",
      username : "Имя пользователя",
      getOpenAIKey: "Получить ключ OpenAI",
      apiKeyError: "Прежде чем начать, вы должны получить ключ OpenAI. Нажмите на кнопку ниже, чтобы получить бесплатный ключ.",
    };
    return russian[value];
  } else if (userLang.toLowerCase().includes("ja")) {
    const japanese = {
      labelAsk: "あなたの質問は何ですか？",
      tabs: ["何かを尋ねる", "ランダムな事実", "プロジェクトのreadmeを作成する", "もっと詳しく"],
      placeHolderAsk: "なぜ空は青いのですか？",
      Ask: "この質問についての答えをください： ",
      Owl: "私はQuester、質問をするフクロウです。質問を入力して始めてください！",
      Title:  "Questerへようこそ",
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
      Required: "このフィールドを入力してください",
      otherFacts: "その他のトピック"
      ,readmeAskTitle : "あなたのプロジェクトの名前は何ですか？",
      readmeAskDesc : "あなたのプロジェクトの説明は何ですか？",
      ReadmeCredits: "によって作られた ",
      readmeAsk : "プロジェクトのREADME.mdファイルを作成し、それに対応する説明とタイトルを入力します。 Readmeは直感的で、良い説明でトピックごとに分割され、カスタマイズ可能なタイトルで、プロジェクトで使用される言語のタグを持っている必要があります。"
      , profile : "プロフィール",
      openSettings : "設定を開く",
      logout : "ログアウト",
      username : "ユーザー名",
      getOpenAIKey: "OpenAIキーを取得する",
      apiKeyError: "始める前に、OpenAIキーを取得する必要があります。下のボタンをクリックして無料のキーを取得してください。",
    };
    return japanese[value];
  } else if (userLang.toLowerCase().includes("zh")) {
    const chinese = {
      labelAsk: "你的问题是什么？",
      tabs: ["问我点什么", "随机事实", "创建项目的readme", "了解更多"],
      placeHolderAsk: "为什么天空是蓝色的？",
      Ask: "给出这个问题的答案： ",
      Owl: "我是Quester，提问的猫头鹰。输入一个问题开始吧！",
      Title:  "欢迎来到Quester",
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
      Required: "请填写此字段",
      otherFacts: "其他主题"
      ,readmeAskTitle : "你的项目叫什么名字？",
      readmeAskDesc : "你的项目描述是什么？",
      ReadmeCredits: "由 ",
      readmeAsk : "创建一个README.md文件，用相应的描述和标题。 Readme应该是直观的，有一个良好的描述，分成主题，并且有一个可自定义的标题，带有项目使用的语言标签。"
      , profile: "个人资料",
      openSettings :  "打开设置",
      logout :  "登出",
      username :  "用户名",
      getOpenAIKey: "获取OpenAI密钥",
      apiKeyError: "在开始之前，您必须获取OpenAI密钥。单击下面的按钮以获取免费密钥。",
    };
    return chinese[value];
   }
  else {
    const english = {
      labelAsk: "What's your question?",
      tabs: ["Ask me something", "Random facts", "Create a project's readme", "Learn more"],
      placeHolderAsk: "Why is the sky blue?",
      Ask: "Give the answer about this question: ",
      Owl: "Hootin' and tootin' my knowledge around the clock, I'm Quester the Question-Asking Owl. Type a  question to get started!",
      Title:  "Welcome to Quester",
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
      Required: "This field is required",
      otherFacts: "Other topics"
      ,readmeAskTitle : "What's the name of your project?",
      
      readmeAskDesc : "What's the description of your project?",
      ReadmeCredits: "Made by ",
      readmeAsk : "Create a README.md file for the project with the corresponding description and title. Readme should be intuitive, with a good description, split into topics, and with a customizable title, with language tags used in the project.",
      profile : "Profile",
      openSettings : "Open settings",
      logout : "Logout",
      username : "Username",
      getOpenAIKey: "Get OpenAI key",
      apiKeyError: "Before starting, you must get an OpenAI key. Click the button below to get a free key.",
    };
    return english[value];
  }
} 