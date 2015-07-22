module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: true
			},

			all: {
				files: {
					'./dist/js/core.min.js' : ['./src/js/core.js'],
					'./dist/js/ai.min.js' : ['./src/js/ai.js']
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer-core')({
						browsers: ['> 0%']
					}),
					require('cssnano')({
						zindex: false,
						unused: false
					})
				]
			},
			dist: {
				files: {
					'./dist/css/core.min.css': ['./src/css/core.css']
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-postcss');

	// tasks
	grunt.registerTask('default', ['uglify', 'postcss']);
};