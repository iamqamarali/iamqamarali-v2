import { faker } from '@faker-js/faker';
import User from '../../server/models/User.js';
import bcrypt from 'bcrypt'

const seedUsers = async ( count) => {

    let user = new User({
        first_name : 'Qamar',
        last_name : 'Ali',
        bio : faker.lorem.paragraph(),
        email : 'iamqamarali1@gmail.com',
        password : bcrypt.hashSync('password', 10),
        avatar : faker.image.avatar(),
    })
    let a = await user.findOrCreate();

    console.log("users Seeded successfully users count : " , await User.count());
}


export default seedUsers;