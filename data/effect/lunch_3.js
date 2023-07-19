//配列から献立５品目を取得・イラスト表示
var elem = document.getElementById("lunch_image03");
var img_path = "data/img/common/";

// 第３品目の項目
if (hinmoku_2.indexOf('こんにゃくサラダ') !== -1) {

    //alert('含まれています。');
    elem.src = img_path + "konyakusarada1.png";

} else if (hinmoku_2.indexOf('チキンパティ') !== -1) {

    elem.src = img_path + "chikinnpaty.png";
    
} else if (hinmoku_2.indexOf('ローズポークとひたちぎゅうのメンチカツ') !== -1) {
    
    elem.src = img_path + "roseporktohitachigyu.png";
    
} else if (hinmoku_2.indexOf('ほっけのしおやき') !== -1) {
    
    elem.src = img_path + "hotukenoshioyaki.png";
    
} else if (hinmoku_2.indexOf('チリビーンズ') !== -1) {
    
    elem.src = img_path + "chiribinzu.png";   
    
} else if (hinmoku_2.indexOf('ビビンバのぐ') !== -1) {
    
    elem.src = img_path + "bibinbanogu.png";  
    
} else if (hinmoku_2.indexOf('もみの木') !== -1) {
    
    elem.src = img_path + "mominoki.png";    
    
} else {

    elem.src = img_path + "sample.jpg";

}

//console.log(hinmoku_2);
