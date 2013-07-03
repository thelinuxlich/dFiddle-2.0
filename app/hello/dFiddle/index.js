define(['hello/dFiddle/form','durandal/system', 'knockout'], function( Form, system, ko ) {

    return {
        form: new Form(),
        activate: function() {
            system.log('Lifecycle : activate');
        }
    };
});