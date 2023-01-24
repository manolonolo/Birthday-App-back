const { Gift } = require ('../db');
const { Op } = require('sequelize')

const getGifts =  async (req, res) => {
    try {
        const { title } = req.query;
        if(title){
        const gift = await Gift.findOne({
            where: {
                title: {[Op.iLike]: '%' + title + '%'}
            } 
        })
            if(!gift){
                res.status(404).json('Gift not found')
            } else{
                res.json(gift)
                console.log(gift)
            }
        } else {
            const gifts = await Gift.findAll();
            if(gifts){
                res.json(gifts)
            } else {
                res.status(404).json('Gift not found')
            }
        }
        } catch (error) {
            res.status(404).json(error)
    }
}

const getGift = async (req, res) => {
    const { id } = req.params;
    try {
        if(id){
        const gift = await Gift.findOne({
            where: {
                id: {[Op.iLike]: `%${id}%`}
            }
        })
        if(!gift){
            return res.status(404).json('Gift not found')
        } else {
            return res.json(gift)
        }
    } else {
        return res.status(404).json('Gift not found')
    }
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { getGifts, getGift }