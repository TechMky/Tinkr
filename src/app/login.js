var loginView = (function ($) {

    //Declare private vars and functions here
    var validateLogin = function(){
        //Do stuff
        //Private function only availble to loginView
        console.log("validate stuff and do something else");
    }

    //Event handlers
    $("#app").on("click", "#signInLink", function (e) {
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

    $("#app").on("click", "#signInBtn", function (e) {
       validateLogin();
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


