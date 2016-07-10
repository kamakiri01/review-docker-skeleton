var fs = require("fs");
var del = require("del");
var fsx = require("fs-extra");
var path = require("path");
var gulp = require("gulp");
var shell = require("gulp-shell");

const DIRNAME_ARTICLES = "articles";
const PATH_REVIEW_BIN = "/usr/local/bin/";
const PATH_REVIEW_INIT = path.resolve(PATH_REVIEW_BIN, "review-init");
const PATH_REVIEW_PDFMAKER = path.resolve(PATH_REVIEW_BIN, "review-pdfmaker");

gulp.task("init", shell.task(["review-init" + " " + DIRNAME_ARTICLES], {cwd: __dirname}));

gulp.task("_cleanTmp", () => {
    del.sync([path.resolve(__dirname, "tmp")]);
});

gulp.task("_copyTmp", ["_cleanTmp"], () => {
    var tmpDir = path.resolve(__dirname, "tmp");
    var reDir = path.resolve(__dirname, DIRNAME_ARTICLES);
    var filter = /.*?\.re$/;
    fs.mkdirSync(tmpDir);
    fsx.copySync(reDir, tmpDir, filter);
});

gulp.task("lint", ["_copyTmp"], shell.task(["textlint" + " " + path.resolve(__dirname, "tmp")], {ignoreErrors: true}));

gulp.task("_cleanPdf", () => {
    del.sync([
        path.resolve(__dirname, DIRNAME_ARTICLES, "book.pdf"),
        path.resolve(__dirname, DIRNAME_ARTICLES, "book-pdf")
    ]);
});

gulp.task("pdf", ["_cleanPdf"], shell.task([PATH_REVIEW_PDFMAKER + " " + path.resolve(__dirname, DIRNAME_ARTICLES, "config.yml")], {cwd: path.resolve(__dirname, DIRNAME_ARTICLES)}));

