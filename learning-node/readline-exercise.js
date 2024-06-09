const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is the meaning of life",
    "What is your favorite book?",
    "What is your favorite pop diva?",
]

const answerEvents = collectAnswers(questions, (answers) => {
    console.log(answers)
    process.exit()
})

answerEvents.on('answer', answer => console.log(`the answer is ${answer}`))

