'use strict';

var defense = angular.module('battleCalc.defense', []);

defense.controller('defenseCtrl', [
	'$scope', function ($scope) {
	//todo make this a service
		$scope.defenseBaseValues = {
			barracks: {
				size: 0,
				x: 1,
				power: 4,
				armor: 4,
				shield: 0
			},
			laserTurret: {
				size: 0,
				x: 1,
				power: 8,
				armor: 8,
				shield: 0
			},
			missileTurret: {
				size: 0,
				x: 2,
				power: 16,
				armor: 16,
				shield: 0
			},
			plasmaTurret: {
				size: 0,
				x: 3,
				power: 24,
				armor: 24,
				shield: 0
			},
			ionTurret: {
				size: 0,
				x: 5,
				power: 32,
				armor: 32,
				shield: 2
			},
			photonTurret: {
				size: 0,
				x: 6,
				power: 64,
				armor: 64,
				shield: 6
			},
			disruptorTurret: {
				size: 0,
				x: 7,
				power: 256,
				armor: 256,
				shield: 8
			},
			deflectionShields: {
				size: 0,
				x: 5,
				power: 2,
				armor: 512,
				shield: 16
			},
			planetaryShield: {
				size: 0,
				x: 5,
				power: 4,
				armor: 2048,
				shield: 20
			},
			planetaryRing: {
				size: 0,
				x: 6,
				power: 2048,
				armor: 1024,
				shield: 12
			}
		};
	}
]);

