$(function () {

  $.getJSON( "/news", function( data ) {
      var theTemplateScript = $("#card-template").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      $('.content-news').append(theCompiledHtml);    
  });


});
