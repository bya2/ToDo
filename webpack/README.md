# Webpack

`Extension(VScode)`

```sh
# 모듈의 크기를 자동으로 계산
Import Cost
```

`Terminal`

```sh
npm i --save-dev webpack webpack-cli  #
npm i --save-dev html-webpack-plugin  # HTML 파일 생성 (스크립트 등이 자동으로 삽입되게 해줌)
npm i --save-dev webpack-dev-server   # 개발모드 서버
npm i --save-dev css-loader           # CSS 파일 읽기
npm i --save-dev style-loader         # CSS를 <style> 태그로 생성해서 <head> 내부에 넣기 (CSS 파일마다 stlye 태그를 만듬, Internal 방식이라고 함)
npm i --save-dev mini-css-extract-plugin # CSS 파일을 별도로 만들어서 가져오는 형태 (External 방식)
npm i --save-dev file-loader          # 이미지 파일 불러오기

# 이전에 빌드했던 내용 때문에 불필요한 빌드 폴더에 불필요한 파일이 남아있는 경우
npm i --save-dev clean-webpack-plugin

# 번들 사이즈 줄이기
# Webpack4부터 Tree shaking을 지원 (필요없는 파일들을 털어버린다는 의미)
npm i --save-dev lodash     # CommonJS  (네임드 import 방식을 사용하면 어차피 다 불러와서 번들 사이즈가 거의 같음)
npm i --save-dev lodash-es  # ES Module (네임드 import 방식을 사용해서 동일하게 tree-shaking)
```

`any.js`

```js
import _ from "lodash"; // Lodash의 모든 기능을 사용한다면 나쁘지 않지만, 전부 불러와서 번들 사이즈가 너무 커짐
import { each } from "lodash"; // 네임드 임포트는 어차피 모든 모듈들이 포함됌.
import each from "lodash/each"; // 필요한 모듈만 가져와서 번들 사이즈가 줄어듬.
import each from "lodash-es/each"; // tree-shaking을 통해서 더 번들 사이즈를 줄임.
import { each } from "lodash-es";
```

`webpack.config.js`

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 빌드 폴더에 HTML 파일 생성
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 시작파일 (이 파일에서 시작해서 사용하는 모듈을 모두 파악)
  output: {
    // 만들어지는 최종 파일
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 확장자가 css일 때,
        // use: ["style-loader", "css-loader"], // use는 배열의 뒤에서부터 적용
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpg$/, // 확장자가 jpg일 때,
        use: ["file-loader"],
      }
    ]
  }
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      // 정적 파일
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
};
```

`package.json`

```json
{
  "scripts": {
    "start": "webpack serve --open --mode=development",
    "build": "webpack --mode=production"
  }
}
```
