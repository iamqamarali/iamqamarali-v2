import Post from './Post';

export default class Project extends Post{
    table = 'projects';

    

    static getTable(){
        return 'projects';
    }

    constructor(data = {}){
        super(data);
    }


} 