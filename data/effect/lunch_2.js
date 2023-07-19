//配列から献立５品目を取得・イラスト表示
var elem = document.getElementById("lunch_image02");
var img_path = "data/img/common/";

// 第２品目の項目
if (hinmoku_1.indexOf('ぎゅうにゅう') !== -1) {

    //alert('含まれています。');
    elem.src = img_path + "gyunyu1.png";

} else if (hinmoku_1.indexOf('チョコケーキ') !== -1) {

    elem.src = img_path + "chokokeki.png";
    
} else if (hinmoku_1.indexOf('xxxxx') !== -1) {

    elem.src = img_path + "xxxxx.png";    

} else {

    elem.src = img_path + "sample.jpg";

}

//console.log(hinmoku_1);
