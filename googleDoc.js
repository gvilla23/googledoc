  // ID of the Google Spreadsheet
 var spreadsheetID = "2PACX-1vTJbE6Eq5i_rldV15i45piEDWsL_QAuzIcG1Gntm76ujcg4aemI4hWuwIyz6hW-yUVr5FzaQbMgOq0J";

 // Make sure it is public or set to Anyone with link can view
 //https://docs.google.com/spreadsheets/d/1GWcmUAUDFJ0HrEszv5PPejI6HFR4IBTxlVZa4p3Nh1s/edit?usp=sharing
 //var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 var url = "https://docs.google.com/spreadsheets/d/1GWcmUAUDFJ0HrEszv5PPejI6HFR4IBTxlVZa4p3Nh1s/edit?usp=sharing";



 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
  });

 });