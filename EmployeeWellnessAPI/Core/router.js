exports.run = function route(app) {
    var employee = require('../routes/employee');        
    
    app.get('/api/employees', employee.get);
    app.get('/api/employee/:id', employee.find);
    app.post('/api/employee', employee.ins);
    app.put('/api/employee/:id', employee.upd);
    app.delete('/api/employee/delete/:id', employee.delete);
        
    
};
