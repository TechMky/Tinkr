/**
 * Description: Utility class for loading all of our html templates using AJAX
 */

var Template = function () {

    return {
        /**
         * param: config obj with template data
         *          selector = jQ selector
         *          templateName = template .html file name
         */
        loadTemplate: function (config) {
            var templateName = config.templateName,
                selector = config.selector;

             $(selector).load("src/pages/" + templateName + ".html");
             //TODO: Persist page state using # based url structure
        }
    };
}
