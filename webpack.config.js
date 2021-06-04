const path = require('path')

module.exports = {
    //Primeiro arquivo que vai ser carregado pela aplicação 
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        //pasta onde contem os arquivos publicos da minha aplicação
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            { // Se ela terminar com .JS
                test: /\.js$/,
                //Não converter aquivos JS do node_modules pois é resonsabilidade da própria biblioteca que instalamos
                exclude: /node_modules/,
                //converter todo arquivo JS que não esteja na node_modules usando loder
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}