define(function(){
    return {
        someProperty:'This is being bound against an inline view.',
        activate: function() {
            this.someProperty = "This was changed inside the activate function of the inlined module.";
        }
    };
});