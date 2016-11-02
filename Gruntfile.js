module.exports = function(grunt) {
    'use strict';

    //Local server ports
    var LIVERELOAD_PORT = 35723;
    var SERVER_PORT = 9000;
    var RUNNER_PORT = 9002;

    //Project config
    var buildNumber = '';
    var CONFIG = {
        localDevRemoteEnvironment:'dev',
        name: 'my-auto',
        app: 'public',
        test: 'test',
        server: 'server',
        src: 'public/scripts',
        dist: 'dist/www',
        bower: 'public/bower_components',
        tmp: '.tmp',
        //Enviornment specific settings
        dev: {
            options: {
                variables: {
                    'repo': 'DSP-SNAPSHOT'
                }
            }
        },
        prod: {
            options: {
                variables: {
                    'repo': 'DSP'
                }
            }
        }
    };

    //For adding build number to zip
    if (grunt.option('buildNumber')) {
        buildNumber = grunt.option('buildNumber');
    }

    //Connect - Livereload setup
    var lrSnippet = require('connect-livereload')({
        port: CONFIG.livereload
    });

    var pkg = grunt.file.readJSON('package.json');
    var uniqueKey = new Date().valueOf().toString();
    var distFilename = 'scripts/bootstrapper.'+ uniqueKey +'.js';
    var distCSSFileName = 'stylesheets/main.min.' + uniqueKey + '.css';


    //Connect - static directory
    var mountFolder = function(connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

    // Time grunt tasks
    require('time-grunt')(grunt);

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var logTestString = 'This is a log test string';

    // Project configuration
    grunt.initConfig({
        distCSSFileName : distCSSFileName,
        uniqueKey : uniqueKey,
        distFilename: distFilename,
        pkg: pkg,
        logTestString: logTestString,
        meta: {
            banner: '/**\n' + ' * <%= pkg.name %>\n' + ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
            + ' * @link <%= pkg.homepage %>\n' + ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n'
            + ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' + ' */\n'
        },

        // Project settings
        config: CONFIG,
        //Project Configuration
        ngconstant : {
            options: {
                wrap: 'define([\'angular\'], function (angular)\n\n {{%= __ngModule %}\n});'
            }
        },
        // Watch task configuration
        watch: {
            options: {
                nospawn: true,
                livereload: '<%= connect.livereload %>'
            },
            styles: {
                files: [
                    '<%= config.app %>/stylesheets/**/*.css',
                    '!<%= config.app %>/stylesheets/main.min.css'
                ],
                tasks: ['cssmin']
            },
            less: {
                files: ['<%= config.app %>/stylesheets/*.less','<%= config.app %>/stylesheets/**/*.less'],
                tasks: ['less','cssmin']
            },
            scripts: {
                files: [
                    '<%= config.test %>/e2e/**/*.js',
                    '<%= config.test %>/spec/**/*.js',
                    '<%= config.app %>/scripts/**/*.js'
                ]
            },
            test: {
                files: ['test/spec/**/*.js'],
                tasks: ['karma']
            }
        },

        // Clean task configuration
        clean: {
            build: ['<%= config.dist %>'],
            test: ['test-target/'],
            dist: ['<%= config.app %>/stylesheets/main.min.<%=  uniqueKey %>.css']
        },
        // Preview server configuration
        connect: {
            livereload: {
                options: {
                    port: SERVER_PORT,
                    open: true,
                    base:'public',
                    hostname: 'localhost'
                }
            },
            test: {
                options: {
                    port: RUNNER_PORT,
                    base: ['.tmp', '.']
                }
            },
            docs: {
                options: {
                    useAvailablePort: true,
                    keepalive: true,
                    open: true,
                    middleware: function(connect) {
                        return [mountFolder(connect, '.'), mountFolder(connect, '.tmp'), mountFolder(connect, 'docs')];
                    }
                }
            },
            production: {
                options: {
                    keepalive: true,
                    port: 8000,
                    middleware: function(connect, options) {
                        return [
                            // rewrite requirejs to the compiled version
                            function(req, res, next) {
                                if (req.url === '<%= config.bower %>/requirejs/require.js') {
                                    req.url = '/dist/require.min.js';
                                }
                                next();
                            }, connect.static(options.base)

                        ];
                    }
                }
            }
        },

        // Karma Unit configuration
        karma: {
            runner: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        //JSHint task -
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '<%= config.src %>/**/*.js'
            ],
            test: [
                '<%= config.test %>/e2e/**/*.js',
                '<%= config.test %>/spec/**/*.js'
            ]
        },

        // Requirejs build configuration
        requirejs: {
            compile: {
                options: {
                    out: '<%= config.dist %>/' + distFilename,
                    normalizeDirDefines: 'all',
                    optimize: 'none',
                    wrap: true,
                    skipDirOptimize: false,
                    generateSourceMaps: false,
                    include: ['bootstrapper'],
                    name: 'app',
                    removeCombined: true,
                    baseUrl: '<%= config.src %>/',
                    // Since we are not using the browser and bypassing the catalog manager.
                    paths: {
                        widgets: '../../conf/components'
                    },
                    config: {
                        text: {
                            env: 'node'
                        }
                    },
                    findNestedDependencies: true,
                    mainConfigFile: '<%= config.src %>/config.js',
                    done: function(done, output) {
                        var duplicates = require('rjs-build-analysis').duplicates(output);

                        if (duplicates.length > 0) {
                            grunt.log.subhead('Duplicates found in requirejs build:');
                            grunt.log.warn(duplicates);
                            done(new Error('r.js built duplicate modules, please check the excludes option.'));
                        }
                        done();
                    }
                }
            }
        },

        //Changelog - https://www.npmjs.org/package/grunt-changelog
        changelog: {
            sample: {
                options: {
                    dest: 'release-notes/<%= pkg.version %>.txt',
                    partials: {
                        features: '{{#each features}}{{> feature}}{{/each}}',
                        feature: '[NEW] {{this}}\n',
                        fixes: '{{#each fixes}}{{> fix}}{{/each}}',
                        fix: '[FIX] {{this}}\n'
                    }
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        cwd: 'public',
                        expand: true,
                        src: [
                            'index.html',
                            'images/*.*',
                            'bower_components/angular-rangeslider/angular.rangeSlider.css'
                        ],
                        dest: '<%= config.dist %>/'
                    },
                    {
                        cwd: 'public',
                        expand: true,
                        src: [
                            'bower_components/requirejs-plugins/src/**',
                            'bower_components/es6-promise/**',
                            'bower_components/highcharts/**',
                            'bower_components/Font-Awesome/**'
                        ],
                        dest: '<%= config.dist %>/'
                    },{
                        expand: false,
                        src: ['<%= config.app %>/stylesheets/main.min.css'],
                        dest: '<%= config.dist %>/stylesheets/main.min.<%=  uniqueKey %>.css'
                    },
                    {
                        cwd: 'public/views/',
                        expand: true,
                        src: [
                            '**'
                        ],
                        dest: '<%= config.dist %>/<%=  uniqueKey %>/'
                    }

                ]
            }
        },

        cssmin: {
            options: {},
            target: {
                files: {
                    "public/stylesheets/main.min.css": [
                        'public/stylesheets/app.css',
                        'public/stylesheets/**/*.css',
                        '!public/stylesheets/main.min.css'
                    ]
                }
            }
        },

        less: {
            development: {
                files: {
                    '<%= config.app %>/stylesheets/app.css': '<%= config.app %>/stylesheets/*.less'
                }
            }
        },

        ngdocs: {
            options: {
                html5Mode: false,
                title: '<%= pkg.name %> Documentation',
                scripts: ['angular.js'],
                styles: ['../dist/<%= pkg.name %>.css']
            },
            api: {
                src: ['public/scripts/**/*.js'],
                title: 'API Documentation'
            }
        },

        //ngAnnotate task
        ngAnnotate: {
            options: {
                singleQuotes: true,
                remove: false,
                add: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['<%= config.src %>/**/*.js'],
                        dest: '<%= config.tmp %>/scripts',
                        ext: '.annotated.js', // Dest filepaths will have this extension.
                        extDot: 'last'       // Extensions in filenames begin after the last dot
                    }
                ]
            }
        },

        //Concat task
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= config.src %>/<%= pkg.name %>.js'],
                dest: '<%= config.dist %>/<%= pkg.name %>.js'
            }
        },

        //Uglify task
        uglify: {
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: '<%= config.dist %>/<%= pkg.name %>.min.js'
            }
        },

        //Process
        processhtml: {
            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'My app',
                        message: 'This is production distribution',
                        mainScript: '<%= distFilename %>',
                        mainCSS : '<%= distCSSFileName %>'
                    }
                },
                files: {
                    //out : [input]
                    '<%= config.dist %>/index.html': ['public/index.html']
                }
            }
        },
        //Replace the view name folder with the dynamically generated key name. This will ensure the htmls are always access from a new folder location.
        //The bootstrapper.<unikeykey>.js file is referenced here.
        'regex-replace': {
            dist: {
                src: ['<%= config.dist %>/scripts/*.js' ],
                actions: [
                    {
                        name: 'search',
                        search: /\bgecsviews/gi,
                        replace: '<%= uniqueKey %>',
                        flags:'gm'
                    }
                ]
            }
        }
    });

    //default task will run tasks in that following array when no parameter passed.
    //e.g. run "grunt" only without parameters, grunt will run default task.
    grunt.registerTask('default', function(){grunt.log.write(logTestString).ok();});
    grunt.registerTask('start', ['less', 'cssmin', 'clean:build', 'connect:livereload', 'watch']);
};