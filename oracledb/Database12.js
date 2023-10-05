const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:1521/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
        Sql = `insert into ${Parameters[0]} values('${Details.form123}','${Details.to123}','${Details.bussno123}','${Details.time123}')`;
        break;
    case "Update":
        Sql = `update ${Parameters[0]} set from123 = '${Parameters[3].form123}', to123 = '${Parameters[3].to123}',  bussno123 = '${Parameters[3].bussno123}',   time123 = '${Parameters[3].time123}'  where to123 = '${Details}'`;
        break;
    case "Delete":
        Sql = `delete from ${Parameters[0]} where to123 = '${Details}'`;
        break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where to123 = '${Details}'`;
        }
      break; 
    default:
      console.error("Invalid Parameters");
      break;
    }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;