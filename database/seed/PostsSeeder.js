import { faker } from '@faker-js/faker';
import Post from '../../server/models/Post.js'
import User from '../../server/models/User.js'
import Project from '../../server/models/Project.js';

const seedPosts = async ( count) => {
    Post.truncate();

    let user = await User.first();

    for (let i = 0; i < count; i++) {
        let post = new Post({
            title: faker.lorem.sentence(),
            slug: faker.lorem.slug(),
            body: faker.lorem.paragraphs({
                min : 10,
                max: 25
            }),
            description : faker.lorem.sentence( 10 ),
            main_image : faker.image.urlLoremFlickr({
                category: 'street',
                width: 800,
                height: 500
            }),
            published: true,
            featured: faker.datatype.boolean(),
            is_project: faker.datatype.boolean(),
            user_id : user.get('id')
        })
        let result = await post.save();
    }   

    console.log("Posts seeded successfully, total posts now :", await Post.count())
}


export default seedPosts;