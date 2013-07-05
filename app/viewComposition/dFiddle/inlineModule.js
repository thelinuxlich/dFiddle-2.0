define(['knockout'],function(ko){
    var InlineModule = function() {
        this.someProperty = ko.observable('This is being bound against an inline view.');
        this.someProperty.subscribe(function(){
            console.log("value changed");
        });
        this.i = 0;
    };
    InlineModule.prototype.init = function() {
        this.i++;
        this.someProperty("This was changed inside the activate function of the inlined module with cacheViews: true. init: "+this.i);
    };
    return InlineModule;
});