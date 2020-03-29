const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async create(request, response){

        const {id} = request.body;

        const ong = await connection('incidents')
            .where('id', id)
            .select('name')
            .first();
        
            if(!ong){
                return response.status(400).json({error: "No ONG found for this ID"});
            }

        return response.json(ong);
    },

    async delete(request, response){

        
    }
};