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
                templateUrl:"app/menuDetails/menuDetails.html",
                controller: "menuListController as vm"
            })
    }]);
}());