document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const restartQuizButton = document.getElementById('restart-quiz');

    const symbols = {
        'gye_nyame': { name: 'Gye Nyame', file: 'gye-nyame-medium.png', description: '"Except for God" - A symbol of the supremacy of God.' },
        'sankofa': { name: 'Sankofa', file: 'sankofa-medium.png', description: '"Go back and get it" - A symbol of the importance of learning from the past.' },
        'adinkrahene': { name: 'Adinkrahene', file: 'adinkrahene-medium.png', description: '"Chief of the Adinkra symbols" - A symbol of greatness, charisma, and leadership.' },
        'dwennimmen': { name: 'Dwennimmen', file: 'dwennimmen-medium.png', description: '"Ram\'s horns" - A symbol of strength yet humility, courage, and wisdom.' },
        'funtunfunefu': { name: 'Funtunfunefu Denkyemfunefu', file: 'funtumfunefu-denkyemfunefu-medium.png', description: '"Siamese crocodiles" - A symbol of democracy and unity in diversity.' },
        'nea_onnim': { name: 'Nea Onnim', file: 'nea-onnim-medium.png', description: '"He who does not know can know from learning" - A symbol of knowledge and life-long education.' }
    };

    const questions = [
        {
            question: "What guides you most in life?",
            answers: [
                { text: "My faith and spirituality.", symbol: "gye_nyame" },
                { text: "The lessons from my experiences.", symbol: "sankofa" },
                { text: "My ambition and desire to lead.", symbol: "adinkrahene" },
                { text: "My quest for knowledge.", symbol: "nea_onnim" }
            ]
        },
        {
            question: "When facing a challenge, you are most likely to:",
            answers: [
                { text: "Trust in a higher power to see you through.", symbol: "gye_nyame" },
                { text: "Look back at past mistakes to find a solution.", symbol: "sankofa" },
                { text: "Take charge and command the situation.", symbol: "adinkrahene" },
                { text: "Work with others to find a common solution.", symbol: "funtunfunefu" }
            ]
        },
        {
            question: "You value...",
            answers: [
                { text: "The sacred and divine.", symbol: "gye_nyame" },
                { text: "Wisdom from history and tradition.", symbol: "sankofa" },
                { text: "Humility mixed with strength.", symbol: "dwennimmen" },
                { text: "Unity and working together.", symbol: "funtunfunefu" }
            ]
        },
        {
            question: "You believe that...",
            answers: [
                { text: "There is always something new to learn.", symbol: "nea_onnim" },
                { text: "Strength is found in humility.", symbol: "dwennimmen" },
                { text: "The past holds the key to the future.", symbol: "sankofa" },
                { text: "Leadership is a responsibility.", symbol: "adinkrahene" }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function startQuiz() {
        currentQuestionIndex = 0;
        userAnswers = [];
        quizContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        showQuestion();
    }

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        answersContainer.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('bg-accent', 'text-primary', 'px-4', 'py-2', 'rounded-full', 'hover:bg-primary', 'hover:text-secondary', 'transition-colors');
            button.onclick = () => selectAnswer(answer.symbol);
            answersContainer.appendChild(button);
        });
    }

    function selectAnswer(symbol) {
        userAnswers.push(symbol);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const symbolCounts = userAnswers.reduce((acc, symbol) => {
            acc[symbol] = (acc[symbol] || 0) + 1;
            return acc;
        }, {});

        const resultSymbolKey = Object.keys(symbolCounts).reduce((a, b) => symbolCounts[a] > symbolCounts[b] ? a : b);
        const resultSymbol = symbols[resultSymbolKey];

        document.getElementById('result-img').src = `assets/symbols/${resultSymbol.file}`;
        document.getElementById('result-title').textContent = resultSymbol.name;
        document.getElementById('result-description').textContent = resultSymbol.description;

        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
    }

    restartQuizButton.addEventListener('click', startQuiz);

    startQuiz();
}); 