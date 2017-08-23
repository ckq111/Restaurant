/**
 * Created by Smit on 8/13/2017.
 */
(function () {
    'use strict';
    //Everything related to customer reviews start from here!!!
    // *****************************************************
    angular.module('myRestaurant')
        .controller('reviewController',['restaurantResource','toastr',ReviewController]);

    function ReviewController(restaurantResource,toastr) {
        var vm = this;
        vm.newReview = {};
        vm.newReview.name = sessionStorage.uId;

        vm.isMerchantLogedIn = JSON.parse(sessionStorage.isMerchantLoggedIn);
        vm.isReviewSubmitted = false;

        console.log(vm.isMerchantLogedIn);
        restaurantResource.getRestaurantInfoFor('reviews').query(function(data){
            vm.reviews = data;
        });

        // As response javascript object knows how much rating is there.
        // this will set rating images accordingly
        vm.getStarImg = function (starIndex, ratings) {
            if(starIndex <= ratings)
                return "images/yello-star.png";
            else
                return "images/black-star.png";
        };


        vm.newReview.ratings = 0;
        vm.max = 5;
        vm.isReadonly = false;
        vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
        };

        vm.ratingStates = [
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
        ];

        vm.reviewSubmitted  = function () {
            vm.reviews.unshift(vm.newReview);
            vm.isReviewSubmitted = true;
            toastr.success('Your Review is saved!', 'Thanks',{
                timeOut:2000
            });
        };
    }

})();