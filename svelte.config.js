import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',       // Output directory for static files
            assets: 'build',      // Directory for assets like images, CSS
            fallback: null,       // No fallback (not an SPA)
            precompress: false,   // Disable gzip precompression
            strict: true          // Ensure all routes are prerenderable
        }),
        paths: {
            base: ''              // Leave this empty for the root domain
        }
    }
};
