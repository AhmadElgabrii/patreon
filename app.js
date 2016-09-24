var app = angular.module('patreon', []);
app.controller('bodyController',function($scope,$http){
  $http.get('db.json')
       .then(function(res){
          $scope.db = res.data;
          console.log($scope.db);
        });
        console.log("This is the line below the http request");
});
