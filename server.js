const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Sample quiz questions
const questions = [
    {
        id: 1,
        question: 'What is the name of the force that pulls objects toward the Earth?',
        options: ['Gravity', 'Magnetism', 'Friction', 'Inertia'],
        correctAnswer: 'Gravity'
    },
    {
        id: 2,
        question: 'What is the speed of light?',
        options: ['300,000 km/s', '150,000 km/s', '120,000 km/s', '250,000 km/s'],
        correctAnswer: '300,000 km/s'
    },
    {
        id: 3,
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie'],
        correctAnswer: 'Albert Einstein'
    }
];

let currentQuestionIndex = 0;

// API endpoint to get the next question
app.get("/", (req,res)=>{
    res.render("app" , {questions : questions})
})
app.get('/api/question', (req, res) => {
    const question = questions[currentQuestionIndex];
    if (question) {
        res.json(question);
    } else {
        res.status(404).json({ message: 'No more questions available.' });
    }
});

// API endpoint to check the answer
app.post('/api/answer', (req, res) => {
    const { answer } = req.body;
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        res.json({ correct: true, message: 'Correct answer!' });
    } else {
        res.json({ correct: false, message: 'Wrong answer. Try again!' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
