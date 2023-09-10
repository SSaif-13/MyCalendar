document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Display the calendar in month view
    selectable: true, // Allow date selection
    select: function (info) {
      // When a date is clicked
      openCustomEvent(info.startStr); // Open the event input form
    },
  });
  calendar.render();
});
