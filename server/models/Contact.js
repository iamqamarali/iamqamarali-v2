import BaseModel from "./BaseModel";

export default class Contact extends BaseModel {

    table = 'contacts';

    properties = [
        'name',
        'email',
        'message',

        'is_read'

    ];

    hidden = [

    ];
    

    static getTable(){
        return 'contacts';
    }

    /** */
    constructor(data = {}){
        super(data);
    }

}