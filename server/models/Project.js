import BaseModel from './BaseModel.js'

export default class Post extends BaseModel{
    table = 'projects';

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

        'images',
        'seo_data',

        'created_at',
        'updated_at ',

        'is_project',
    ];

    hidden = [

    ];
    

    static getTable(){
        return 'projects';
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