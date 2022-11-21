// Create tables on Heroku
module.exports = {
    createUserTable: (client) => {

        const createUserTableQuery = `CREATE TABLE IF NOT EXISTS user_roles (
            id serial primary key,
            email varchar,
            name varchar,
            role varchar,
            createdAt timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
            isActive boolean
          );`;
          
        client.query(createUserTableQuery)
        .then(() => {
            console.log('User roles table now exists');
        }).catch((err) => {
            console.log(err);
        });
    }
}

