const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
//const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");




// const validateReview = (req, res, next) =>{
//   let {error} = reviewSchema.validate(req.body);
//   if ( error) {
//     let errMsg = error.details.map((el)=> el.message).join(",");
//     throw new ExpressError(400, errMsg);

//   }
//   else{
//     next();
//   }
// };

// Reviews
// Post Route to add a review to a specific listing
router.post("/", isLoggedIn, validateReview, wrapAsync( async (req, res) => {
  
  let listing = await Listing.findById(req.params.id);        // Find the listing by its ID from the database
  let newReview = new Review(req.body.review);               // Create a new review object using the data sent in the request
  newReview.author = req.user._id;
  listing.reviews.push(newReview);                           // Add the new review to the listing's reviews array
  await newReview.save();                                    // Save the new review to the database
  await listing.save();                                      // Save the updated listing (which now includes the new review) to the database
  req.flash("success", "New Review Created!");
  res.redirect(`/listings/${listing._id}`);
}));

// Delete Review Route
router.delete( "/:reviewId", isLoggedIn, isReviewAuthor,  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", " Review Deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;