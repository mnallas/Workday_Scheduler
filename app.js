$(document).ready(function () {
  var timeInt = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  var time = moment().format("h a");
  var currentTimeInt = moment().hour();
  var text = window.localStorage.getItem("todos");

  //not completely working yet, need to make sure colors are right
  for (let i = 0; i < timeInt.length; i++) {
    if (timeInt[i] > currentTimeInt) {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "future row");
      $(`#timeBlock${i}`).children().siblings("#slot").val(text);
    } else if (timeInt[i] === currentTimeInt) {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "present row");
      $(`#timeBlock${i}`).children().siblings("#slot").val(text);
    } else {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "past row");
      $(`#timeBlock${i}`).children().siblings("#slot").val(text);
    }
  }

  saveButton($("#saveBtn0"));

  //need to save to localstorage and leave displayed on each timeslot
  function saveButton(btn) {
    $(document).on("click", "#submit", function (e) {
      e.preventDefault();

      userInput = $(this).parent().children().siblings("#slot").val();
      console.log(userInput);
      console.log($(this).parent().attr("data-id"));

      localStorage.setItem(
        `timeBlock:${$(this).parent().attr("data-id")}`,
        userInput
      );
    });
  }
});
