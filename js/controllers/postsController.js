angular.module("modules.controllers")
  .controller("postsController", function ($scope, $location) {

    $scope.list = [];

    $scope.addPost = function (post) {
      $scope.list.push({
        heading: post.title,
        content: post.content
      });

      $scope.newPost = {};
    }

    $scope.delete = function (post) {
      $scope.list.splice($scope.list.indexOf(post), 1);
    }
  });
