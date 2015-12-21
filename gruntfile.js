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
  handlebars: {
      compile :{
         files: [
        {
          expand: true,     
          cwd: 'public/templates',  
          src: ['**/*.html'], 
          dest: 'public/js/templates',   
          ext: '.js',   
          extDot: 'first' 
        }
      ]
      },
      options: {
          namespace: false,
          amd: true
      }
  },
  watch: {
      handlebars : {
        files: ['public/templates/**/*.html'],
        tasks:["handlebars"]
      },
      js : {
        files: ['js/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css']
      }
    }
});

	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat'],['watch']);
};