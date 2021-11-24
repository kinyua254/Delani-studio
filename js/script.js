$('.developments').click(function(){
    $('#ddevelopment').slideToggle();
    $('.developments').slideToggle();

});
$('#ddevelopment').click(function(){
    $('.developments').slideToggle();
    $('#ddevelopment').slideToggle();
});
$('.imgdesign').click(function(){
    $('#design').slideToggle();
    $('.imgdesign').slideToggle();
});
$('#design').click(function(){
    $('.imgdesign').slideToggle();
    $('#design').slideToggle();
});
$('.promanagement').click(function(){
    $('#product').slideToggle();
    $('.promanagement').slideToggle();
});
$('#product').click(function(){
    $('.promanagement').slideToggle();
    $('#product').slideToggle();
});
$(document).ready(function() {
    $('form#credentials').submit(function(event){
        event.preventDefault();
        var nameInput = $('#name').val();
        var emailInput = $('#email').val();
        var textAreaInput = $('#text1').val();
        if($('#name').val() && $('#email').val()){
        alert(nameInput + ", we have received your message. Thank you for reaching out to us."+ " Your Email address:" + emailInput );
        }else{
            alert('enter a valid name and email');
        }
    });
});