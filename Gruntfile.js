/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['js/vendor/*.js', 'js/*.js', '!js/vendor/html5shiv.js','!js/vendor/jquery-1.10.1.min.map'],
                dest: '.build/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    Modernizr: true
                }
            },
            //gruntfile: {
            //    src: 'Gruntfile.js'
            //},
            lib: {
                src: ['js/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            //gruntfile: {
            //    files: '<%= jshint.gruntfile.src %>',
            //    tasks: ['jshint:gruntfile']
            //}
            //  ,
            javascript: {
                files: 'js/**/*.js',
                tasks: ['clean', 'copy', 'concat', 'uglify']
            },
            css: {
                files: 'css/**/*.css',
                tasks: ['copy', 'cssmin']
            },
            cache: {
                files: 'manifest.appcache',
                tasks:['copy']
            },
            html: {
                files: '*.html',
                tasks: ['copy', 'htmlmin']
            }
        },
        clean: [".build"],
        cssmin: {
            combine: {
                files: {
                    //'build/css/output.css': ['css/main.css', 'css/normalize.css']
                    '.build/css/homepage.css': ['css/normalize.css', 'css/main2.css', 'css/homepage.css','css/jquery.bxslider.css'],
                    '.build/css/ie.css': ['css/ie.css'],
                    '.build/css/inner.css': ['css/normalize.css', 'css/main2.css', 'css/inner.css','css/jquery.bxslider.css'],
                }
            },
            minify: {
                expand: true,
                cwd: '.build/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css/',
                ext: '.min.css'
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'build/index.html': 'index.html',     // 'destination': 'source'
                    'build/inner.html': 'inner.html',
                    'build/index2.html': 'index2.html',
                    'build/inner2.html': 'inner2.html'
                }
            },
            dev: {                                       // Another target
                files: {
                    'build/404.html': '404.html'
                }
            }
        },
        copy: {
            main: {
                files: [
                  //{ expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile' }, // includes files in path
                  //{ expand: true, src: ['path/**'], dest: 'dest/' }, // includes files in path and its subdirs
                  //{ expand: true, cwd: 'path/', src: ['**'], dest: 'dest/' }, // makes all src relative to cwd
                  //{ expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile' } // flattens results to a single level
                  { expand: true, src: ['img/**'], dest: 'build/' },
                   { expand: true, src: ['js/vendor/html5shiv.js'], dest: 'build/' },
                   { expand: true, src: ['js/vendor/jquery-1.10.1.min.map'], dest: 'build/' },
                  { expand: true, src: ['robots.txt', 'humans.txt', 'favicon.ico', 'crossdomain.xml', '.htaccess', 'apple-touch-icon-114x114-precomposed.png', 'apple-touch-icon-144x144-precomposed.png', 'apple-touch-icon-57x57-precomposed.png', 'apple-touch-icon-72x72-precomposed.png', 'apple-touch-icon-precomposed.png', 'apple-touch-icon.png','manifest.appcache'], dest: 'build/', filter: 'isFile' }
                ]
            }
        }
        //,glue: {
        //    icons: {
        //        src: 'img/icon',
        //        dest: 'build/img/icon'
        //    },
        //    main: {
        //        src: 'img',
        //        options: '--css=build/css --img=build/img/ --less --namespace=zeheng --optipng'
        //    }
        //}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-glue');

    // Default task.
    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'htmlmin', 'clean']);
    grunt.registerTask('build', ['copy', 'jshint', 'qunit', 'concat', 'uglify', 'cssmin', 'htmlmin', 'clean', 'watch']);
    grunt.registerTask('product', ['copy', 'jshint', 'qunit', 'concat', 'uglify', 'cssmin', 'htmlmin', 'clean']);

};
