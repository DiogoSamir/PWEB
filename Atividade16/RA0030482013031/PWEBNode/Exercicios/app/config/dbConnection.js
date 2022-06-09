var sql = require("mssql/msnodesqlv8");
module.exports = function(){
const sqlConfig = { 
    user: 'BD2013031',             
    password: 'Palmeiras1',             
    database: 'BD', 
    server:  '192.168.1.6',//Caso  o  nome  tenha  uma  instância,  colocar  duas barras, ex: ‘DESKTOP\\SQLSERVER       
  }  
  return sql.connect(sqlConfig)
}