const 
	gulp        = require('gulp'),
	gutil       = require('gulp-util'),
	react       = require('gulp-react'),
	clean       = require('gulp-clean'),
	webpack     = require('webpack-stream'),
	browserSync = require('browser-sync'),
	runSequence = require('run-sequence');

gulp
.task('jsClean', () =>
    gulp.src('app/**/*.js', {read: false})
    .pipe(clean())
)
.task('reactify', () => 
    gulp.src('app/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('app'))
)
.task('packJs', () => 
    gulp.src('app/js/index.js')
    .pipe(webpack(
		require('./webpack.config.js'),
		null,
		(err, stats) => {
			console.log(err, stats);
		}
    ))
    .pipe(gulp.dest('app/js/'))
)
.task('browserSync', ()=> {
	browserSync({
		server: {
			baseDir: 'app',
			routes: {
				"/node_modules": "node_modules"
			}
		}
	});
})
.task('watch', () => {
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.jsx', ()=>{ runSequence('reactify')});
	gulp.watch('app/js/index.js', ()=>{ runSequence('packJs')});
	gulp.watch('app/js/bundle.js', browserSync.reload);
})
.task('default', (callback) => {
	runSequence('jsClean', 'reactify', 'packJs', ['browserSync', 'watch'], callback);
});