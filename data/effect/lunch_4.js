//配列から献立５品目を取得・イラスト表示
var elem = document.getElementById("lunch_image04");
var img_path = "data/img/common/";

// 第４品目の項目
if (hinmoku_3.indexOf('きょほう') !== -1) {

    //alert('含まれています。');
    elem.src = img_path + "kyoho1.png";

} else if (hinmoku_3.indexOf('フライドスイートポテト') !== -1) {

    elem.src = img_path + "furaidosweetpoteto.png";
    
} else if (hinmoku_3.indexOf('わかめサラダ') !== -1) {

    elem.src = img_path + "wakamesarada.png";
    
} else if (hinmoku_3.indexOf('リトルスターサラダ') !== -1) {

    elem.src = img_path + "litlestarsarada.png";
    
    
} else if (hinmoku_3.indexOf('ごぼうサラダ') !== -1) {

    elem.src = img_path + "gobousarada.png"; 
    
    
} else if (hinmoku_3.indexOf('キャベツとハムのサラダ') !== -1) {

    elem.src = img_path + "kyabetutosarada.png";     
    
    
    
    
    

} else {

    elem.src = img_path + "sample.jpg";

}

//console.log(hinmoku_3);
