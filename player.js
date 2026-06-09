const {sleep} = require('./utils');

const myHero = new Musica('My Hero', 'Foo Fighters');

async function play(){
    try{
        await sleep(2000);
        console.log('Esperou 2s');  
    } catch (error){
    
    }
}

play();

