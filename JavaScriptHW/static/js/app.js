//Assign the data from `data.js` to a descriptive variable
var tableData = data;


var table_area = d3.select("tbody")
// console.log(tableData);

//create a row for each object in the data

function createPlot(input, columns) {
    
    var rows = table_area.selectAll("tr").data(tableData).enter().append("tr");
    var cells = rows.selectAll('td')
	    .data(function (row) {
		return columns.map(function (column) {
		    return {column: column, value: row[column]};
		});
	    })
	    .enter()
	    .append('td')
	    .text(function (d) { return d.value; });

}

createPlot(tableData, ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]);


var filters = {}

d3.select(".filter").on("change", function(event){
    var changedElement = d3.event.target;
    var filterId = changedElement.id;
    var value = changedElement.value.trim();
    
    if (value) {
        filters[filtersId] = value;
    }
    else {
        delete filters[filterId];
    }    
});

function updateTable() {
    var tbody = table.append("tbody");
    filterId.forEach((Report) => {
       var row = tbody.append("tr");
       Object.entries(Report).forEach(([key, value]) => {
         var cell = tbody.append("td");
        cell.text(value);
         });
     });

    createPlot(filteredData)
}

