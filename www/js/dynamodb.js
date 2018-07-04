const RANKING_NUM = 10;

// DynamoDBの設定
AWS.config.update({
    region         : "ap-northeast-1",
    accessKeyId    : "AKIAIFYR3V7G2BWCMCXQ",
    secretAccessKey: "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"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

/**
 * DynamoDBにデータを挿入する
 * @param  {String} tableName テーブル名
 * @param  {KeyMap} data      挿入するデータ
 */
function insert(tableName, data) {
    // 挿入するデータを作成
    const params = {
        TableName: tableName,
        Item     : data
    };

    // DBへデータを挿入
    dynamodb.put(params, function(err, data) {
        if (err) {
            console.log("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
            console.log("PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
        }
    });
}


/**
 * 入力されたランキングデータを取得してDBへ登録する
 */
$('#debug_db_insert_button').on('click', function() {
    let rankingData = [];

    for(let i = 0; i < RANKING_NUM; i++) {
        const selecter = 'input[name="ranking_field_' + i + '"]';
        rankingData.push($(selecter).val());
    }

    // データを整形
    let data = {
        "userId": localStorage.getItem(USER_ID),
        "datetime": getCurrentTime(),
        "rankingData": JSON.stringify(rankingData)
    }

    insert('ranking', data);
});

//現在時刻取得（yyyy/mm/dd hh:mm:ss）
function getCurrentTime() {
    var now = new Date();
    var res = "" + now.getFullYear() + "/" + padZero(now.getMonth() + 1) + 
        "/" + padZero(now.getDate()) + " " + padZero(now.getHours()) + ":" + 
        padZero(now.getMinutes()) + ":" + padZero(now.getSeconds());
    return res;
}

//先頭ゼロ付加
function padZero(num) {
    var result;
    if (num < 10) {
        result = "0" + num;
    } else {
        result = "" + num;
    }
    return result;
}