//////////////////////////////////////////////////////////////////////////////ℱℳ
function fmontemorano060() {
  //set background colors
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = Spreadsheet.getActiveSheet();
  var range = Sheet.getRange("A1").activate();
  
  var colors = new Array(10);
  for (var y = 0; y < 10; y++) {
    colors[y] = new Array(10);
    for (var x = 0; x < 10; x++) {
      colors[y][x] = range.offset(x,y).getBackground();
    }
  }
  Sheet.getRange(11, 1, 10, 10).setBackgroundColors(colors);
}
//////////////////////////////////////////////////////////////////////////////ℱℳ
function fmontemorano061() {
  //SetHorizontalRange
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = Spreadsheet.getActiveSheet();
  var row = 1; var numRows = 1;
  var column = 1; var numColumns = 3; //("A1:C1")
  var Range = Sheet.getRange(row, column, numRows, numColumns)
  var values = [[["Adam"],["Barb"],["Chris"]]];


  Range.setValues(values)
} 

//////////////////////////////////////////////////////////////////////////////ℱℳ
function fmontemorano062() {
  //SetVerticalRange
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = Spreadsheet.getActiveSheet();
  var row = 1; var numRows = 3; 
  var column = 1; var numColumns = 1; //("A1:A3")
  var Range = Sheet.getRange(row, column, numRows, numColumns)
  var values = [[["Adam"],["Barb"],["Chris"]]];


  Range.setValues(values)
} 

//////////////////////////////////////////////////////////////////////////////ℱℳ
function fmontemorano063(){
  //SetArea
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = Spreadsheet.getActiveSheet();
  var row = 1; var numRows = 3; 
  var column = 1; var numColumns = 3; //("A1:C3")
  var Range = Sheet.getRange(row, column, numRows, numColumns)
  var values = [[[["Adam"]], [["Barb"]], [["Chris"]]], [[["Barb"]], [["Chris"]], [["Adam"]]], [[["Chris"]], [["Adam"]], [["Barb"]]]];


  Range.setValues(values)
}

//////////////////////////////////////////////////////////////////////////////ℱℳ
function fmontemorano064(){
  //CopyPasteArea
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var Sheet = Spreadsheet.getSheets(); 
  
  var a = 0;
  var b = 0;
  var Sheet = Spreadsheet.getSheets(); 
  var row = 1; var column = 1; 
  var numRows = Sheet[a].getRange("A:A").getLastRow(); 
  var numColumns = Sheet[a].getRange("1:1").getLastColumn(); 
  var range = Sheet[a].getRange(row, column, numRows, numColumns);
  
  
  var Range = Sheet[a].getRange(row, column, numRows, numColumns)
  var values = new Array(numRows);
  for(var x = 0 ; x <  numRows; x++){
    values[x] = new Array(numColumns);
    for(var y = 0 ; y < numColumns ; y++){
      values[x][y] = Sheet[a].getRange(row, column).offset(x,y).getValue()
    }
  }
  Logger.log(values)
  Sheet[b].getRange(numRows+1, column, numRows, numColumns).setValues(values)  //https://developers.google.com/apps-script/best_practices
}
