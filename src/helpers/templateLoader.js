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

            $.ajax({
                type: "GET",
                cache: true,
                url: "src/pages/" + templateName + ".html",
                dataType: "text",
                success: function (data) {
                    $(selector).html(data);
                },
                error: function (error) {
                }
            });

        }
    };
}
