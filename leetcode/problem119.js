var getRow = function getRow(rowIndex){
    var row = [1];
    for (var i = 0; i < rowIndex; i++){
        row.push(row[i] * (rowIndex - i) / (i+1));
    };
    return row;
};