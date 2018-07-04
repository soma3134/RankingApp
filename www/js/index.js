const USER_ID = 'RANKING_USER_ID';

/**
 * HTML、JSの全ての要素が読み込まれてから呼ばれるイベント
 */
document.addEventListener('deviceready', function() {
    console.log('deviceready');

    createUserId();

    // ソートのための設定
    $('.sortable').sortable();

    // Twitter連携のための設定
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
}, false);


/**
 * ユーザIDを生成する
 */
function createUserId() {
	if(localStorage.getItem(USER_ID) !== null) {
		return;
	}

    // 使用文字の定義
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // 桁数の定義
    const len = 16;

    // ランダムな文字列の生成
    let result = "";
    for(let i = 0; i < len; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }

    // ローカルストレージへ記録
    localStorage.setItem(USER_ID, result);
}
