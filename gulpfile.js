const gulp        = require('gulp');
const { task }    = require('gulp');
const config      = require('./config');
const browserSync = require('browser-sync').create();
const babel       = require('gulp-babel');
const sourcemaps  = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');
const sass        = require('gulp-sass');
sass.compiler     = require('node-sass');
const cleanCSS    = require('gulp-clean-css');

/** ================================================= START HACK ================================================= */
function run(cb) {
  let phase               = 0;
  let sourcePackageStyle  = [];
  let sourcePackageScript = [];

  function handleError(error) {
    console.log(error.toString());

    this.emit('end');
  }

  function styleTasking(sourcePackageStyle) {

    phase++;

    for(options of config.styleTask) {
      sourcePackageStyle.push(options.srcs);
      gulp.src(options.srcs)
        .pipe(sass().on('error', sass.logError))
        .on('error', handleError)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({debug: false}, (details) => {
          // console.log(`${details.name}: ${details.stats.originalSize}`);
          // console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(gulp.dest(options.dest));
    }

    console.log('\x1b[42m%s\x1b[0m', `[PHASE ${phase}]: Execute Style!`);
  }

  function scriptTasking(sourcePackageScript) {
    phase++;
  
    for(options of config.scriptTask) {
      sourcePackageScript.push(options.srcs);
      gulp.src(options.srcs)
        .pipe(babel({
          presets: ['@babel/env'],
          plugins: ['transform-react-jsx']
        }))
        .on('error', handleError)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest(options.dest));
    }

    console.log('\x1b[42m%s\x1b[0m', `[PHASE ${phase}]: Execute Script!`);
  }

  styleTasking(sourcePackageStyle);
  scriptTasking(sourcePackageScript);
  
  if(config.xServer.status) {
    config.xPeriment.status = false;

    browserSync.init({
      proxy: config.xServer.proxy
    });
  }
  if(config.xPeriment.status) {
    config.xServer.status = false;

    browserSync.init({
      server: {
        baseDir: [
          "./micro_modules/",
          config.xPeriment.baseDir
        ]
      },
      port: config.xPeriment.port
    });
  }

  phase++;
  console.log('\x1b[45m%s\x1b[0m', `[PHASE ${phase}]: Run & Open Server!`);

  gulp.watch(sourcePackageStyle).on('change', function() {
    phase++;
    console.log('\x1b[44m%s\x1b[0m', `[PHASE ${phase}]: There is change on the Style Sources!`);

    styleTasking(sourcePackageStyle);
    browserSync.reload();
  });

  gulp.watch(sourcePackageScript).on('change', function() {
    phase++;
    console.log('\x1b[44m%s\x1b[0m', `[PHASE ${phase}]: There is change on the Script Sources!`);

    scriptTasking(sourcePackageScript);
    browserSync.reload();
  });

  gulp.watch(config.templates).on('change', function() {
    phase++;
    console.log('\x1b[44m%s\x1b[0m', `[PHASE ${phase}]: There is change on the Template Sources!`);
    browserSync.reload();
  });

  cb();
}
/** ================================================== END HACK ================================================== */

task(run);