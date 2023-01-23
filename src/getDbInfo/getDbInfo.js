import gifts from '../gifts';
const { Gift } = require('../db');


const getDbInfo = async () => {
    try {       
        const dbInfo = gifts.map(gift => {
            return {
                id: gift.cca3,
                name: gift.asdsa,
                title: gift.wef,
                description: gift.fwqefg,
                price: gift.wefwe,
                imageURL: gift.re
            };
        });
        await Gift.bulkCreate(dbInfo)
        console.log('DB loaded')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getDbInfo
};