const Joi = require('joi');
const {number} = require( 'joi' );
// by using joi, the errors are already settled by this APIs 
// you can customize if input is required, what is the max, what is the datatype required
module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required()
    }).required(),
    deleteImages: Joi.array(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object ({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
}) 