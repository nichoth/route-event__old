// @ts-check
const path = require('path')
const esbuild = require('esbuild')

//
// build CJS version
//
async function main () {
    // cjs
    await esbuild.build({
        entryPoints: ['src/index.mjs'],
        bundle: false,
        keepNames: true,
        format: 'cjs',
        outfile: path.join('./dist/', 'index.cjs'),
        platform: 'browser'
    })

    // esm
    // await esbuild.build({
    //     entryPoints: ['src/index.js'],
    //     bundle: false,
    //     keepNames: true,
    //     format: 'esm',
    //     outfile: path.join('./dist/', 'index.mjs'),
    //     platform: 'browser'
    // })
}

main()
