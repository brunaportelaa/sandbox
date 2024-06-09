const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is the meaning of life",
    "What is yout favorite book?",
    "What is yout favorite pop diva?",
]

collectAnswers(questions, (answers) => {
    console.log(answers)
    process.exit()
})

