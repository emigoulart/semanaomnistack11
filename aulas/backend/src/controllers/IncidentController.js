const connection = require('../database/connection');

module.exports = {

   async create(request, response){

        const { title, description, value } = request.body;
        request.headers;

        const ong_id = request.headers.authorization;
    
        const [id ]=  await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
    
        return response.json({ id });
    }
}