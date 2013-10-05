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
          src: '../../web/Symfony/**/*.*',
          dest: '/Symfony/',
          rel: '../../web/Symfony/'
        }]
      }
    },
    replace: {
      example: {
        src: ['../../web/Symfony/src/Dev/TaskBundle/Resources/views/Task/*.*'],             // source files array (supports minimatch)
        dest: '../../web/Symfony/src/Dev/TaskBundle/Resources/views/Task/',             // destination directory or file
        replacements: [{
          from: 'Task list',                   // string replacement
          to: 'anhhau'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', [
        'replace'
    ]);
};