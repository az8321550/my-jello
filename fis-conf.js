var path = require('path');

// --------------------------------
// 支持 amd 设置
// --------------------------------
fis.config.set('modules.postprocessor.vm', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('settings.postprocessor.amd', {

    packages: [

        // 用来存放 libs 库
        {
            name: 'libs',
            location: 'static/libs/',
            main: 'index'
        }
    ]
});


// --------------------------------
// sass/scss 配置
// --------------------------------

// 设置 sass 的 include_paths 便于组件引入
fis.config.set('settings.parser.sass.include_paths', [
    './static/scss',
    './components/compass-mixins',
    './components/sasscore'
]);

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
//fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {

    // css
    //'pkg/index.css': ['page/index.vm'],   // 因为依赖会被打包，所以这个规则会把 frame.vm 依赖的 css 打包在一起。
    //'pkg/all.css': ['components/bootstrap/css/bootstrap.css','static/scss/global.scss','widget/header/header.scss','widget/footer/footer.scss'],
    //'pkg/all2.js': ['widget/header/header.js','widget/footer/footer.js'],
    //'pkg/all.js': ['components/jquery/jquery.js','widget/header/header.js','widget/footer/footer.js']
    'pkg/framework.js': ['components/jquery/jquery.js','page/index.vm']
});


fis.config.set('roadmap.path', [
    {
        reg: /^\/components\/.*\.js$/i,
        isMod: true,
        jswrapper: {
            type: 'amd'
        }
    },
    {
        reg: /^\/components\/.*\.(?:less|md)$/i,
        release: false
    },

    {
        reg: 'doc/**.md',
        release: false
    },

    {
        reg: /^\/static\/libs\/(.*\.js)$/i,
        isMod: true,
        release: '${statics}/${namespace}/libs/$1'
    }
].concat(fis.config.get('roadmap.path', [])));


// js 模板支持
fis.config.set('modules.parser.tmpl', 'utc');
// fis.config.set('roadmap.ext.tmpl', 'js');
