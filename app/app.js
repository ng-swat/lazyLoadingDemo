define(['angular'], function () {
    /**
     * configure the main app module
     * @type {*|module}
     */
    var app = angular.module('App', ['ngRoute', 'routeResolver','oc.lazyLoad'])

        .config(function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider) {

            /**
             * configure the ocLazyLoader to use requireJS as the loader
             */
            $ocLazyLoadProvider.config({
                asyncLoader: require
            });

            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            app.controller = $controllerProvider.register;
            app.service = $provide.service;
            app.factory = $provide.factory;
            app.filter = $filterProvider.register;
            app.directive = $compileProvider.directive;

            /**
             * get referance to the route method of routeResolverProvider
             * @type {*}
             */
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/welcome', {templateUrl :'views/welcome/welcome.html'})
                .when('/users', route.resolve('users', ['userMngr']))
                .when('/users/edit/:id', route.resolve('userForm', ['userMngr','validation']))
                .when('/directives',route.resolve('directives', ['resourceLoader']))
                .when('/modules',route.resolve('modules', []))
                .when('/', {redirectTo: '/welcome'})
        });

    return app;
});