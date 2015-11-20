module.exports = function (grunt) {
    'use strict';

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        dirs: {
            dest: 'dist',
            lib: 'bower_components',
            src: 'src'
        },
        clean: ['dist'],
        jshint: {
            files: [
                'Gruntfile.js',
                '<%= dirs.src %>*.js'
            ],
            options: {
                esnext: true,
                freeze: true,
                browser: true,
                eqnull: true,
                es3: false,
                forin: true,
                eqeqeq: true,
                latedef: true,
                nonbsp: true,
                noempty: true,
                noarg: true,
                quotmark: true,
                unused: 'vars',
                trailing: true,
                globals: {
                    console: true,
                    angular: true
                }
            }
        },
        copy: {
          src: {
            expand: true,
            flatten: true,
            src: '<%= dirs.src %>/angular-google-adsense.js',
            dest: '<%= dirs.dest %>/',
          },
        },
        uglify: {
            src: {
                files: {
                    '<%= dirs.dest %>/angular-google-adsense.min.js': '<%= dirs.dest %>/angular-google-adsense.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    grunt.registerTask('build', ['clean', 'jshint', 'copy:src', 'uglify:src']);
};
