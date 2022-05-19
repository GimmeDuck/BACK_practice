var mysql = require("mysql");

// 커넥션 정의
var connection = mysql.createConnection({
  host: "gimmeduck.crc2drhb9ffk.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "Lydia41801!A",
  database: "gimmeduck_db"
});

// RDS 접속
connection.connect(function(err) {
  if (err) {
    throw err; // 접속 실패 시 에러 throw
  } else {
    // 접속 시 쿼리 보내기
    connection.query("SELECT * FROM fandom_table", function(err, rows, fields) {
      console.log(rows); 
    });
  }
});