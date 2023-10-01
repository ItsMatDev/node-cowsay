const { myInformation } = require ('./information');
const cowsay = require('cowsay');

console.log(cowsay.say(
    {
        text: `I'm a wilder`,
        e : `${myInformation.name}`,
        T : `${myInformation.campus}`,
    }
))