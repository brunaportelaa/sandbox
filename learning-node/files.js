const fs = require('fs')

//synchronous reading of directory
let files = fs.readdirSync('./')

//asynchronously reading files from diretory
let filesAsync = fs.readdir('./', function(err, data) {
    if (err) {
        throw err
        console.log('could no read file')
    } else { 
        console.log(data)
    }
})
// console.log(files)

//reading files
let main = fs.readFileSync('main.txt', 'utf-8')
console.log(main)

//reading files asynchronously
let mainAsync = fs.readFile('main.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('could no read file')
        throw err
    } else { 
        console.log(data)
    }
})
console.log(main)

//writing into files
let knightsIdeals = `Life before death,
Strength before weakness,
Journey before destination`

fs.writeFileSync('knights-ideals.txt', knightsIdeals)

//appending to files
fs.appendFileSync('./knights-ideals.txt', '\n\nI will seek freedom for those who are in bondage.')

//create directory
fs.mkdir('add-files-here', function(err) {
    if (err) {
        console.log(`error: ${err}`)
    } else {
        console.log('directory created')
    }
})