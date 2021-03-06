﻿define(['viewComposition/dFiddle/inlineModule'],function(InlineModule) {
    return {
        propertyOne: 'This is a databound property from the root context.',
        propertyTwo: 'This property demonstrates that binding contexts flow through composed views.',
        inlineModule: new InlineModule(),
        activate: function() {
            this.inlineModule.init();
        }
    };
});