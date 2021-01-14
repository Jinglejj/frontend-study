var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : '118.89.24.211',
  user     : 'root',
  password : '123456',
  database : 'mk'
});
 
connection.connect();
 
connection.query("SELECT * from user where roles like '%0%' ", function (error, students, fields) {
  if (error) throw error;
  connection.query("SELECT * from `group` ", function (error, groups, fields) {
    let sql='';
    students.forEach(stu=>{
        const group = groups.find(g=>g.id==stu.group_id);
        const {process_score}=stu;
        const {experiment_score,report_score}=group;
        finalScore=experiment_score*0.3+process_score*0.3+report_score*0.4;
        stu.final_score=finalScore;
        sql=`UPDATE user set final_score=${finalScore} where id=${stu.id};`
        connection.query(sql, function (error, results, fields) {
          if (error) throw error;
          console.log('changed ' + results.changedRows + ' rows');
        })
    })
  })
});
