$(document).ready(function () {
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
  console.log(timeArray[0]);

  console.log(time);
  console.log(timeArray);

  for (let i = 0; i < timeArray.length; i++) {
    if (timeArray[i] > time) {
      $(`#slot${i}`).attr("class", "future row");
    } else if (timeArray[i] === time) {
      $(`#slot${i}`).attr("class", "present row");
    } else {
      $(`#slot${i}`).attr("class", "past row");
    }
  }

  //need to save to localstorage and leave displayed on each timeslot
  function saveButton(button) {
    $(document).on("click", button, function () {});
  }

  //   function timeSlot(display,current){
  //       for(let i=0;i < )
  //   }
});
