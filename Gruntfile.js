module.exports = function(grunt){

  require('load-grunt-tasks')(grunt); //加载所有的任务
  //require('time-grunt')(grunt); 如果要使用 time-grunt 插件

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
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
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
        },
        build: {//任务一：压缩a.js，不混淆变量名，保留注释，添加banner和footer
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
        release: {//任务四：合并压缩a.js和b.js
            files:[{
                src: ['app/js/*.min.js'],
                dest: 'app/js-min/all.min.js'
            }]
        }
    },
    less: {
      development: {
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
          // files: {
          //   "app/css/index.css": "app/less/index.less"
          // }
      }
    },
    watch: {
        less: {
            files: ['app/less/*.less'],
            tasks: ['less'],
            options: {
                livereload: true
            }
        },
        uglify: {
            files: ['app/js/*.js', '!app/js/*.min.js'],
            tasks: ['uglify'],
            options: {
                livereload: true
            }
        },
        livereload: {
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

  grunt.registerTask('serve', [
      'connect:server',
      'watch:livereload'
  ]);
  grunt.registerTask('doless', [
      'less',
      'watch:less'
  ]);
  grunt.registerTask('douglify', [
      'uglify:build',
      'uglify:release',
      'watch:uglify'
  ]);
}
