// // // ESM
// // // CommonJS - Node.js 방식

// // //import
// // import autoprefixer from 'autoprefixer';
// // require();
// const autoprefixer = require('autoprefixer');

// // //export
// // module.exports
// module.exports = {
//     plugins: [
//         autoprefixer
//     ],
// }

module.exports = {
    plugins: [
        require('autoprefixer')
    ],
}

