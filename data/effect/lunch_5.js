//配列から献立５品目を取得・イラスト表示
var elem = document.getElementById("lunch_image05");
var img_path = "data/img/common/";

// 第５品目の項目
if (hinmoku_4.indexOf('あきなすカレーライス') !== -1) {

    //alert('含まれています。');
    elem.src = img_path + "akinasukare.png";
    

} else if (hinmoku_4.indexOf('チキンカレーライス') !== -1) {

    elem.src = img_path + "chikinkareraisu.png";     
    

} else if (hinmoku_4.indexOf('ミネストローネ') !== -1) {

    elem.src = img_path + "minesutorone1.png";
    
} else if (hinmoku_4.indexOf('しらすぼしのかきたまじる') !== -1) {

    elem.src = img_path + "shirasuboshinokakitamaziru.png";
    
} else if (hinmoku_4.indexOf('ピリカラとんじる') !== -1) {   
    
    elem.src = img_path + "pirikaratonziru.png";    
    
} else if (hinmoku_4.indexOf('アップルシャーベット') !== -1) {   
    
    elem.src = img_path + "appleshabeto.png"; 


} else if (hinmoku_4.indexOf('野菜スープ') !== -1) {   
    
    elem.src = img_path + "yasainosupu.png"; 

} else {

    elem.src = img_path + "sample.jpg";

}
    
    
//console.log(hinmoku_4);
