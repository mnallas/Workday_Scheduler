$(document).ready(function () {
  var timeInt = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  var timeArray = [
    moment("9:00 am", "h a").format("h a"),
    moment("10:00 am", "h a").format("h a"),
    moment("11:00 am", "h a").format("h a"),
    moment("12:00 pm", "h a").format("h a"),
    moment("1:00 pm", "h a").format("h a"),
    moment("2:00 pm", "h a").format("h a"),
    moment("3:00 pm", "h a").format("h a"),
    moment("4:00 pm", "h a").format("h a"),
    moment("5:00 pm", "h a").format("h a"),
    moment("6:00 pm", "h a").format("h a"),
    moment("7:00 pm", "h a").format("h a"),
    moment("8:00 pm", "h a").format("h a"),
    moment("9:00 pm", "h a").format("h a"),
    moment("10:00 pm", "h a").format("h a"),
    moment("11:00 pm", "h a").format("h a"),
  ];
  var time = moment().format("h a");
  console.log(time);
  var test = moment(time).isAfter(timeArray[0]);
  var currentTimeInt = moment().hour();

  //not completely working yet, need to make sure colors are right
  for (let i = 0; i < timeInt.length; i++) {
    if (timeInt[i] > currentTimeInt) {
      $(`#slot${i}`).attr("class", "future row");
    } else if (timeInt[i] === currentTimeInt) {
      $(`#sot${i}`).attr("class", "present row");
    } else {
      $(`#slot${i}`).attr("class", "past row");
    }
  }

  for (let i = 0; i < timeInt.length; i++) {
    saveButton($(`#slot${i}`));
  }

  //need to save to localstorage and leave displayed on each timeslot
  function saveButton(button) {
    $(document).on("click", button, function (e) {
      e.preventDefault();
      window.localStorage.setItem("todos", button.val());
    });
  }
});
