angular.module("modules.controllers")
.controller("homeController", function ($scope, $location) {
    $scope.hello = "Hello Everyone!";
    $scope.goToBlog = function () {
      $location.path("/blog");
    };
});
