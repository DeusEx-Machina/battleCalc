'use strict';

// Declare app level module which depends on views, and components
var battleCalc = angular.module('battleCalc', [
	'ngRoute',
	'battleCalc.defense',
	'battleCalc.fleet',
	'battleCalc.tech'
]);
battleCalc.config(
	['$locationProvider', '$routeProvider',
		function ($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider
				.when('/defense', {templateUrl: 'components/defense/defense.html'})
				.when('/fleet', {templateUrl: 'components/fleet/fleet.html'})
				.otherwise({redirectTo: '/defense'});
		}
	]
);


battleCalc.controller('battleCalc', [
	'$scope', '$http', function ($scope, $http) {
		$scope.attacker = {
			id: 932,

			fleet: {
				fighter: 1000,
				frigate: 250
			},

			tech: {
				Armor: {name: 'Armor', level: 0},
				Laser: {name: 'Laser', level: 0},
				Missiles: {name: 'Missiles', level: 0},
				Plasma: {name: 'Plasma', level: 0},
				Shielding: {name: 'Shielding', level: 0},
				Ion: {name: 'Ion', level: 0},
				Photon: {name: 'Photon', level: 0},
				Disruptor: {name: 'Disruptor', level: 0},
				CommandCenter: {name: 'Command Center', level: 0},
				TacticalCommander: {name: 'Tactical Commander', level: 0}
			}
		};

		$scope.defender = {

			tech: {
				Armor: {name: 'Armor', level: 0},
				Laser: {name: 'Laser', level: 0},
				Missiles: {name: 'Missiles', level: 0},
				Plasma: {name: 'Plasma', level: 0},
				Shielding: {name: 'Shielding', level: 0},
				Ion: {name: 'Ion', level: 0},
				Photon: {name: 'Photon', level: 0},
				Disruptor: {name: 'Disruptor', level: 0},
				CommandCenter: {name: 'Command Center', level: 0},
				TacticalCommander: {name: 'Tactical Commander', level: 0}
			}
		};

		$scope.unitBaseValues = {
			fighter: {
				name: 'Fighter',
				key: 'fighter',
				size: 5,
				x: 1,
				armor: 2,
				power: 2,
				shield: 0
			},
			bomber: {
				name: 'Bomber',
				size: 10,
				x: 2,
				power: 4,
				armor: 2,
				shield: 0
			},
			heavyBomber: {
				name: 'Heavy Bomber',
				size: 30,
				x: 3,
				power: 10,
				armor: 4,
				shield: 0
			},
			ionBomber: {
				name: 'Ion Bomber',
				size: 60,
				x: 5,
				power: 12,
				armor: 4,
				shield: 1
			},
			corvette: {
				name: 'Corvette',
				size: 20,
				x: 1,
				power: 4,
				armor: 4,
				shield: 0
			},
			recycler: {
				name: 'Recycler',
				size: 30,
				x: 1,
				power: 2,
				armor: 2,
				shield: 0
			},
			destroyer: {
				name: 'Destroyer',
				size: 40,
				x: 3,
				power: 8,
				armor: 8,
				shield: 0
			}
			,
			frigate: {
				name: 'Frigate',
				size: 80,
				x: 2,
				power: 12,
				armor: 12,
				shield: 0
			}
			,
			ionFrigate: {
				name: 'Ion Frigate',
				size: 120,
				x: 5,
				power: 14,
				armor: 12,
				shield: 1
			},
			scoutShip: {
				name: 'Scout Ship',
				size: 40,
				x: 1,
				power: 1,
				armor: 2,
				shield: 0
			}
			,
			outpostShip: {
				name: 'Outpost Ship',
				size: 100,
				x: 1,
				power: 2,
				armor: 4,
				shield: 0
			}
			,
			cruiser: {
				name: 'Cruiser',
				size: 200,
				x: 3,
				power: 24,
				armor: 24,
				shield: 2
			}
			,
			carrier: {
				name: 'Carrier',
				size: 400,
				x: 2,
				power: 12,
				armor: 24,
				shield: 2
			}
			,
			heavyCruiser: {
				name: 'Heavy Cruiser',
				size: 500,
				x: 3,
				power: 48,
				armor: 48,
				shield: 4
			}
			,
			battleship: {
				name: 'Battleship',
				size: 2000,
				x: 5,
				power: 168,
				armor: 128,
				shield: 10
			}
			,
			fleetCarrier: {
				name: 'Fleet Carrier',
				size: 2500,
				x: 5,
				power: 64,
				armor: 96,
				shield: 8
			},
			dreadnought: {
				name: 'Dreadnought',
				size: 10000,
				x: 6,
				power: 756,
				armor: 512,
				shield: 20
			}
			,
			titan: {
				name: 'Titan',
				size: 50000,
				x: 7,
				power: 3402,
				armor: 2048,
				shield: 30
			}
			,
			leviathan: {
				name: 'Leviathan',
				size: 200000,
				x: 6,
				power: 10000,
				armor: 6600,
				shield: 40
			}
			,
			deathStar: {
				name: 'Death Star',
				size: 500000,
				x: 7,
				power: 25500,
				armor: 13500,
				shield: 60
			}
		};

		$scope.calcMultiplier = function (tech) {
			return tech.level * 5 + "%";
		};

		$scope.getPowerArmorShield = function (unit) {

		}
	}
]);

