$(function () {

  $.getJSON( "/news", function( data ) {
      var theTemplateScript = $("#inf-card-template").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      $('#cards').append(theCompiledHtml);    
  });


});
