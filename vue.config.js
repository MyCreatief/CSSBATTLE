module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `
                  @import "src/style/global.scss";
                `
            }
        }
    }
};