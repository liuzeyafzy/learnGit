module.exports = function(grunt){

  require('load-grunt-tasks')(grunt); //加载所有的任务
  //require('time-grunt')(grunt); 如果要使用 time-grunt 插件

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {//任务：打开浏览器，同时使用livereload来使浏览器无需f5就可以刷新。
        options: {
            port: 9000,
            hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
            livereload: 35729  //声明给 watch 监听的端口
        },
        server: {
            options: {
                open: true, //自动打开网页 http://
                base: [
                    'app'  //主目录
                ]
            }
        }
    },
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'app/js',
                src: ['**/*.js', '!**/*.min.js'],
                dest: 'app/dist',
                ext: '.js'
            }]
        }
    },
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
        },
        build: {//任务：压缩*.js，不混淆变量名，保留注释，添加banner和footer
            options: {
                mangle: false, //不混淆变量名
                preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
            },
            files: [{
                expand: true,
                cwd: 'app/js',
                src: ['**/*.js', '!**/*.min.js'],
                dest: 'app/js',
                ext: '.min.js'
            }]
        },
        release: {//任务：合并压缩所有js
            files:[{
                src: ['app/js/*.min.js'],
                dest: 'app/js-min/all.min.js'
            }]
        }
    },
    less: {
        development: {//任务：将所有less文件编译为css
            options: {
                paths: ["app/css"]
            },
            files: [{
                expand: true,
                cwd: 'app/less',
                src: ['**/*.less'],
                dest: 'app/css',
                ext: '.css'
            }]
        }
    },
    autoprefixer: {// 任务：自动考虑部分css属性是否要加浏览器特定前缀
        dist : {
            options:{
                browsers: ['ie 8', '> 1%', 'Firefox <= 20', 'opera <= 36']
            },
            files: [{
                expand: true,
                cwd: 'app/css',
                src: ['**/*.css', '!**/*.prefixer.css'],
                dest: 'app/css',
                ext: '.prefixer.css'
            }],
            watch: {//这一块的功能好像并没有用到，不清楚怎么调用。使用grunt watch也调用不到这里，应该是需要把这一块提取到watch中。
                styles: {
                    files: ['app/css/*.css', '!app/css/**/*.prefixer.css'],
                    tasks: ['autoprefixer']
                }
            }
        }
    },
    csslint: {//任务：检测css文件是否存在语法错误。例如display:inline-block与float属性混合使用
        strict: {
            options: {
                import: 2
            },
            src: ['app/css/**/*.css']
        },
        lax: {
            options: {
                import: false
            },
            src: ['app/css/**/*.css']
        }
    },
    watch: {
        less: {//任务：监听less文件所在文件夹，如果改动了则触发less任务
            files: ['app/less/*.less'],
            tasks: ['less'],
            options: {
                livereload: true//暂不清楚在此处的作用，一般是与浏览器实时刷新时用到livereload文件
            }
        },
        uglify: {//任务：监听js文件所在文件夹，如果js文件（.min.js除外）被修改，则触发uglify任务
            files: ['app/js/*.js', '!app/js/*.min.js'],
            tasks: ['uglify'],
            options: {
                livereload: true
            }
        },
        livereload: {//任务：监听所有文件的改动，触发任务使浏览器实时刷新
            options: {
                livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
            },
            script:{
                files: ['app/less/{,*/}*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: false
                }
            },
            files: [  //下面文件的改变就会实时刷新网页
              'app/*.html',
              'app/less/{,*/}*.less',
              'app/style/{,*/}*.css',
              'app/js/{,*/}*.js',
              'app/images/{,*/}*.{png,jpg}'
            ]
        }
    }
  });

  //注册任务，命令行输入“grunt serve”即可执行数组中的内容。开启webserver服务并监听文件的改动自动刷新浏览器
  grunt.registerTask('serve', [
      'connect:server',
      'watch:livereload'
  ]);

  //注册任务，命令行输入“grunt doless”即可将less编译为css文件，并且自动监听less文件的修改自动编译为css
  grunt.registerTask('doless', [
      'less',
      'watch:less'
  ]);
  //注册任务，命令行输入“grunt douglify”即可将js进行压缩、混淆、合并，并且自动监听js文件的修改自动处理
  grunt.registerTask('douglify', [
      'uglify:build',
      'uglify:release',
      'watch:uglify'
  ]);

  grunt.registerTask('doautoprefixer', [
      'autoprefixer'
  ]);

  grunt.registerTask('docsslint', [
      'csslint:strict'
  ])
  grunt.registerTask('dobabel', [
      'babel'
  ])
}
