define(['hello/dFiddle/form','durandal/app', 'durandal/system', 'knockout'], function( Form, app, system, ko ) {

    return {
        form: new Form(),
        activate: function() {
            system.log('Lifecycle : activate');
        }
    };
});