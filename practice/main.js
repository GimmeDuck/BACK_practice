var mysql = require("mysql"); // mysql 모듈을 불러옵니다.

// 커넥션을 정의합니다.
// RDS Console 에서 본인이 설정한 값을 입력해주세요.
var connection = mysql.createConnection({
  host: "gimmeduck.cpo9bzxic1on.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Lydia41801!A",
  database: "gimmeduck_db"
});

// RDS에 접속합니다.
connection.connect(function(err) {
  if (err) {
    throw err; // 접속에 실패하면 에러를 throw 합니다.
  } else {
    // 접속시 쿼리를 보냅니다.
    connection.query("SELECT * FROM fandom_table", function(err, rows, fields) {
      console.log(rows); // 결과를 출력합니다!
    });
  }
});