# review-docker-skeleton

このリポジトリは、[Re:VIEW](https://github.com/kmuto/review/)を使って原稿を作成するためのミニマルな環境とツールセットです。

動作環境として、[Re:VIEW image for Docker](https://github.com/vvakame/docker-review)を想定しています。
Docker環境下でなくても、Node.jsの利用環境とRe:VIEWがインストールされた環境であれば利用できます。

## インストール


```
$ git clone
$ npm install
$ npm run init 
```

### 校正

```
$ npm run lint
```

### PDF生成
```
$ npm run pdf
```
