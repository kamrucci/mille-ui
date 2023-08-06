import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default {
    input: 'index.js',
    output: {
        file: 'output.js',
        format: 'esm'
    },
    plugins: [
        scss({
            processor: () => postcss([autoprefixer()]),
            includePaths: [
                path.join(__dirname, '../../node_modules/'),
                'node_modules/'
            ],
            outputStyle: 'compressed',
            sourceMap: true,
        })
    ]
}