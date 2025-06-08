<?php
/**
 * Plugin Name: Responsive Image Switcher
 * Description: A Gutenberg block plugin to display different images based on screen width.
 * Version: 1.0.0
 * Author: Getode
 * License: GPL-2.0+
 * Text Domain: responsive-image-switcher
 * Domain Path: /languages
 *
 * @package responsive-image-switcher
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the block.
 */
function respimgsw_register_block() {
    register_block_type(
        'respimgsw/responsive-image-switcher',
        array(
            'render_callback' => 'respimgsw_render_block',
        )
    );
}
add_action( 'init', 'respimgsw_register_block' );

/**
 * Render the block.
 *
 * @param array $attributes Block attributes.
 * @return string Rendered block HTML.
 */
function respimgsw_render_block( $attributes ) {
	$image_id        = $attributes['imageId'] ?? 0;
	$mobile_image_id = $attributes['mobileImageId'] ?? 0;

	if ( ! $image_id && ! $mobile_image_id ) {
		return '';
	}

	$desktop_image = $image_id ? wp_kses_post(
		wp_get_attachment_image(
			$image_id,
			'full',
			false,
			array(
				'class'   => 'respimgsw-desktop-image',
				'alt'     => esc_attr( get_post_meta( $image_id, '_wp_attachment_image_alt', true ) ),
				'loading' => 'eager',
			)
		)
	) : '';

	$mobile_image = $mobile_image_id ? wp_kses_post(
		wp_get_attachment_image(
			$mobile_image_id,
			'full',
			false,
			array(
				'class'   => 'respimgsw-mobile-image',
				'alt'     => esc_attr( get_post_meta( $mobile_image_id, '_wp_attachment_image_alt', true ) ),
				'loading' => 'eager',
			)
		)
	) : $desktop_image;

	if ( ! $desktop_image && ! $mobile_image ) {
		return '';
	}

	return sprintf(
		'<div class="wp-block-respimgsw-responsive-image-switcher"><picture><source media="(min-width: 768px)" srcset="%s"><source media="(max-width: 767px)" srcset="%s">%s</picture></div>',
		esc_url( wp_get_attachment_image_url( $image_id, 'full' ) ),
		esc_url( wp_get_attachment_image_url( $mobile_image_id, 'full' ) ),
		$desktop_image
	);
}

/**
 * Enqueue block editor scripts.
 */
add_action(
	'enqueue_block_editor_assets',
	function () {
		$script_path = plugin_dir_path( __FILE__ ) . 'build/index.js';
		$script_url  = plugin_dir_url( __FILE__ ) . 'build/index.js';

		wp_enqueue_script(
			'respimgsw-responsive-image-switcher-editor',
			$script_url,
			array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ),
			filemtime( $script_path ),
			true
		);

		wp_set_script_translations(
			'respimgsw-responsive-image-switcher-editor',
			'responsive-image-switcher',
			plugin_dir_path( __FILE__ ) . 'languages'
		);
	}
);
