module.exports = function(app){
app.get('/professores',function(req,res){
  
        async function getProfessores() {             
            try { 
                var dbConnection = require('../config/dbConnection')                
                const pool = await dbConnection();                 
                
                const results = await pool.request().query('SELECT * from PROFESSORES')                 
                res.render('informacao/professores', {profs: results.recordset});                
            } catch (err) {                 
                console.log(err)             
            }       
        }         

        const professores = getProfessores();  
});
}