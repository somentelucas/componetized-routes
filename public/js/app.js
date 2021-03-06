var app = angular.module("ui-router-example", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("workspace", {
			url: "/workspace",
			template: "<workspace-directive></workspace-directive>"
		})
		.state("workspace.to_do", {
			url: "/to_do",
			templateUrl: "/templates/to_do.html"
		})
		.state("workspace.to_do.task", {
			url: "/task/:taskID",
			views: {
				to_do: {
					template: "<task-directive></task-directive>"
				}
			}
		})
		.state("workspace.to_do.event", {
			url: "/event/:eventID",
			views: {
				to_do: {
					templateUrl: "/templates/event.html"
				}
			}
		})
		.state("workspace.to_do.event.details", {
			url:"/details",
			views: {
				details: { 
					templateUrl: "/templates/details.html"
				}
			}
		})

	$urlRouterProvider.otherwise("/workspace");
});