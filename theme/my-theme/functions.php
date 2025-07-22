<?php 

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css' );

	wp_deregister_script( 'jquery' );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array(), 'null', true );
});

add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails');


