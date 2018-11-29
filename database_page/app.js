function displayResults(fitnessJournal) {

    $("tbody").empty();

    fitnessJournal.forEach(function(fitnessJournal) {

        $("tbody").append("<tr><td>"+ fitnessJournal.name + "</td>"+
                                "<td>" +fitnessJournal.text+ "</td></tr>");
                                $("tr").addClass("row");
    });
}



$.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
});



$(document).on("click", "#submit-info", function() {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        name: $("#name").val(),
        text: $("#text").val(),
        created: Date.now()
      }
    })


});
