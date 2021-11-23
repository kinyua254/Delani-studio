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
        var result = nameInput;
        $('#output').text(result);
    });
});