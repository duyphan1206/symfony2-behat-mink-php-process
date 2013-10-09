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
            src: '../../web/Symfony/app/*.*',
            dest: '/Symfony/app/',
            rel: '../../web/Symfony/app/'
          },
          {
            src: '../../web/Symfony/app/config/**/*.*',
            dest: '/Symfony/app/config/',
            rel: '../../web/Symfony/app/config/'
          },
          {
            src: '../../web/Symfony/app/Resources/**/*.*',
            dest: '/Symfony/app/Resources/',
            rel: '../../web/Symfony/app/Resources/'
          },
          {
            src: '../../web/Symfony/bin/**/*.*',
            dest: '/Symfony/bin/',
            rel: '../../web/Symfony/bin/'
          },
          {
            src: '../../web/Symfony/src/**/*.*',
            dest: '/Symfony/src/',
            rel: '../../web/Symfony/src/'
          },
          {
            src: '../../web/Symfony/web/**/*.*',
            dest: '/Symfony/web/',
            rel: '../../web/Symfony/web/'
          },
          {
            src: '../../web/Symfony/*.*',
            dest: '/Symfony/',
            rel: '../../web/Symfony/'
          }

          ]
      }
    },
    replace: {
      example: {
        src: ['../../web/Symfony/src/Dev/TaskBundle/Resources/views/layout.html.twig'],             //  source files array (supports minimatch)
        dest: '../../web/Symfony/src/Dev/TaskBundle/Resources/views/layout.html.twig',             // destination directory or file
        replacements: [{
          from: "{{ asset('bundles/devtask/css/task.css') }}",                   // string replacement
          to: 'https://php-dev-demo.s3.amazonaws.com/Symfony/web/bundles/devtask/css/task.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', [
        'replace',
        's3'
    ]);
};