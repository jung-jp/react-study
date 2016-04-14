module.exports = {
    /*
     watch: true, // 파일 변환시 번들링을 다시 하는데, 비용이 좀 많이 든다.
     entry: { // 엔트리는 걸프에서 지정해놓았기 때문에, 여기서 별도로 지정안함.
     app: 'app/js/app.js'
     },
     */
    output : {
        filename: 'bundle.js'
    },
    /*
     module: {
     loaders: [
     { test: /\.css$/, loader: "style!css" }
     ]
     },
     */
    devtool: 'source-map'
}