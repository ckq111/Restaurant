(function(){
    var app = angular.module('lettersOnlyApp',[]);

    app.directive('lettersOnly',function(){

        return{
            restrict:'A',
            link:function(scope,elem,attribs){
                elem[0].onkeydown = function (event) {
                    if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 8 || event.keyCode === 32){
                        console.log(event.keyCode);
                        return true;
                    }
                    else
                        return false;
                };
            }
        }
    });
})();