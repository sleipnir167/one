var $window = $(window);
var $year = $("#js-year");
var $month = $("#js-month");
var $tbody = $("#js-calendar-body");

var today = new Date();
var currentYear = today.getFullYear(),
  currentMonth = today.getMonth();

$(function () {
  callenderSet(currentYear, currentMonth);
  calendarBody(currentYear, currentMonth, today);
});

function callenderSet(year, month) {
  $("#js-year").text(year);
  $("#js-month").text(month + 1);
}

function calendarBody(year, month, today) {
  var todayYMFlag =
    today.getFullYear() === year && today.getMonth() === month ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
  var startDate = new Date(year, month, 1); // その月の最初の日の情報
  var endDate = new Date(year, month + 1, 0); // その月の最後の日の情報
  var startDay = startDate.getDay(); // その月の最初の日の曜日を取得
  var endDay = endDate.getDate(); // その月の最後の日の曜日を取得
  var textSkip = true; // 日にちを埋める用のフラグ
  var textDate = 1; // 日付(これがカウントアップされます)
  var tableBody = ""; // テーブルのHTMLを格納する変数

  console.log("startDate:" + startDate);
  console.log("endDate:" + endDate);
  console.log("startDay:" + startDay);
  console.log(endDay);
  console.log(textSkip);
  console.log(textDate);
  console.log(tableBody);
  console.log(i % 6);

  for (var i = 1; i != (endDate.getDate() + startDay); i++) {

    console.log(i);

    if(i === startDay){
      textSkip = false;
    }

    if (i % 7 === 1) {
      tableBody += "<tr>";
    }

    if (textSkip === true) {
      tableBody += `<th></th>`;
    } else {
      tableBody += `<th>${textDate}</th>`;
      textDate++;
    }

    if (i % 7 === 0) {
      tableBody += "</tr>";
    }

    console.log(tableBody);

  }

  $tbody.html(tableBody);
}

// $window.on('load',function(){
//   console.log("test");
//   calendarHeading(currentYear, currentMonth);
//   calendarBody(currentYear, currentMonth, today);
// });

// function calendarBody(year, month, today){
//   var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false; // 本日の年と月が表示されるカレンダーと同じか判定
//   var startDate = new Date(year, month, 1); // その月の最初の日の情報
//   var endDate  = new Date(year, month + 1 , 0); // その月の最後の日の情報
//   var startDay = startDate.getDay();// その月の最初の日の曜日を取得
//   var endDay = endDate.getDate();// その月の最後の日の曜日を取得
//   var textSkip = true; // 日にちを埋める用のフラグ
//   var textDate = 1; // 日付(これがカウントアップされます)
//   var tableBody =''; // テーブルのHTMLを格納する変数

//   for (var row = 0; row < 6; row++){
//     var tr = '<tr>';

//     for (var col = 0; col < 7; col++) {
//       if (row === 0 && startDay === col){
//         textSkip = false;
//       }
//       if (textDate > endDay) {
//         textSkip = true;
//       }
//       var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
//       var textTd = textSkip ? ' ' : textDate++;
//       var td = '<td class="'+addClass+'">'+textTd+'</td>';
//       tr += td;
//     }
//     tr += '</tr>';
//     tableBody += tr;
//   }
//   $tbody.html(tableBody);
// }

// function calendarHeading(year, month){
//   $year.text(year);
//   $month.text(month + 1);
// }
