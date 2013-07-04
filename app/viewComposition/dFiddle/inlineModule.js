define(['knockout'],function(ko){
    return {
        someProperty: ko.observable('This is being bound against an inline view.'),
        activate: function() {
            this.someProperty("This was changed inside the activate function of the inlined module with cacheViews: true.");
        }
    };
});