import BaseModel from './BaseModel.js'

export default class Post extends BaseModel{
    table = 'posts';

    properties = [
        'id',
        'title',
        'description',
        'body',
        'main_image',
        'slug',
        'user_id',
        
        'featured',
        'published',

        'images', // id, name, url
        'seo_data',

        'created_at',
        'updated_at ',

        'is_project',
        'fullscreen_hero',
        
        'tags',
    ];

    hidden = [

    ];
    

    static getTable(){
        return 'posts';
    }

    /** */
    constructor(data = {}){
        super(data);
    }

    async user(){
        let result = await this.getConnection().execute(`SELECT * FROM users WHERE id = ? LIMIT 1 `, [this.get('user_id')]);
        return result[0]? result[0][0] : null;
    }

} 