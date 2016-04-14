// config
const
    BASE_DIR = './src/main/webapp/WEB-INF/',
    APP_DIR = BASE_DIR+'resources/',
    JS_DIR = APP_DIR + 'js/',
    COMPILE_DIR = JS_DIR + 'compile/'
    COMPONENT_DIR = JS_DIR + 'component/',
    BUNDLE_DIR = JS_DIR + 'bundle/',
    config = {
        BASE_DIR: BASE_DIR,
        APP_DIR: APP_DIR,
        JS_DIR : JS_DIR,
        COMPILE_DIR : COMPILE_DIR,
        COMPONENT_DIR : COMPONENT_DIR,
        BUNDLE_DIR : BUNDLE_DIR,
        HOST: 'local.coupang.com',
        TOMCAT_PORT: '8080'
    };

require('./gulp/service')(config);
