import options from "./options";
import knex from "knex";

const connectionMySql = knex(options.mysql);
const connectionSqlite3 = knex(options.sqlite3);


const exist = connectionMySql.schema.hasTable('productos').then((exist)=>{
        if(!exist){
        connection.schema.createTable('productos',(table)=>{
        table.increments('id').primary;
        table.string('nombre').notNullable();
        table.float('precio');
        table.integer('stock');
       }) .then(()=>console.log('tabla creada con exito'));
    }
});

const existMsg = connectionSqlite3.schema.hasTable('mensajes').then((existMsg)=>{
    if(!exist){
        connection.schema.createTable('mensajes',(table)=>{
        table.increments('id').primary;
        table.string('email',40).notNullable();
        table.string('mensaje',100).notNullable();
        table.string('date',100).notNullable();
       }).then(()=>console.log('tabla creada con exito'))
    }
})

 export default {exist,existMsg}