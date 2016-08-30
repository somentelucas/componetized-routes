app.directive("taskDirective", function ($stateParams) {
	return {
		restrict: "E",
		scope: {
			taskId: "="
		},
		templateUrl: "/features/task/task.html",
		link: function ($scope) {
			console.log("Task: ", $stateParams.taskID);
			console.log("ID as param: ", $scope.taskId);

		}
	}	
})