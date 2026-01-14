<?php
/**
 * Custom Post Type: Internships
 * Add this code to your WordPress theme's functions.php file
 * OR use the "Code Snippets" plugin to add it
 */

function create_internships_post_type() {
    $labels = array(
        'name'                  => 'Internships',
        'singular_name'         => 'Internship',
        'menu_name'             => 'Internships',
        'add_new'               => 'Add New',
        'add_new_item'          => 'Add New Internship',
        'edit_item'             => 'Edit Internship',
        'new_item'              => 'New Internship',
        'view_item'             => 'View Internship',
        'search_items'          => 'Search Internships',
        'not_found'             => 'No internships found',
        'not_found_in_trash'    => 'No internships found in trash',
        'all_items'             => 'All Internships',
    );

    $args = array(
        'labels'                => $labels,
        'public'                => true,
        'has_archive'           => true,
        'publicly_queryable'    => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true, // IMPORTANT: Enables REST API
        'rest_base'             => 'internships',
        'menu_icon'             => 'dashicons-portfolio',
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'               => array('slug' => 'internship'),
        'capability_type'       => 'post',
        'hierarchical'          => false,
    );

    register_post_type('internship', $args);
}
add_action('init', 'create_internships_post_type');

// Register Custom Taxonomies for Internships
function create_internship_taxonomies() {
    // Location Taxonomy
    register_taxonomy('internship_location', 'internship', array(
        'label'                 => 'Locations',
        'labels'                => array(
            'name'              => 'Locations',
            'singular_name'     => 'Location',
            'add_new_item'      => 'Add New Location',
        ),
        'hierarchical'          => true,
        'show_ui'               => true,
        'show_in_rest'          => true,
        'rest_base'             => 'internship_locations',
        'rewrite'               => array('slug' => 'location'),
    ));

    // Field/Industry Taxonomy
    register_taxonomy('internship_field', 'internship', array(
        'label'                 => 'Fields',
        'labels'                => array(
            'name'              => 'Fields',
            'singular_name'     => 'Field',
            'add_new_item'      => 'Add New Field',
        ),
        'hierarchical'          => true,
        'show_ui'               => true,
        'show_in_rest'          => true,
        'rest_base'             => 'internship_fields',
        'rewrite'               => array('slug' => 'field'),
    ));

    // Program Type Taxonomy
    register_taxonomy('internship_program', 'internship', array(
        'label'                 => 'Programs',
        'labels'                => array(
            'name'              => 'Programs',
            'singular_name'     => 'Program',
            'add_new_item'      => 'Add New Program',
        ),
        'hierarchical'          => true,
        'show_ui'               => true,
        'show_in_rest'          => true,
        'rest_base'             => 'internship_programs',
        'rewrite'               => array('slug' => 'program'),
    ));
}
add_action('init', 'create_internship_taxonomies');

// Add Custom Fields Support
function add_internship_meta_boxes() {
    add_meta_box(
        'internship_details',
        'Internship Details',
        'internship_details_callback',
        'internship',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_internship_meta_boxes');

function internship_details_callback($post) {
    wp_nonce_field('internship_details_nonce', 'internship_details_nonce_field');
    
    $start_date = get_post_meta($post->ID, '_internship_start_date', true);
    $end_date = get_post_meta($post->ID, '_internship_end_date', true);
    $application_deadline = get_post_meta($post->ID, '_internship_application_deadline', true);
    $cost = get_post_meta($post->ID, '_internship_cost', true);
    $duration = get_post_meta($post->ID, '_internship_duration', true);
    $format = get_post_meta($post->ID, '_internship_format', true);
    $application_status = get_post_meta($post->ID, '_internship_application_status', true);
    if (empty($application_status)) {
        $application_status = 'open'; // Default to open
    }
    ?>
    <p>
        <label><strong>Start Date:</strong></label><br>
        <input type="date" name="internship_start_date" value="<?php echo esc_attr($start_date); ?>" style="width: 100%; max-width: 300px;">
    </p>
    <p>
        <label><strong>End Date:</strong></label><br>
        <input type="date" name="internship_end_date" value="<?php echo esc_attr($end_date); ?>" style="width: 100%; max-width: 300px;">
    </p>
    <p>
        <label><strong>Application Deadline:</strong></label><br>
        <input type="date" name="internship_application_deadline" value="<?php echo esc_attr($application_deadline); ?>" style="width: 100%; max-width: 300px;">
    </p>
    <p>
        <label><strong>Cost (e.g., $5,700):</strong></label><br>
        <input type="text" name="internship_cost" value="<?php echo esc_attr($cost); ?>" style="width: 100%; max-width: 300px;">
    </p>
    <p>
        <label><strong>Duration (e.g., 4 weeks):</strong></label><br>
        <input type="text" name="internship_duration" value="<?php echo esc_attr($duration); ?>" style="width: 100%; max-width: 300px;">
    </p>
    <p>
        <label><strong>Format:</strong></label><br>
        <select name="internship_format" style="width: 100%; max-width: 300px;">
            <option value="in-country" <?php selected($format, 'in-country'); ?>>In-Country</option>
            <option value="hybrid" <?php selected($format, 'hybrid'); ?>>Hybrid</option>
            <option value="virtual" <?php selected($format, 'virtual'); ?>>Virtual</option>
        </select>
    </p>
    <p>
        <label><strong>Application Status:</strong></label><br>
        <select name="internship_application_status" style="width: 100%; max-width: 300px;">
            <option value="open" <?php selected($application_status, 'open'); ?>>Applications Open</option>
            <option value="closed" <?php selected($application_status, 'closed'); ?>>Applications Closed</option>
        </select>
        <br>
        <em style="color: #666; font-size: 12px;">This controls the badge displayed on the internship card.</em>
    </p>
    <?php
}

function save_internship_details($post_id) {
    if (!isset($_POST['internship_details_nonce_field'])) return;
    if (!wp_verify_nonce($_POST['internship_details_nonce_field'], 'internship_details_nonce')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['internship_start_date'])) {
        update_post_meta($post_id, '_internship_start_date', sanitize_text_field($_POST['internship_start_date']));
    }
    if (isset($_POST['internship_end_date'])) {
        update_post_meta($post_id, '_internship_end_date', sanitize_text_field($_POST['internship_end_date']));
    }
    if (isset($_POST['internship_application_deadline'])) {
        update_post_meta($post_id, '_internship_application_deadline', sanitize_text_field($_POST['internship_application_deadline']));
    }
    if (isset($_POST['internship_cost'])) {
        update_post_meta($post_id, '_internship_cost', sanitize_text_field($_POST['internship_cost']));
    }
    if (isset($_POST['internship_duration'])) {
        update_post_meta($post_id, '_internship_duration', sanitize_text_field($_POST['internship_duration']));
    }
    if (isset($_POST['internship_format'])) {
        update_post_meta($post_id, '_internship_format', sanitize_text_field($_POST['internship_format']));
    }
    if (isset($_POST['internship_application_status'])) {
        update_post_meta($post_id, '_internship_application_status', sanitize_text_field($_POST['internship_application_status']));
    }
}
add_action('save_post', 'save_internship_details');

// Expose custom fields in REST API
function expose_internship_meta_in_rest() {
    register_post_meta('internship', '_internship_start_date', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_end_date', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_application_deadline', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_cost', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_duration', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_format', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_gallery', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('internship', '_internship_application_status', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'default' => 'open',
    ));
}
add_action('init', 'expose_internship_meta_in_rest');

// Add Gallery Meta Box
function add_internship_gallery_meta_box() {
    add_meta_box(
        'internship_gallery',
        'Cultural Highlights Gallery',
        'internship_gallery_callback',
        'internship',
        'normal',
        'default'
    );
}
add_action('add_meta_boxes', 'add_internship_gallery_meta_box');

function internship_gallery_callback($post) {
    wp_nonce_field('internship_gallery_nonce', 'internship_gallery_nonce_field');
    
    $gallery_data = get_post_meta($post->ID, '_internship_gallery', true);
    $gallery_items = $gallery_data ? json_decode($gallery_data, true) : array();
    ?>
    <p><strong>Add images for the Cultural Highlights section.</strong></p>
    <p>Upload 4-6 images showing cultural activities (e.g., Traditional Music & Dance, Makola Market, Cape Coast Castle, Kakum National Park, Creative Hubs)</p>
    <p><em>Each image needs a title (e.g., "Traditional Music & Dance", "Cape Coast Castle")</em></p>
    
    <div id="internship-gallery-container">
        <input type="hidden" id="internship_gallery_data" name="internship_gallery" value="<?php echo esc_attr($gallery_data); ?>">
        <button type="button" class="button button-primary" id="internship_gallery_button">Select Cultural Highlights Images</button>
        <button type="button" class="button" id="internship_gallery_clear">Clear Gallery</button>
        
        <div id="internship-gallery-preview" style="margin-top: 20px;">
            <?php
            if (!empty($gallery_items)) {
                foreach ($gallery_items as $index => $item) {
                    $image = wp_get_attachment_image_src($item['id'], 'thumbnail');
                    if ($image) {
                        ?>
                        <div class="gallery-item" data-id="<?php echo esc_attr($item['id']); ?>" style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background: #f9f9f9;">
                            <div style="display: flex; gap: 15px; align-items: flex-start;">
                                <div style="position: relative;">
                                    <img src="<?php echo esc_url($image[0]); ?>" style="width: 150px; height: 150px; object-fit: cover; border-radius: 4px;">
                                    <button type="button" class="remove-image" data-id="<?php echo esc_attr($item['id']); ?>" style="position: absolute; top: -5px; right: -5px; background: #dc3232; color: white; border: none; cursor: pointer; padding: 5px 10px; border-radius: 50%; font-weight: bold;">×</button>
                                </div>
                                <div style="flex: 1;">
                                    <label style="display: block; margin-bottom: 5px; font-weight: 600;">Title:</label>
                                    <input type="text" class="gallery-title" data-id="<?php echo esc_attr($item['id']); ?>" value="<?php echo esc_attr($item['title']); ?>" placeholder="e.g., Traditional Music & Dance" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                }
            }
            ?>
        </div>
    </div>
    
    <script>
    jQuery(document).ready(function($) {
        var frame;
        
        function updateGalleryData() {
            var items = [];
            $('.gallery-item').each(function() {
                var id = $(this).data('id');
                var title = $(this).find('.gallery-title').val();
                items.push({
                    id: id,
                    title: title
                });
            });
            $('#internship_gallery_data').val(JSON.stringify(items));
        }
        
        $('#internship_gallery_button').on('click', function(e) {
            e.preventDefault();
            
            if (frame) {
                frame.open();
                return;
            }
            
            frame = wp.media({
                title: 'Select Cultural Highlights Images',
                button: {
                    text: 'Add to Gallery'
                },
                multiple: true
            });
            
            frame.on('select', function() {
                var selection = frame.state().get('selection');
                
                selection.map(function(attachment) {
                    attachment = attachment.toJSON();
                    
                    var itemHtml = '<div class="gallery-item" data-id="' + attachment.id + '" style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background: #f9f9f9;">' +
                        '<div style="display: flex; gap: 15px; align-items: flex-start;">' +
                        '<div style="position: relative;">' +
                        '<img src="' + attachment.sizes.thumbnail.url + '" style="width: 150px; height: 150px; object-fit: cover; border-radius: 4px;">' +
                        '<button type="button" class="remove-image" data-id="' + attachment.id + '" style="position: absolute; top: -5px; right: -5px; background: #dc3232; color: white; border: none; cursor: pointer; padding: 5px 10px; border-radius: 50%; font-weight: bold;">×</button>' +
                        '</div>' +
                        '<div style="flex: 1;">' +
                        '<label style="display: block; margin-bottom: 5px; font-weight: 600;">Title:</label>' +
                        '<input type="text" class="gallery-title" data-id="' + attachment.id + '" placeholder="e.g., Traditional Music & Dance" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    
                    $('#internship-gallery-preview').append(itemHtml);
                });
                
                updateGalleryData();
            });
            
            frame.open();
        });
        
        $('#internship_gallery_clear').on('click', function(e) {
            e.preventDefault();
            $('#internship_gallery_data').val('');
            $('#internship-gallery-preview').empty();
        });
        
        $(document).on('click', '.remove-image', function() {
            $(this).closest('.gallery-item').remove();
            updateGalleryData();
        });
        
        $(document).on('input', '.gallery-title', function() {
            updateGalleryData();
        });
    });
    </script>
    <style>
    .gallery-item:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    </style>
    <?php
}

function save_internship_gallery($post_id) {
    if (!isset($_POST['internship_gallery_nonce_field'])) return;
    if (!wp_verify_nonce($_POST['internship_gallery_nonce_field'], 'internship_gallery_nonce')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['internship_gallery'])) {
        // Store as JSON string - will be decoded in the REST API
        update_post_meta($post_id, '_internship_gallery', wp_unslash($_POST['internship_gallery']));
    }
}
add_action('save_post', 'save_internship_gallery');

// Ensure taxonomies are included in REST API responses
function add_internship_taxonomies_to_rest() {
    register_rest_field(
        'internship',
        'internship_locations',
        array(
            'get_callback' => function($post) {
                return wp_get_post_terms($post['id'], 'internship_location');
            },
            'schema' => array(
                'description' => 'Internship locations',
                'type' => 'array'
            ),
        )
    );
    
    register_rest_field(
        'internship',
        'internship_fields',
        array(
            'get_callback' => function($post) {
                return wp_get_post_terms($post['id'], 'internship_field');
            },
            'schema' => array(
                'description' => 'Internship fields',
                'type' => 'array'
            ),
        )
    );
    
    register_rest_field(
        'internship',
        'internship_programs',
        array(
            'get_callback' => function($post) {
                return wp_get_post_terms($post['id'], 'internship_program');
            },
            'schema' => array(
                'description' => 'Internship programs',
                'type' => 'array'
            ),
        )
    );
}
add_action('rest_api_init', 'add_internship_taxonomies_to_rest');
?>

