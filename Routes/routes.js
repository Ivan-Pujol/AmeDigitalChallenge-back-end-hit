const express = require('express');
const planetsRouter = express.Router();
const controller = require('../Controllers/controller');
const app = express();


// app.get('/getall', transactController.getAllTransactions);
// app.get('/gettransactions/:period', transactController.getYearMonth);
// app.get('/balance/:period', transactController.balanceYearMonth);
// app.get('/filter', transactController.filteredExpenses);
// app.post('/include', transactController.includeTransaction);
// app.put('/edit', transactController.editTransaction);
// app.delete('/delete', transactController.deleteTransaction);
// app.get('/find/:id', transactController.findTransactionById);
// module.exports = app;