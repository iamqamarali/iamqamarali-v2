
import connection from '../useDatabase.js'
import BaseModel from '../../server/models/BaseModel.js'
import seedPosts from './PostsSeeder.js'
import seedUsers from './UsersSeeder.js'


BaseModel.setConnection(connection);

async function seedDB(){
    await seedUsers(1);
    await seedPosts(100)
}


seedDB().then(() => { 
    console.log("DB seeded successfully")
    connection.end();
})

