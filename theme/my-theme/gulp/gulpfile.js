const { src, dest, watch, parallel } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function styles() {
	return src('src/scss/style.scss')
		.pipe(concat('style.min.css'))
		.pipe(scss({ style: 'compressed' }))
		.pipe(dest('../assets/css'));
}

function scripts() {
	return src(['node_modules/swiper/swiper-bundle.js', 'src/js/*.js'])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('../assets/js'));
}

function watching() {
	watch(['src/scss/*.scss'], styles);
	watch(['src/js/*.js'], scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;

exports.default = parallel(styles, scripts, watching);
