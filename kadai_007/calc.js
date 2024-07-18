// 変数numに0～30までのランダムな整数を代入する
let num = Math.floor(Math.random() * 30) + 1;

/* 変数num出力確認用
console.log(num);
*/

// 変数numを3で割ったときの余りが0&&（かつ）変数numを5で割ったときの余りが0であれば「3と5の倍数です」と出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

// 変数numを5で割ったときの余りが0であれば「5の倍数です」と出力する
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

// 変数numを3で割ったときの余りが0であれば「3の倍数です」と出力する
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 上記に該当しない場合の表示
else {
    console.log(num);
}