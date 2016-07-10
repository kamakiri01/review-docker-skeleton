# review-docker-skeleton

このリポジトリは、[Re:VIEW](https://github.com/kmuto/review/)を使って原稿を作成するためのミニマルな環境とツールセットです。

動作環境として、[Re:VIEW image for Docker](https://github.com/vvakame/docker-review)を想定しています。
Docker環境下でなくても、Node.jsの利用環境とRe:VIEWがインストールされた環境であれば利用できます。

## インストール


```
$ git clone git@github.com:kamakiri01/review-docker-skeleton.git
$ npm install
$ npm run init 
```
`npm install` 実行後にarticlesディレクトリが生成されている場合、 `npm run init` は不要です。

### 校正

```
$ npm run lint
```

### PDF生成
```
$ npm run pdf
```

### その他

筆者の個人利用目的で作られた環境であるため、用途によってはtextlintの設定などを変えるとより良い校正環境が得られます。その際は[textlint-rule-preset-japanese](https://github.com/azu/textlint-rule-preset-japanese)などを参考にしてください。

筆者環境では、Docker環境下では `npm install gulp` できない現象が起きています。また、同環境では `npm install` 後の `postinstall` が実行されない場合があります。これらの現象が発生する場合、Docker環境外で `npm install` を実行してください。
