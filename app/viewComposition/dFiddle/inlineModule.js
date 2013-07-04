define(['knockout'],function(ko){
    var InlineModule = function() {
        this.someProperty = ko.observable('This is being bound against an inline view.');
        this.someProperty.subscribe(function(){
            console.log("value changed");
        });
    };
    InlineModule.prototype.activate = function() {
        this.someProperty("This was changed inside the activate function of the inlined module with cacheViews: true.");
    };
    return InlineModule;
});