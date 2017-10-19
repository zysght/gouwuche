angular.module('app', []).controller('firstController',
    function ($scope) {
        $scope.Product = [{
            id: 1000,
            name: "iPhone 6 Plus",
            num: 1,
            price: 6888
        }, {
            id: 1001,
            name: "iPhone 6",
            num: 1,
            price: 5288

        }, {
            id: 1002,
            name: "iPhone 5s",
            num: 1,
            price: 4188
        }, {
            id: 1003,
            name: "iPhone 5c",
            num: 1,
            price: 3288
        }];

        $scope.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.Product, function (item) {
                total += item.num * item.price;
            });
            return total;
        }

        $scope.totalNum = function () {
            var total = 0;
            angular.forEach($scope.Product, function (item) {
                total += parseInt(item.num);
            });
            return total;
        }

        $scope.remove = function (index) {
            $scope.Product.splice(index, 1);
        }

        $scope.removeall = function () {
            var index;
            for (index = $scope.Product.length - 1; index >= 0; index--) {
                $scope.remove(index);
            }
        }

        $scope.reduce = function (index) {
            if ($scope.Product[index].num != 1) {
                $scope.Product[index].num--;
            } else {
                $scope.remove(index);
            }
        }

        $scope.add = function (index) {
            $scope.Product[index].num++;
        }
    });