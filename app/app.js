/**
 * Created by Smit on 8/3/2017.
 */

(function(){
"use strict";

var app = angular.module('myRestaurant',
    ["common.services",
        "ui.router",
        "restaurantMenuMock"
    ]
    );

    app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state("home",{
                url:"/",
                templateUrl:"app/homeView.html"

            })
            .state("storeFront",{
                url:"/storedetails",
                views:{
                    '':{
                        templateUrl:"app/menuDetails/menuDetails.html",
                        controller: "menuListController as vm"
                    },
                    'reviews@storeFront': {
                        templateUrl: 'app/menuDetails/restReviewsView.html',
                        controller: 'reviewController as vm'
                    }
                }
            })
            .state("dishDetail",{
                url:"/dishDetails/:dishId",
                templateUrl:"app/menuDetails/dishInfo.html",
                controller: "menuItemInfoController as vm",
                resolve:{
                    restaurantResource :"restaurantResource",
                    dish: function(restaurantResource,$stateParams) {

                        var dishId = $stateParams.dishId;
                        return restaurantResource.getRestaurantInfoFor('dishes').get({dishId: dishId}).$promise;
                    }
                }
            })
            .state("newDish",{
                url:"/newDish/:dishId",
                templateUrl:"app/menuDetails/newDishEntry.html",
                controller: "newDishEntryController as vm",
                resolve:{
                    restaurantResource :"restaurantResource",
                    dish: function(restaurantResource,$stateParams) {

                        var dishId = $stateParams.dishId;
                        return restaurantResource.getRestaurantInfoFor('dishes').get({dishId: dishId}).$promise;
                    }
                }
            })
    }]);
}());