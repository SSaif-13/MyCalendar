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
  function openCustomEvent(date) {
    // Display the event input form
    document.getElementById("eventDate").value = date;
    document.getElementById("customEvent").style.display = "block";
  }

  function closeCustomEvent() {
    // Close the event input form
    document.getElementById("customEvent").style.display = "none";
  }

  document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const eventTitle = document.getElementById("eventTitle").value;
    const eventDate = document.getElementById("eventDate").value;

    if (eventTitle && eventDate) {
      calendar.addEvent({
        title: eventTitle,
        start: eventDate,
      });
      closeCustomEvent(); // Close the event input form
    }
  });
});
