/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = {
    reactStrictMode: true,
    withCSS,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
