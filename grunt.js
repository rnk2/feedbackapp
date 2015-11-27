module.exports = function(grunt){

	// Project configuration.
grunt.initConfig({
  concat: {
    
    js: {
      src: ['js/intro.js', 'js/project.js', 'js/outro.js'],
      dest: 'dist/built.js',
    },
    css: {
      src: ['css/intro.css', 'css/project.css', 'css/outro.css'],
      dest: 'dist/built.css',
    },
  },
  watch: {
  js : {
    files: ['js/**/*.js'],
    tasks: ['concat:js'],
    
  },
  css: {
    files: ['css/**/*.css'],
    tasks: ['concat:css'],
    
  },
},
});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat'],['watch']);


};