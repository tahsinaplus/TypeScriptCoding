import axios from 'axios';

let api = 'https://official-joke-api.appspot.com/random_joke';

interface RandomJokes{
    type:string;
    setup: string;
    punchline: string;
    id: number;
}

console.log("Fetching record from "+api);

axios.get(api).then(response => {
    let randomjokes = response.data as RandomJokes;
    let type = randomjokes.type;
    let setup = randomjokes.setup;
    let punchline = randomjokes.punchline;
    let id = randomjokes.id;
    printRamdonJokes(type,setup,punchline,id);
});

let printRamdonJokes = (type:string,setup:string,punchline:string,id:number) =>{
    
    if(id>0 && id<=100){
        console.log(`
            Id is between 0 to 100
            Received Id: ${id}
            Type: ${type}
            Setup: ${setup}
            PunchLine: ${punchline}
        `);
    }else if(id>101 && id<=200){
        console.log(`
            Id is between 101 to 200
            Received Id: ${id}
            Type: ${type}
            Setup: ${setup}
            PunchLine: ${punchline}
        `);        
    }else if(id>201 && id<=400){
        console.log(`
            Id is between 201 to 400
            Received Id: ${id}
            Type: ${type}
            Setup: ${setup}
            PunchLine: ${punchline}
        `);
    }else{
        console.log(`
        Id does not match our condition
        Received Id: ${id}
        Type: ${type}
        Setup: ${setup}
        PunchLine: ${punchline}
    `); 
    }
};
