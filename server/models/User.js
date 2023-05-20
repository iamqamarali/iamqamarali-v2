import BaseModel from './BaseModel.js'

export default class User extends BaseModel{
    table = 'users';

    properties = [
        'id',
        'first_name',
        'last_name',
        'bio',
        'email',
        'password',
        'created_at',
        'updated_at',
    ];

    hidden = [
        'password'
    ];

    static getTable(){
        return 'users';
    }

    /** */
    constructor(data = {}){
        super(data);
    }

    /**
     * 
     */
    async findOrCreate(){
        let user = await User.find({email : this.get('email')})
        if(user){
            await User.update(user.get('id'), this.data);
            this.set('id', user.get('id'))
            return user.get('id')
        }
 
        return await super.save();
    }

    /**
     * 
     */
    posts(){
        let sql = `SELECT * FROM posts WHERE user_id = ?`;
        return this.db.execute(sql, [this.get('id')])
    }

} 