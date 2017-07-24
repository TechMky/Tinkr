
$("#register").click(function (e) { 
    e.preventDefault();
    var reqPage = $(this).attr('href');
    console.log(reqPage);
    loadPage(reqPage);
});

function loadPage(pageName) {
    console.log(pageName);
    $.ajax({
        type: "GET",
        url: "src/pages/"+ pageName,
        dataType: "text",
        success: function (returnedPage) {
            $('.container').html(returnedPage);
        },
        error: function (error){
            console.log("ERROR", error);
        },
        complete: function(xhr,status){
            console.log(xhr, status);
        }
    });
}