const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from res.send')
});

app.listen(3000, () => {
    console.log('I\'m listening...')
})

// ~ A N I M A L S  routes ~

const { getElementById, getIndexById, updateElement,
    seedElements, createElement } = require('./utils');

    
const animals = [];
seedElements(animals, 'animals');


app.get('/animals', (req, res, next) => {
    res.send(animals);
  });
  
  app.get('/animals/:id', (req, res, next) => {
    const animal = getElementById(req.params.id, animals);
    res.send(animal);
  });
  
  app.put('/animals/:id', (req, res, next) => {
    const id = getIndexById(req.params.id, animals);
    if(id !== -1){
      const animal = updateElement(req.params.id, req.query, animals);
      res.status(200).send(animal)
    } else {
      res.status(404).send()
    }
  });
  
  app.post('/animals', (req, res, next) => {
   let newAnimal = createElement(animals,req.query);
   if(newAnimal){
     animals.push(newAnimal);
     res.status(201).send(newAnimal);
   } else {
     res.status(400).send()
   }
  });
  
  app.delete('/animals/:id', (req, res, next) => {
    const id = getIndexById(req.params.id, animals);
    if(id !== -1){
      animals.splice (id, 1);
      res.status(204).send()
    } else {
      res.status(404).send()
    }
  });
  