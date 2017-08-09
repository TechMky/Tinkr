$(document).ready(function () {
    $('#toggleRegister, #toggleSignin').click(function (e) { 
        e.preventDefault();
        $('.login-form').toggleClass('hidden');
        $('.register-form').toggleClass('hidden');
    });    
});