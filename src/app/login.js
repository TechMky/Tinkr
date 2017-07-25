var loginView = (function ($) {

    //Declare private vars and functions here


    $("#app").on("click", "#signInBtn", function (e) {
       loginView.init();
    });

    $("#app").on("click", "#registerLink", function (e) {
        var template = Template();
        template.loadTemplate({
            //pass our config obj
            templateName: $(this).attr('data-page'),
            selector: "#app"
        });
    });

    //Reveal public functions below
    return {
        init: function () {
            var template = Template();
            template.loadTemplate({
                //pass our config obj
                templateName: "signin",
                selector: "#app"
            });
        }
    }

})(jQuery);

loginView.init();


