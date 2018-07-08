function button_click() {
  var rank01 = document.getElementById("r01").value;
  var rank02 = document.getElementById("r02").value;
  var rank03 = document.getElementById("r03").value;
  var link = "http://twitter.com/share?url=[シェアするURL]&text=" + "1. " + rank01 + "%0a2. " + rank02 + "%0a3. " + rank03 + "%0a&hashtags=RankingApp";
  window.open(link, '_blank'); // 新しいタブを開き、ページを表示

    }