/**
 * app entry point. loads al the main files nedded for
 * the application to start and bootstrap the application main module
 */

require.config({

    paths: {
        angular: 'components/angular/angular',
        angularRoute: 'components/angular-route/angular-route',
        routeResolver : 'resources/core/routeResolver',
        ocLazyLoad : 'resources/core/ocLazyLoad',
        app : 'app'
    },
    shim:{
      angular: {
        exports: 'angular'
      },
      angularRoute: {
        deps: ['angular']
      },
      ocLazyLoad: {
        deps: ['angular']
      }      
    }
});


require(['angular', 'angularRoute', 'routeResolver', 'ocLazyLoad', 'app'], function () {

    angular.bootstrap(document, ['App']);
});