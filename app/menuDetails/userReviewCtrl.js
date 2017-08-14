/**
 * Created by Smit on 8/13/2017.
 */
(function () {
    'use strict';
    //Everything related to customer reviews start from here!!!
    // *****************************************************
    angular.module('myRestaurant')
        .controller('reviewController',['restaurantResource',ReviewController]);

    function ReviewController(restaurantResource) {
        var vm = this;

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
        }
    }

})();