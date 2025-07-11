const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const campgrounds = require('../controllers/campgrounds')
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware.js')
const multer = require('multer')
const {storage} = require('../cloudinary')
const upload = multer ({ storage, limits: { fileSize: 5 * 1024 * 1024 } });


router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn,  upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground));
    //we use multer to add the built in body parsing middleware
    
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));



router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

module.exports = router;