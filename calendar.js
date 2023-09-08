document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Display the calendar in month view
    events: [
      //Random place holder events
      {
        title: "Event 1",
        start: "2023-09-10",
      },
      {
        title: "Event 2",
        start: "2023-09-15",
      },
    ],
  });
  calendar.render();
});
