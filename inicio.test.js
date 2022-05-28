//const init = require('./index');
const axios = require('axios');
const res = require('express/lib/response');
//const rota =require('./Controllers/controller');
//const controller = require('./Controllers/controller')
const urlBase = `127.0.0.1:3000/planets`;
const app = require('./Routes/routes');
const request = require('supertest');
const { response } = require('./Routes/routes');


describe ('Rote tests', ()=>{
    //root rote
    it('Must receive a wellcome message', async ()=>{    
        const result = await request(app).get('');
        expect(result.body).toEqual({"message": "You are now in the API root from AmeChallengeBackEnd"});
    });
    //root rote
    it('Must receive response status 200', async()=>{
        const response = await request(app).get('');
        expect(response.statusCode).toEqual(200);
    });
    //Must receive all planets from DB
    it('Must receive response status 200', async()=>{        
         const response = await request(app).get('/getall'); 
         //console.log(response.statusCode);    
        expect(response.statusCode).toEqual(200);        
    });

    // Must receive all planets from DB
    it('Must receive response status 200', async()=>{
         const response = await request(app).get('/getall'); 
         //console.log(response.text);    
         expect(response.text).not.toBeNull();
    });
    
    //getting a planet by ID
    it('Must receive a planet as response', async()=>{
        const id = 1;
        const response = await request(app).get(`/id/${id}`);             
        expect(response.text).toEqual("{\"planet\":[{\"planet_name\":\"Tatooine\",\"planet_climate\":\"arid\",\"planet_terrain\":\"desert\",\"planet_id\":1}],\"films\":[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/4/\",\"https://swapi.dev/api/films/5/\",\"https://swapi.dev/api/films/6/\"]}");
   });

   //getting a planet by Name
   it('Must receive a planet as response', async()=>{
    const name = "Tatooine";
    const response = await request(app).get(`/name/${name}`);             
    expect(response.text).toEqual("{\"planet\":[{\"planet_name\":\"Tatooine\",\"planet_climate\":\"arid\",\"planet_terrain\":\"desert\",\"planet_id\":1}],\"films\":[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/4/\",\"https://swapi.dev/api/films/5/\",\"https://swapi.dev/api/films/6/\"]}");
    });

    //Getting a planet by climate
    it('Must receive a planet as response', async()=>{
        const climate = "arid";
        const response = await request(app).get(`/climate/${climate}`);             
        expect(response.text).toEqual("{\"planet\":[{\"planet_name\":\"Tatooine\",\"planet_climate\":\"arid\",\"planet_terrain\":\"desert\",\"planet_id\":1}],\"films\":[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/4/\",\"https://swapi.dev/api/films/5/\",\"https://swapi.dev/api/films/6/\"]}");
    });

    //Getting a planet by Terrain
    it('Must receive a planet as response', async()=>{
        const terrain = "desert";
        const response = await request(app).get(`/terrain/${terrain}`);  
        console.log(response.text);           
        expect(response.text).toEqual("{\"planet\":[{\"planet_name\":\"Tatooine\",\"planet_climate\":\"arid\",\"planet_terrain\":\"desert\",\"planet_id\":1}],\"films\":[\"https://swapi.dev/api/films/1/\",\"https://swapi.dev/api/films/3/\",\"https://swapi.dev/api/films/4/\",\"https://swapi.dev/api/films/5/\",\"https://swapi.dev/api/films/6/\"]}");
    });

    //Including a planet
    it('Must include a planet', async()=>{
        const name = "Test";
        const climate = "frost";
        const terrain = "PermaFrost"
        const response = await request(app).post(`/include`).send({planet_name: name, planet_climate: climate, planet_terrain: terrain});  
        console.log(response.text);           
        expect(response.statusCode).toEqual(200);
    });

    //Removing a planet by ID
    it('Must delete a planet', async()=>{
        const planet_id = 25;
        const response = await request(app).delete(`/delete/${planet_id}`);
        console.log(response.text);           
        expect(response.statusCode).toEqual(200);
    });
});