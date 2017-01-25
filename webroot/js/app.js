$(function () {

  $.getJSON( "/news", function( data ) {
      var theTemplateScript = $("#products-template").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      $('.products-list').append(theCompiledHtml);    
  });


});
