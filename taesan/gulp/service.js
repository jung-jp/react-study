const service = (config) => {
    const
        gulp        = require('gulp'),
        util       = require('gulp-util'), //유틸
        react       = require('gulp-react'), //JSX transform.js 가 하던일
        clean       = require('gulp-clean'), // js 파일 지워주는거
        webpack     = require('webpack-stream'),
        bs = require('browser-sync').create(),
        runSequence = require('run-sequence');

    gulp.task('clean', () => {
        gulp.src(config.COMPILE_DIR + '*', {read: false}).pipe(clean());
    });

    gulp.task('compile', () =>  {//jsx 를 js로 컴파일해주는놈.
        gulp.src(config.COMPONENT_DIR + '**/*.jsx')
            .pipe(react()) //react 변환
            .pipe(gulp.dest(config.COMPILE_DIR)); //해당 경로에 풀어놓는다.
    });

    gulp.task('webpack', () => {//웹팩은 index.js만 감시하고

        gulp.src(config.COMPILE_DIR + 'controller/index.js')
            .pipe(webpack(
                require('../webpack.config.js'), // 셋팅 옵션이들어감.
                null,
                (err, stats) => {
                    console.log(err, stats);
                }
            ))
            .pipe(gulp.dest(config.BUNDLE_DIR));
    });

    gulp.task('bs', () => {
        bs.init({
            files: [
                config.APP_DIR + '**/*'
            ],
            proxy: {
                target: config.HOST + ':' + config.TOMCAT_PORT
            }
        });
    });

    gulp.task('watch', () => {
        gulp.watch(config.COMPONENT_DIR + '**/*.jsx', () => { runSequence('compile') });
        gulp.watch(config.COMPILE_DIR + 'index.js', () => { runSequence('webpack', bs.reload) }); //index.js 를 감시하지만 거기에 연관되어있는애가 바뀌면 같이 변경한다.
        gulp.watch(config.BASE_DIR + 'views/*.jsp', bs.reload);
        gulp.watch(config.COMPILE_DIR, bs.reload);
    });

    gulp.task('service-static', (cbf) => {
        runSequence(['compile', 'webpack', 'bs', 'watch'], cbf);
    });
};

module.exports = service;