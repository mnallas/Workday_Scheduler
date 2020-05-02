$(document).ready(function () {
  var time = moment().format("h a");

  console.log(time);
  var timeBlock = 14;

  for (let i = 0; i < timeBlock; i++) {
    var timeStart = i + 9;
    var timeRestart = timeStart / 12 + i;
    if (timeStart < 13) {
      $(".container").append(` <div class="row">
    <div class="hour">
      &nbsp;&nbsp;&nbsp;&nbsp;${timeStart}am&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <textarea
      class="present row"
      name=""
      id="slot${i}"
      cols="120"
      rows="5"
    ></textarea>
    <div class="saveBtn">
      <i class="fas fa-save"></i>
    </div>
  </div>`);
    } else {
      $(".container").append(` <div class="row">
    <div class="hour">
      &nbsp;&nbsp;&nbsp;&nbsp;${timeRestart.toFixed(
        0
      )}pm&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <textarea
      class="present row"
      name=""
      id="slot${i}"
      cols="120"
      rows="5"
    ></textarea>
    <div class="saveBtn">
      <i class="fas fa-save"></i>
    </div>
  </div>`);
    }
  }

  // function timeCheck (tSlot, current) {
  // for (let i=0;)
  //     }
});
