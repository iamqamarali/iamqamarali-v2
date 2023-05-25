export default class BaseModel {

    static db = null;
    
    table = '';

    constructor(data = {}){
        this.data = data
    }
    
    /**
     * 
     * This function should always be overriden in child class
     */
    static getTable(){
        return this.table;
    }

    /**
     * set database connection
     * 
     */
    static setConnection(db){
        return this.db = db;
    }
    

    /**
     * get database connection
     */
    static getConnection(){
        return this.db;
    }


    /**
     * 
     */
    fill(data){
        const oldData = this.data
        this.data = data
        const newData = this.only(this.properties)
        // ignore undefined values
        for (const key in newData) {
            if(newData[key] === undefined){
                delete newData[key]
            }
        }
        this.data = {
            ...oldData,
            ...newData
        }
    }

    // set get any property
    set(key, value){
        this.data[key] = value;
    }

    get(key){
        return this.data[key];
    }


    /**
     * 
     * SQL query helpers
     */
    static getKeysForSetStatement(data){
        let str = "";
        for (const key in data) {
            str += `${key} = ? , `;
        }
        return str.slice(0, -2);
    }

    static getKeys(data){
        return Object.keys(data);
    }
    static getValues(data){
        return Object.values(data);
    }
    static getQuestionMarks(data){
        let str = Object.values(data).map( v => '?');
        return str.join(',');
    }


    only(fields){
        let data = {}
        fields.forEach( field => {
            data[field] = this.data[field]
        })
        return data;            
    }

    except(fields){
        let data = {}
        Object.keys(this.data).forEach( field => {
            if(!fields.includes(field)){
                data[field] = this.data[field]
            }
        })
        return data;
    }


    /**
     * SAVE  
     * */
    async save(){
        if(!this.data.id){
            let model = await this.constructor.create(this.data);
            if(model){
                this.set('id', model.get('id'))
                return model;    
            }
        } 
        let changedRows = await this.constructor.update(this.data.id, this.data);
        return {
            changedRows
        };
    }

    /**
     * 
     * all 
     */
    static async all(select = null){
        let sql = `SELECT * FROM ${this.getTable()}`;
        if(select instanceof Array && select.length){
            sql = sql.replace('*', select.join(','));
        }
        const [rows, fields] = await this.getConnection().execute(sql);

        for (let i = 0; i < rows.length; i++) {
            rows[i] = new this(rows[i]);
        }
        return rows;
    }

    /**
     * first 
     * 
     */
    static async first(select = null){
        let sql = `SELECT * FROM ${this.getTable()} LIMIT 1`;
        if(select instanceof Array && select.length){
            sql = sql.replace('*', select.join(','));
        }
        const [rows, fields] = await this.getConnection().execute(sql);
        return rows.length ? new this(rows[0]) : null;
    }

    /**
     * get latest posts
     */
    static async latest(skip = 0, limit = 10){
        let sql = 'SELECT * FROM '+ this.getTable() +' ORDER BY id DESC LIMIT ?,?';
        const [rows, fields] = await this.getConnection().execute(sql, [skip, limit]);
        for (let i = 0; i < rows.length; i++) {
            rows[i] = new this(rows[i]);
        }
        return rows;
    }
    

    /**
     * 
     * @returns 
     */
    static async count(){
        const sql = `SELECT COUNT(*) as total FROM ${this.getTable()}`;
        const [rows, fields] = await this.getConnection().execute(sql);
        return rows[0]['total'];
    }
    

    /**
     * return model ID
     * */
    static async create(data){
        const sql = `INSERT INTO ${this.getTable()} SET `+ this.getKeysForSetStatement(data)
        const result = await this.getConnection().execute(sql, this.getValues(data));
        return result[0]['insertId'] ? this.find(result[0]['insertId']) : null;
    }
    
    /**
     *  
     * return the number of updated rows
     * */
    static async update(id, data){
        delete data.id;

        const sql = `UPDATE ${this.getTable()} SET `+ this.getKeysForSetStatement(data)
                    +` WHERE id = ?`;
        const result = await this.getConnection().execute(sql, [ ...this.getValues(data), id]);
        return result[0]['changedRows']
    }


   /**
     * 
     * */
    static async find(query, select = null){

        if(typeof query == 'number'){
            query = { id : query }
        }
        
        // create the query string
        let str = ''
        for (const key in query) {
            str += `${key} = ? AND `;
        }
        str = str.slice(0, -4);

        // create the sql query
        let sql = `SELECT * FROM ${this.getTable()} where ${str}`


        // replace the * with the select columns
        if(select instanceof Array ){
            sql = sql.replace('*', select.join(','));
        }

        const [rows, fields] = await this.getConnection().execute(sql, this.getValues(query));
        return rows[0] ? new this(rows[0]) : null;
    }



    /**
     * returns the number of deleted rows
     * 
     * */
    static async delete(ids){        
        let sql = `DELETE FROM ${this.getTable()} WHERE id = ?`;
        if( ids instanceof Array && ids.length){
            sql = `DELETE FROM ${this.getTable()} WHERE id IN (${this.getQuestionMarks(ids)})`;
        }else{
            ids = [ids];
        }
        const [rows, fields] = await this.getConnection().execute(sql, [...ids]);
        return rows['affectedRows'];
    }


    /**
     * 
     */
    static async truncate(){
        const sql = `Delete From ${this.getTable()}`;
        const [rows, fields] = await this.getConnection().execute(sql);
        return rows['affectedRows'];
    }
    
}