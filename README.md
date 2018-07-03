# ランキングアプリ "RankingApp"
好きなランキングをメモできる便利なアプリ
ある程度完成したら↓にスクリーンショットを貼るべし

# Dependency
- Node.js v8.11.0
- npm 5.8.0
- Apatch Cordova 8.0.0

# Setup
1. Node.jsとnpmを以下のサイトからダウンロードしてインストール
https://nodejs.org/ja/download/
    ```
    $ node -v
    v8.11.0
    $ npm -v
    5.8.0
    ```
2. Cordovaをインストール
    ```
    $ npm install -g cordova
    $ cordova -v
    8.0.0
    ```

# Usage
基本は**RankingApp/www**以下を編集する

- ブラウザで確認したい場合は、**RankingApp/www/index.html**を実行すればOK
- Androidで実行したい場合は、以下の手順を実施してAndroidStudioでビルドする
  AndroidStudioで開くファイルは、「後でファイルのパスを書く」
    ```
    $ cd RankingApp
    $ cordova platform add android #初回のみ実行
    $ cordova prepare # RankingApp/www以下を編集するたびに実行
    ```
- iOSで実行したい場合は、以下の手順を実施してXcodeでビルドする
  Xcodeで開くファイルは、「後でファイルのパスを書く」
    ```
    $ cd RankingApp
    $ cordova platform add ios #初回のみ実行
    $ cordova prepare # RankingApp/www以下を編集するたびに実行
    ```

# Licence

# Authors
- [evitch](https://github.com/yuuta040208)
- [soma3124](https://github.com/soma3134)
- [unko]()

# References
