const ASSET_ROOT = 'src'
const DEST_ROOT = 'public'
//const TEMPLATES_ROOT = `${ASSET_ROOT}/templates`

module.exports = {
    paths: {
        styles: {
            src: `${ASSET_ROOT}/postcss/**/*.css`,
            dest: `${DEST_ROOT}/css`
        },
        templates: {
            src: `${ASSET_ROOT}/template/**/*.html`,
            dest: `${DEST_ROOT}/template`
        },
        scripts: {
            src: `${ASSET_ROOT}/js/main.jsx`,
            dest: `${DEST_ROOT}/js`,
            watch: `${ASSET_ROOT}/js/**/*.jsx`
        },
        images: {
            src: `${ASSET_ROOT}/img/*`,
            dest: `${DEST_ROOT}/img`,
            watch: `${ASSET_ROOT}/img/**/*.jpg`
        },
    }
}