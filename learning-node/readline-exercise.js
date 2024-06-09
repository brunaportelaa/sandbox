const rl = require('readline')

rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const questions = [
    "What is the meaning of life",
    "What is yout favorite book?",
    "What is yout favorite pop diva?"
]

function collectAnswers(questions, done) {
    const answers = []

    const questionAnswered = answer => {
        answer.push(answer.trim())

        if(answers.length < questions.length) {
            rl.question(questions[answer.length], questionAnswered)
        } else {
            return done(answers)
        }
    }
}

collectAnswers(questions, () => {
    console.log(answers)
    process.exit()
})

