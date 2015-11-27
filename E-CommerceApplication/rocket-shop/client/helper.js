// UI.registerHelper is used to register helpers that are used to process
// data rendered through template tags.

// syntax:
// UI.registerHelper("helper_name", function(args){
// 	   processing and return; (use function)		
// });

UI.registerHelper("money", function(amount){
  return accounting.formatMoney(amount);
});
// accounting is a js package that is present in /client/scripts directory as accounting.min.js.

UI.registerHelper("markdown", function(text){
  var converter = new showdown.Converter();
  return converter.makeHtml(text);
});
// showdown is a js package that is present in /client/scripts directory as showdown.min.js.
