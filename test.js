const fs = require ('fs')
const userName = 'David'

fs.writeFile('user-data.txt', 'Name: ' + userName)