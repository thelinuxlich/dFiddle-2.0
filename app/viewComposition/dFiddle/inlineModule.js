define(['knockout'],function(ko){
    var InlineModule = function() {
        this.someProperty = ko.observable('This is being bound against an inline view.');
    };
    InlineModule.prototype.activate = function() {
        this.someProperty("This was changed inside the activate function of the inlined module with cacheViews: true.");
    };
    return InlineModule;
});