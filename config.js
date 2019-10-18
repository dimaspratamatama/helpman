/**
 * BASEPATH IN-DEFINE
 * THIS IS DEFAULT DIRECTORY FOR COLLECTING YOUR MICRO MODULE/LIB
 * Feel free for add new Output Dir
 */
const outputDir = (dest) => {
    return `./micro_modules${dest}`;
};

/**
 * MASTER CONFIGURATION
 * SOURCES & Task REGISTRY
 */
module.exports = {
    /**
     * IF YOU WANT COOK SOURCES FOR PROJECT WITH HAS SERVER, JUST POINTING IT!
     * Example for http://localhost/laravel, http://localhost:8000, etc
     * Don't forget set status become "true" to ACTIVATE xServer and xPeriment become "false"
     */
    xServer: {
        status   : false, //set true for activated this Task
        proxy    : "http://localhost:8089/" //what proxy you want direct (Example for http://localhost/laravel, http://localhost:8000, etc)
    },
    /**
     * IF YOU WANT COOK SOURCES JUST FOR EXPERIMENT, PLAY, LEARN, OR BUILD & COLLECTING YOUR OWN MICRO HELPER!
     * Assume this is like JsFiddle/Stackblitz with Real Environtment
     * Don't forget set status become "true" to ACTIVATE xPeriment and xServer become "false"
     */
    xPeriment: {
        status   : true, //set true for activated this Task
        baseDir  : "./xperiment/react-cdn/", //Directory what you want cook/play
        port     : 1345 //free so as not to intercept another active port
    },
    /**
     * WHAT Template you want watch
     * You can use asterix like foldername/*.html or folder/*.vm
     */
    templates: [
        "./xperiment/react-cdn/index.html",
        "./xperiment/vue-cdn/index.html",
        "./xperiment/componentizing/index.html",
        "./xperiment/web-component/index.html"
    ],
    /**
     * Registry and Collecting for your Style Task here
     * Special for SASS/SCSS (For Now, Maybe can add LESS etc)
     * Every if you create new scss, Just regis here and set where you want distribute the result to project
     */
    styleTask: [
        {
            srcs: "./xperiment/componentizing/app.scss",
            dest: outputDir("/componentizing/")
        }
    ],
    /**
     * Registry and Collecting for your Script Task here
     * Special for ES6 (For Now, Maybe can add Typescript etc)
     * Every if you create new javascript, Just regis here and set where you want distribute the result to project
     */
    scriptTask: [
        {
            srcs: "./kitchen/js/micro_lib/impack/impack.js", //import package without bundling/bulking all sources in one file
            dest: outputDir("/impack/")
        },
        {
            srcs: "./xperiment/react-cdn/h1.js", //example create component jsx h1
            dest: outputDir("/react-cdn/")
        },
        {
            srcs: "./xperiment/react-cdn/hr.js", //example create component jsx hr
            dest: outputDir("/react-cdn/")
        },
        {
            srcs: "./xperiment/react-cdn/p.js", //example create component jsx p
            dest: outputDir("/react-cdn/")
        },
        {
            srcs: "./xperiment/react-cdn/app.js", //example create micro react app with cdn
            dest: outputDir("/react-cdn/")
        },
        {
            srcs: "./xperiment/vue-cdn/app.js", //example create micro vue app with cdn
            dest: outputDir("/vue-cdn/")
        },
        {
            srcs: "./kitchen/js/micro_lib/cui/cui.js", //create component with vanilla js
            dest: outputDir("/cui/")
        },
        {
            srcs: "./kitchen/js/micro_lib/cemplate/cemplate.js", //create template with vanilla js
            dest: outputDir("/cemplate/")
        },
        {
            srcs: "./xperiment/componentizing/app.js", //example create web component use vanilla js
            dest: outputDir("/componentizing/")
        },
        {
            srcs: "./kitchen/js/micro_component/wcomponent/card.js", //create custom component card
            dest: outputDir("/wcomponent/")
        },
        {
            srcs: "./kitchen/js/micro_component/wcomponent/button.js", //create custom component button
            dest: outputDir("/wcomponent/")
        }
    ]
};