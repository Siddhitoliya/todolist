var myApp = angular
                    .module("module", [])
                    .controller("controller", function($scope){
                        $scope.list = [{text: 'Reach Office', done: false}];
                        $scope.Add = function(){
                            $scope.list.push({text:$scope.input,done:false});
                            $scope.input = "";
                        };
                        $scope.remove = function(){
                            var oldlist = $scope.list;
                            $scope.list = [];
                            angular.forEach(oldlist, function(x){
                                if (!x.done) $scope.list.push(x);
                            });
                        };
                    });