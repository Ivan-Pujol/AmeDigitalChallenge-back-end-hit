//import routes from "../routes/routes";
const routes = require('../Routes/routes.js');
const planetModel = require('../Models/planetModel.js');

// async function getAllPlanets(req, res) {
//   try {
//     const planet = await planetModel.find();

//     if (planet.length < 1) {
//       res.status(404).send({ message: 'Nenhuma transação encontrada' });
//       return;
//     }

//     res.send(transactions);
//   } catch (err) {
//     res
//       .status(500)
//       .send(err.message);
//   }
// }