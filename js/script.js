$('.developments').click(function(){
    $('#ddevelopment').slideToggle();
    $('.developments').slideToggle();

});
$('#ddevelopment').click(function(){
    $('.developments').fadeToggle();
    $('#ddevelopment').fadeToggle();
});
$('.imgdesign').click(function(){
    $('#design').slideToggle();
    $('.imgdesign').slideToggle();
});
$('#design').click(function(){
    $('.imgdesign').fadeToggle();
    $('#design').fadeToggle();
});
$('.promanagement').click(function(){
    $('#product').slideToggle();
    $('.promanagement').slideToggle();
});
$('#product').click(function(){
    $('.promanagement').fadeToggle();
    $('#product').fadeToggle();
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