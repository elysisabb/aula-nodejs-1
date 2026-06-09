const {sleep} = require('./utils');
const {Musica} = require('./musica');
const {Parte} = require('./parte');

const myHero = new Musica('My Hero', 'Foo Fighters');

myHero.addParte(
    new Parte('Too alarmin\ now to talk about \n Take your pictures down and shake it out Truth or consequence, say it aloud Use that evidence, race it around')
    )

async function play(){
    try{
        console.log(myHero.nome + ' por ' + myHero.artista);
        await sleep(34000);
        //
        console.log(myHero.parte
    } catch (error){
    
    }
}

play();

