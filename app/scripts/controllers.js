/**
 * Created by Smit on 8/3/2017.
 */
(function () {
    'use strict';
    angular.module('myRestaurant')
        .controller('menuListController',MenuListController);

    function MenuListController() {
        var vm = this;
        vm.selectedDish = 0;
        vm.selectedCategory = '';
        vm.setSelectedDish = function (index) {
            vm.selectedDish = index - 1;
        };
        // TO Select Category Calling this function from HTML code
        vm.setSelectedCategory = function (category) {
            vm.selectedCategory = category;
        };
        vm.dishes=[
            {
                "_id":1,
                "name":"Vegetable Samosas (2 Pieces)",
                "category":"Appetizer",
                "description": "Crispy golden brown triangle pastry stuffed with mildly spiced potatoes and peas.",
                "price": 4,
                "preptime":5,
                "spicy":false,
                "imageUrl": "images/csamosa.jpg"
            },
            {
                "_id":2,
                "name":"Chicken Samosa (2 Pieces)",
                "category":"Appetizer",
                "description": "Crispy golden brown triangle pastry stuffed with mildly spiced potatoes and peas.",
                "price": 6,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/vadapav.jpg"
            },
            {
                "_id":3,
                "name":" Vada Pav (2 Pieces)",
                "category":"Appetizer",
                "description": "Batter fried potato ball served in a bun.",
                "price": 6,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/vsamosa.jpg"
            },
            {
                "_id":4,
                "name":"Hara Bhara Pakoras",
                "category":"Appetizer",
                "description": "Assorted vegetable fritters fried with lentil flour batter.",
                "price": 5,
                "preptime":5,
                "spicy":false,
                "imageUrl": "images/hara.jpg"
            },
            {
                "_id":5,
                "name":"Masala Cut Mirch",
                "category":"Appetizer",
                "description": "Chili fritters stuffed with spicy potatoes.",
                "price": 8,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/cutmirch.jpg"
            },
            {
                "_id":6,
                "name":"Malai Chicken Tikka",
                "category":"Tandoori",
                "description": "Boneless chicken cubes marinated in mild spices and fresh cream to give it a more soft and creamy flavor and baked in our tandoor.",
                "price": 12,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/malaichkn.jpg"
            },
            {
                "_id":7,
                "name":"Chicken Tikka",
                "category":"Tandoori",
                "description": "Cubes of boneless chicken marinated in a variety of spices and yogurt and baked in our tandoor.",
                "price": 11,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/chkntika.jpg"
            },
            {
                "_id":8,
                "name":"Palak Paneer",
                "category":"Panner",
                "description": "Fresh ground spinach and fresh cottage cheese cubes cooked with fresh ginger, garlic and onion in a deliciously rich sauce.",
                "price": 10,
                "preptime":5,
                "spicy":false,
                "imageUrl": "images/palakpaner.jpg"
            },
            {
                "_id":9,
                "name":"Kadai Paneer",
                "category":"Panner",
                "description": "Fresh cubes of cottage cheese in our Chef's special gravy with onions, green peppers and ginger cooked in a kadai.",
                "price": 11,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/kadaipaner.jpg"
            },
            {
                "_id":10,
                "name":"Rajma Curry",
                "category":"Veg",
                "description": "Red kidney beans cooked in a traditional Punjabi style gravy.",
                "price": 8,
                "preptime":5,
                "spicy":true,
                "imageUrl": "images/rajma.jpg"
            }

        ]

    }

}());

