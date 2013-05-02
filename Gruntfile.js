

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        clean: {
            all: 'build',
            dist: 'build/dist'
        },
        sass: {
            dev: {
                files: {
                    'src/theme/main.css': 'src/theme/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    keepalive: true,
                    base: '.'
                }
            }

        },
        qunit: {
            files: ['spec.html']
        },
        watch: {
            sass: {
                files: ['src/theme/main.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('start', ['watch', 'connect']);

};
