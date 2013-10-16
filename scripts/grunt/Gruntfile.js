// Generated on 2013-06-12 using generator-webapp 0.2.3

/**
  * Step 1: Copy the code that should be deploy to production server
  * Step 2: Minify the assets (css/js)
  * Step 3: Concat the version to assets files
  * Step 4: Upload the assets to S3
  * Step 5: Replace assets in html/template files.
  * Step 6: Deploy the dist folder to production server
  * Step 7: Clear dist folder
  */
'use strict';

var path = require('path');

module.exports = function (grunt) {

  grunt.initConfig({
     symfony: {
        app: '../../Symfony',
        dist: '../../dist',
        host_deploy: '172.16.126.169',
        folder_deploy: '/var/www/deploy',
        user : 'congdang',
        password: 'asnet@123',
        project_name : "product",
        root_folder : "/vagrant/jobs/symfony/workspace/"
    },
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

      assets_deploy: {
          upload: [{
              src: 'dist/web/bundles/devtask/css/**',
              // a prefix folder on S3
              dest:  'assets/',
              // the rel option
              rel: 'dist/web/'
            },
            {
              src: 'dist/web/bundles/devtask/js/**',
              // a prefix folder on S3
              dest:  'assets/',
              // the rel option
              rel: 'dist/web/'
            }
            ]
      }
    },

    // Put files not handled in other tasks here
    copy: {

        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= symfony.app %>',
                dest: '<%= symfony.dist %>',
                    src: [
                        '*.*',
                        'app/*',
                        'app/config/**/*',
                        'app/Resources/**/*',
                        'app/Resources/**/*',
                        'src/**/*',
                        'web/**/*'
                    ]
            }]
        }
    },

    // concat: {
    //   styles: {
    //     src: '../../dist/web/bundles/devtask/css/**/*.css',
    //     dest: '../../dist/web/bundles/devtask/css/main.min.css'
    //   }
    // },

    // Minify _everything_. Same logic as the concat step, just smaller files.
    uglify: {
        options: {
          mangle: {
            except: ['jQuery', 'Backbone']
          }
        },
        target: {
          files: {
            '../../dist/web/bundles/devtask/js/main.min.js': ['../../dist/web/bundles/devtask/**/*.js']
          }
        }
    },

    cssmin: {
      combine: {
        files: {
          '../../dist/web/bundles/devtask/css/main.min.css': ['../../dist/web/bundles/devtask/css/**/*.css']
        }
      }
    },

    useminPrepare: {
      html: ['../../dist/src/Dev/TaskBundle/Resources/views/*.html.twig']
    },
    // update references in HTML/CSS to revved files
    usemin: {
      html: ['../../dist/src/Dev/TaskBundle/Resources/views/layout.html.twig']
    },

    assets: {
      // global task options
      options: {
        // don't output debug information
        debug: false,
        // trancate the hash length to 8 chars.
        truncateHash: 8,
        // define the location of the manifest file.
        manifest: 'temp/manifest.json',
        // define the location of the cdn.
        cdnurl: 'https://php-dev-demo.s3.amazonaws.com/assets/',
        // Set maximum number of file copying concurent operations.
        maxOperations: 100,
        // Show a fancy progress indicator
        progress: true,
        // Set path to substract so the relative path for the assets can be calculated.
        rel: 'bundles/devtask/'
      },

      all: {
        // local task options
        options: {
          // change the rel path to test/case
          rel: '../../dist/web/'
        },
        src: [
          // all files under folder assets
          '../../dist/web/bundles/devtask/css/*.min.css',
          '../../dist/web/bundles/devtask/js/*.min.js'
        ],
        dest: 'temp/assets'
      }
    },


    assetsReplace: {
      // global task options
      options: {
        // don't output debug information
        debug: false,
        // define the location of the manifest file.
        manifest: 'temp/manifest.json',
      },
      twig: {
        options: {
          // a regex for lax matching {{asset "%"}} allowing for spaces in between
          // and single quotes.
          key: "__ASSET(%)"
        },
        // all the files from the assets/handlebars folder
        src: '../../dist/src/Dev/TaskBundle/Resources/views/layout.html.twig',
        // output to temp/handlebars folder
        dest: '../../dist/src/Dev/TaskBundle/Resources/views/layout.html.twig'
      }
    },

    clean: {
        dist: {
            files: [{
                dot: true,
                src: [
                    'temp',
                    'dist'
                ]
            }]
        }
    },

    // make a zipfile
    compress: {
      prepare_deploy: {
        options: {
          archive: '<%= symfony.root_folder %><%= symfony.project_name %>.zip'
        },
        expand: true,
        cwd: '<%= symfony.root_folder %>dist/',
        src: ['**/*'],
        dest: '/'
      }
    },

    scp: {
      options: {
          host: '<%= symfony.host_deploy %>',
          username: '<%= symfony.user %>',
          password: '<%= symfony.password %>'
      },
      deploy: {
          files: [{
              cwd: '<%= symfony.root_folder %>',
              src: '<%= symfony.project_name %>.zip',
              filter: 'isFile',
              // path on the server
              dest: '<%= symfony.folder_deploy %>'
          }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assetflow');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-scp');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-s3');

    grunt.registerTask('default', [
        'copy',
        'cssmin',
        'uglify',
        'usemin',
        'assets',
        'assetsReplace',
        's3',
        'compress',
        'scp',
        'clean'
    ]);
};