=== Responsive Image Switcher ===
Contributors: Getode
Tags: gutenberg, block, responsive, images, media
Requires at least: 6.5
Tested up to: 6.8
Requires PHP: 8.0
Stable tag: 1.0.2
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightweight block for responsive image switching between desktop and mobile.

== Description ==
Responsive Image Switcher is a lightweight Gutenberg block that simplifies responsive image management in WordPress. Add the block, upload a desktop image (for screens ≥768px) and a mobile-optimized image (for screens <767px), and the plugin generates clean HTML5 `<picture>` markup. The browser automatically loads the appropriate image based on screen width, ensuring fast load times and an optimal user experience.

**Key Features:**
- **Fast and Lightweight**: Uses vanilla HTML5 `<picture>` tags, no extra JavaScript.
- **Improved Performance**: Mobile-optimized images reduce load times, boosting Core Web Vitals.
- **SEO Benefits**: Enhances mobile UX and page speed, key Google ranking factors.
- **Easy to Use**: Intuitive block interface for selecting images in Gutenberg.
- **Flexible Use Cases**: Perfect for headers, galleries, banners, or product showcases.

**Why Choose Responsive Image Switcher?**
With over 60% of web traffic coming from mobile devices, delivering the right image for each screen size is critical. This plugin eliminates the need for complex CSS media queries or CDN setups, making responsive images accessible to everyone.

**Supported Languages:**
- English (default)
- Russian (ru_RU)
- Ukrainian (uk_UA)

== Installation ==
1. Upload the plugin ZIP via WordPress Admin (Plugins → Add New → Upload).
2. Activate the plugin.
3. Use the block in Gutenberg editor.

== Development ==
This plugin is built with modern WordPress standards:
- Source code: https://github.com/Getode/responsive-image-switcher
- Uses `@wordpress/scripts` for build process
- Complies with WordPress coding standards

To contribute:
1. Clone the repo: `git clone https://github.com/Getode/responsive-image-switcher.git`
2. Install dependencies: `npm install`
3. Build: `npm run build`

== Frequently Asked Questions ==
= Will this work with my existing WordPress setup? =
Yes! The plugin works with:

Any modern WordPress theme (block-based or classic)

Most page builders (if they support Gutenberg blocks)

WordPress 6.5+ and PHP 8.0+

= Does it work with any theme? =
Yes, as long as your theme supports the Gutenberg editor.

= Are the images optimized automatically? =
The plugin relies on you uploading optimized images. Use tools like TinyPNG or ImageOptim for best results.

== Screenshots ==
1. The Responsive Image Switcher block interface in the Gutenberg editor.
2. Responsive images displayed on the frontend (desktop and mobile views).

== Changelog ==
= 1.0.2 =
* Improved compatibility with WordPress 6.8
* Fixed minor styling issues in the editor

= 1.0.1 =
* Added better error handling for image uploads
* Improved accessibility of the block controls

= 1.0.0 =
* Initial release

== Upgrade Notice ==
= 1.0.2 =
Recommended update for all users - includes compatibility improvements and bug fixes.