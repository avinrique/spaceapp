const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
const { GoogleGenerativeAI } = require("@google/generative-ai");



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


app.post("/submit-answers", async (req, res) => {
    let userAnswers = req.body.answers;

    if (!Array.isArray(userAnswers)) {
        userAnswers = Object.values(userAnswers); // Convert object to array if needed
    }

    userAnswers.shift(); // Remove the first empty element (if present)

    let correctCount = 0;
    let incorrectCount = 0;
    let feedback = [];

    // Process user answers
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
            feedback.push({
                question: question.question,
                userAnswer: userAnswers[index],
                correctAnswer: question.correctAnswer,
                explanation: question.explanation
            });
        }
    });

    const genAI = new GoogleGenerativeAI("AIzaSyAlSRMwkkHtlsNkZJHrdjXRvD4zJdOsLKI");


    let insights = "";
    if (feedback.length > 0) {
        const prompt = `
            A user took a quiz and got the following answers wrong: 
            ${feedback.map(f => `Question: ${f.question}\nUser's Answer: ${f.userAnswer}\nCorrect Answer: ${f.correctAnswer}\n`).join("\n")}
            Provide explanations on where the user went wrong, clarify misunderstandings, and offer tips on how to better understand the topics. tell him in hsort where he went wrong . make it intresting tell him intrestingly
        `;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        insights = result.response.text();
    }

    // Render the report.ejs template with the result counts and AI feedback
    res.render('report', {
        correct: correctCount,
        incorrect: incorrectCount,
        total: questions.length,
        feedback: feedback,
        insights: insights // Pass AI-generated feedback
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
