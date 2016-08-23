'use strict';

/**
 * @ngdoc service
 * @name werocktechApp.series
 * @description
 * # series
 * Service in the werocktechApp.
 */
angular.module('werocktechApp')
  .service('series', function ($http) {

    this.findAll = function () {
      return $http({
        method: 'GET',
        url: '/data/series.js'
      });
    };
  });