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
 * @return {String}           メッセージ
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
            return "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            return "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}
