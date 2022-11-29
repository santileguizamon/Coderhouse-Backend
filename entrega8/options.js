const options = {
   mySql:{client: 'mysql',
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'proyectocoder'
        },
        pool: { min: 0, max: 7 }
      },
   sqlite3: {
    client: 'sqlite3',
    connection: {filename: `${__dirname}'db/mydb.sqlite`},
    useNullAsDefault: true
      }
}

export default{options}