$(document).ready(function () {
  var timeInt = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var timeArray = [
    "  9am     ",
    "10am     ",
    "11am     ",
    " 12nn     ",
    "  1pm     ",
    "  2pm     ",
    "  3pm     ",
    "  4pm     ",
    "  5pm     ",
  ];

  var time = moment().format("h a");
  var currentTimeInt = moment().hour();

  for (let i = 0; i < timeInt.length; i++) {
    $("#container").append(`<div data-id="${i}" id="timeBlock${i}" class="row">
    <div class="hour">
      ${timeArray[i]}
    </div>
    <textarea
      class="row"
      name=""
      id="slot"
      cols="110"
      rows="5"
    ></textarea>
    <div id ="submit" class="saveBtn">
      <i class="fas fa-save">       </i>
    </div>
  </div>`);
  }

  //not completely working yet, need to make sure colors are right
  for (let i = 0; i < timeInt.length; i++) {
    if (timeInt[i] > currentTimeInt) {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "future row");
      $(`#timeBlock${i}`).children().siblings("#slot").val();
    } else if (timeInt[i] === currentTimeInt) {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "present row");
      $(`#timeBlock${i}`).children().siblings("#slot").val();
    } else {
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .attr("class", "past row");
      $(`#timeBlock${i}`).children().siblings("#slot").val();
    }
  }
  for (let i = 0; i < timeInt.length; i++) {
    console.log(
      $(`#timeBlock${i}`)
        .children()
        .siblings("#slot")
        .val(localStorage.getItem(`timeBlock:${i}`))
    );
  }

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
});
