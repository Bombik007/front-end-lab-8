var app = angular.module('app', []);

app.controller('PostController', function PostController($scope) {
    $scope.posts = defaultPosts;
    $scope.edit = false;
    $scope.form = {};
    $scope.addPost = function (arr) {
        $scope.categValues = [];
        $scope.categValues.push($scope.form.categories);
        $scope.form.categories = $scope.categValues;
        $scope.comma = new RegExp(' ', 'gi');
        $scope.space = new RegExp(',', 'gi');
        for (let i = 0; i < $scope.form.categories.length; i++) {
            if ($scope.form.categories[0].match($scope.comma)) {
                $scope.categSplit = $scope.form.categories[0].split($scope.comma);
                $scope.form.categories = $scope.categSplit;
            }
        }
        for (let i = 0; i < $scope.form.categories.length; i++) {
            if ($scope.form.categories[0].match($scope.space)) {
                $scope.categSplit = $scope.form.categories[0].split($scope.space);
                $scope.form.categories = $scope.categSplit;
            }
        }

        if (!$scope.form.image) {
            $scope.form.image = 'leopolis.png';
        }
        arr.push($scope.form);
        $scope.form = {};
        $scope.categArr = [];
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            for (var j = 0; j < obj.categories.length; j++) {
                if ($scope.categArr.indexOf(obj.categories[j]) == -1) {
                    $scope.categArr.push(obj.categories[j]);
                }
            }
        }
    }
    $scope.categUpdate = function (arr) {
        $scope.categArr = [];
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            for (var j = 0; j < obj.categories.length; j++) {
                if ($scope.categArr.indexOf(obj.categories[j]) == -1) {
                    $scope.categArr.push(obj.categories[j]);
                }
            }
        }
    }
    $scope.editPost = function () {
        $scope.edit = true;
    }
    $scope.saveChanges = function () {
        $scope.edit = false;
    }
    $scope.filter = function (value) {
        $scope.filterBy = value;
        $scope.query = '';
    }
    $scope.filterReset = function () {
        $scope.filterBy = '';
        $scope.query = '';
    }
    $scope.visibility = false;
    $scope.noResults = function () {
        if ((angular.element(document.querySelector('#posts')).find(document.querySelector('#post')))) {
            $scope.visibility = true;
        }
    }
});

