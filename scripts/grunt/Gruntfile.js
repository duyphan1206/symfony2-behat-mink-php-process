// Generated on 2013-06-12 using generator-webapp 0.2.3
'use strict';

var path = require('path');

module.exports = function (grunt) {

  grunt.initConfig({

    s3: {
         options: {
        key: 'AKIAJLSP2MXGY2AOKDDQ',
        secret: '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',
        bucket: 'php-dev-demo',
        access: 'public-read',
        headers: {
        // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
        "Cache-Control": "max-age=630720000, public",
        "Expires": new Date(Date.now() + 63072000000).toUTCString()
      }
    },
      test: {
        options: {}
      },
      test_options: {
        options: {
          key: 'custom'
        }
      },
      test_S3Task: {
          upload: [{
            src: '../../web/Symfony/web/bundles/devtask/css/main.css',
            dest: '/css/main.min.css',
          }]
      }
    },



    concat: {

      styles: {
        src: '../../web/Symfony/web/bundles/devtask/css/**/*.css',
        dest: '../../web/Symfony/web/bundles/devtask/css/main.css'
      }
    },

    // Minify _everything_. Same logic as the concat step, just smaller files.
    uglify: {
      styles: {
        src: '../../web/Symfony/web/bundles/devtask/css/main.css',
        dest: '../../web/Symfony/web/bundles/devtask/css/main.min.css'
      }
    },

     // renames JS/CSS to prepend a hash of their contents for easier
    // versioning
    rev: {
      css: '../../web/Symfony/web/bundles/devtask/css/**/*.css',
    },

    useminPrepare: {
      html: ['../../**/*.html.twig']
    },
    // update references in HTML/CSS to revved files
    usemin: {
      html: ['../../web/Symfony/src/Dev/TaskBundle/**/*.html.twig']
    },

    // replace: {
    //   example: {
    //     src: ['../../web/Symfony/src/Dev/TaskBundle/Resources/views/layout.html.twig'],             //  source files array (supports minimatch)
    //     dest: '../../web/Symfony/src/Dev/TaskBundle/Resources/views/layout.html.twig',             // destination directory or file
    //     replacements: [{
    //       from: "{{ asset('bundles/devtask/css/task.css') }}",                   // string replacement
    //       to: 'https://php-dev-demo.s3.amazonaws.com/Symfony/web/bundles/devtask/css/task.css'
    //     }]
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-rev');

    grunt.registerTask('default', [

        'concat',
        'rev',
        'usemin',
        's3'
    ]);
};