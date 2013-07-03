define(['knockout'],function(ko){
    var name = ko.observable();
    var canSayHello = ko.computed(function() {
        return name() ? true : false;
    });

    return {
        displayName: 'What is your name?',
        name: name,
        activate: function() {
            this.name("Joe");
        },
        sayHello: function() {
            app.showMessage('Hello ' + name() + '!', 'Greetings');
        },
        canSayHello: canSayHello
    };
});