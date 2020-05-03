$(document).ready(function () {
  var timeInt = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  var time = moment().format("h a");
  var currentTimeInt = moment().hour();
  var text = window.localStorage.getItem("todos");

  //not completely working yet, need to make sure colors are right
  for (let i = 0; i < timeInt.length; i++) {
    if (timeInt[i] > currentTimeInt) {
      $(`#slot${i}`).attr("class", "future row");
      $(`#slot${i}`).val(text);
    } else if (timeInt[i] === currentTimeInt) {
      $(`#slot${i}`).attr("class", "present row");
      $(`#slot${i}`).val(text);
    } else {
      $(`#slot${i}`).attr("class", "past row");
      $(`#slot${i}`).val(text);
    }
  }

  saveButton($("#saveBtn0"));

  //need to save to localstorage and leave displayed on each timeslot
  function saveButton(btn) {
    $(document).on("click", "#submit", function (e) {
      e.preventDefault();

      console.log(
        $("#slot01").children().siblings("#slot").attr("class", "present row")
      );

      userInput = $("#slot1").val();
      console.log(userInput);
      window.localStorage.setItem($(this).siblings("#slot1").val(), userInput);
      // window.localStorage.setItem(, userInput);
    });
  }
});
