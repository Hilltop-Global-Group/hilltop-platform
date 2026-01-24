<?php
/**
 * Custom Post Type: Internships
 * FIXED VERSION - Compatible with ACF Plugin
 * Now supports multiple format options with separate pricing
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
    wp_nonce_field('internship_details_nonce_action', 'internship_details_nonce_field');
    
    $start_date = get_post_meta($post->ID, '_internship_start_date', true);
    $end_date = get_post_meta($post->ID, '_internship_end_date', true);
    $application_opens = get_post_meta($post->ID, '_internship_application_opens', true);
    $application_deadline = get_post_meta($post->ID, '_internship_application_deadline', true);
    $duration = get_post_meta($post->ID, '_internship_duration', true);
    $application_status = get_post_meta($post->ID, '_internship_application_status', true);
    
    // Format availability and pricing
    $hybrid_available = get_post_meta($post->ID, '_internship_hybrid_available', true);
    $hybrid_cost = get_post_meta($post->ID, '_internship_hybrid_cost', true);
    $incountry_available = get_post_meta($post->ID, '_internship_incountry_available', true);
    $incountry_cost = get_post_meta($post->ID, '_internship_incountry_cost', true);
    
    if (empty($application_status)) {
        $application_status = 'open'; // Default to open
    }
    ?>
    
    <style>
        .internship-meta-section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border-left: 4px solid #2271b1;
            border-radius: 4px;
        }
        .internship-meta-section h3 {
            margin-top: 0;
            color: #2271b1;
            font-size: 16px;
        }
        .internship-field {
            margin-bottom: 15px;
        }
        .internship-field label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .internship-field input[type="text"],
        .internship-field input[type="date"],
        .internship-field select {
            width: 100%;
            max-width: 300px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .format-option {
            padding: 15px;
            background: white;
            border: 2px solid #ddd;
            border-radius: 6px;
            margin-bottom: 15px;
        }
        .format-option.enabled {
            border-color: #2271b1;
            background: #f0f6fc;
        }
        .format-checkbox {
            margin-right: 8px;
        }
    </style>

    <!-- Application Timeline -->
    <div class="internship-meta-section">
        <h3>📅 Application Timeline</h3>
        
        <div class="internship-field">
            <label>Application Opens:</label>
            <input type="date" name="internship_application_opens" value="<?php echo esc_attr($application_opens); ?>">
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">When students can start applying</p>
        </div>
        
        <div class="internship-field">
            <label>Application Deadline:</label>
            <input type="date" name="internship_application_deadline" value="<?php echo esc_attr($application_deadline); ?>">
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">Last day to submit applications</p>
        </div>
        
        <div class="internship-field">
            <label>Application Status:</label>
            <select name="internship_application_status">
                <option value="open" <?php selected($application_status, 'open'); ?>>Applications Open</option>
                <option value="closed" <?php selected($application_status, 'closed'); ?>>Applications Closed</option>
            </select>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">Controls the badge displayed on cards</p>
        </div>
    </div>

    <!-- Program Dates -->
    <div class="internship-meta-section">
        <h3>📆 Program Dates</h3>
        
        <div class="internship-field">
            <label>Start Date:</label>
            <input type="date" name="internship_start_date" value="<?php echo esc_attr($start_date); ?>">
        </div>
        
        <div class="internship-field">
            <label>End Date:</label>
            <input type="date" name="internship_end_date" value="<?php echo esc_attr($end_date); ?>">
        </div>
        
        <div class="internship-field">
            <label>Duration (e.g., 4 weeks):</label>
            <input type="text" name="internship_duration" value="<?php echo esc_attr($duration); ?>">
        </div>
    </div>

    <!-- Format Options & Pricing -->
    <div class="internship-meta-section">
        <h3>💰 Format Options & Pricing</h3>
        <p style="color: #666; margin-bottom: 15px;">Select which formats students can choose from. Check all that apply.</p>
        
        <!-- Hybrid Format -->
        <div class="format-option <?php echo $hybrid_available ? 'enabled' : ''; ?>">
            <label style="display: flex; align-items: center; font-size: 15px; font-weight: 600; margin-bottom: 10px;">
                <input type="checkbox" name="internship_hybrid_available" value="1" class="format-checkbox" <?php checked($hybrid_available, '1'); ?>>
                🌍 Hybrid Format
            </label>
            <p style="color: #666; font-size: 13px; margin: 0 0 10px 0; padding-left: 24px;">
                Three weeks in-country + one week remote (pre-departure virtual component)
            </p>
            <div style="padding-left: 24px;">
                <label style="display: block; margin-bottom: 5px; font-size: 13px;">Price:</label>
                <input type="text" name="internship_hybrid_cost" value="<?php echo esc_attr($hybrid_cost); ?>" placeholder="e.g., $5,700" style="width: 200px;">
            </div>
        </div>
        
        <!-- In-Country Format -->
        <div class="format-option <?php echo $incountry_available ? 'enabled' : ''; ?>">
            <label style="display: flex; align-items: center; font-size: 15px; font-weight: 600; margin-bottom: 10px;">
                <input type="checkbox" name="internship_incountry_available" value="1" class="format-checkbox" <?php checked($incountry_available, '1'); ?>>
                🏢 Full In-Country Format
            </label>
            <p style="color: #666; font-size: 13px; margin: 0 0 10px 0; padding-left: 24px;">
                Four weeks entirely in-country with full immersion experience
            </p>
            <div style="padding-left: 24px;">
                <label style="display: block; margin-bottom: 5px; font-size: 13px;">Price:</label>
                <input type="text" name="internship_incountry_cost" value="<?php echo esc_attr($incountry_cost); ?>" placeholder="e.g., $6,050" style="width: 200px;">
            </div>
        </div>
    </div>

    <script>
    jQuery(document).ready(function($) {
        // Toggle format styling when checkbox changes
        $('.format-checkbox').on('change', function() {
            var container = $(this).closest('.format-option');
            if ($(this).is(':checked')) {
                container.addClass('enabled');
            } else {
                container.removeClass('enabled');
            }
        });
    });
    </script>
    <?php
}

// FIXED: Save function with better ACF compatibility
function save_internship_details($post_id) {
    // Security checks
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check if this is the internship post type
    if (!isset($_POST['post_type']) || $_POST['post_type'] !== 'internship') {
        return;
    }

    // Verify nonce
    if (!isset($_POST['internship_details_nonce_field']) || 
        !wp_verify_nonce($_POST['internship_details_nonce_field'], 'internship_details_nonce_action')) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save basic fields
    $fields = array(
        'internship_start_date' => '_internship_start_date',
        'internship_end_date' => '_internship_end_date',
        'internship_application_opens' => '_internship_application_opens',
        'internship_application_deadline' => '_internship_application_deadline',
        'internship_duration' => '_internship_duration',
        'internship_application_status' => '_internship_application_status',
    );

    foreach ($fields as $field_name => $meta_key) {
        if (isset($_POST[$field_name])) {
            update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$field_name]));
        }
    }

    // Save format availability (checkboxes)
    update_post_meta($post_id, '_internship_hybrid_available', isset($_POST['internship_hybrid_available']) ? '1' : '0');
    update_post_meta($post_id, '_internship_incountry_available', isset($_POST['internship_incountry_available']) ? '1' : '0');

    // Save format pricing
    if (isset($_POST['internship_hybrid_cost'])) {
        update_post_meta($post_id, '_internship_hybrid_cost', sanitize_text_field($_POST['internship_hybrid_cost']));
    }
    if (isset($_POST['internship_incountry_cost'])) {
        update_post_meta($post_id, '_internship_incountry_cost', sanitize_text_field($_POST['internship_incountry_cost']));
    }
}
add_action('save_post_internship', 'save_internship_details', 10, 1);

// Expose custom fields in REST API with auth support
function expose_internship_meta_in_rest() {
    $meta_fields = array(
        '_internship_start_date',
        '_internship_end_date',
        '_internship_application_opens',
        '_internship_application_deadline',
        '_internship_duration',
        '_internship_application_status',
        '_internship_hybrid_available',
        '_internship_hybrid_cost',
        '_internship_incountry_available',
        '_internship_incountry_cost',
        '_internship_gallery',
    );

    foreach ($meta_fields as $meta_key) {
        register_post_meta('internship', $meta_key, array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ));
    }
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
    wp_nonce_field('internship_gallery_nonce_action', 'internship_gallery_nonce_field');
    
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

// FIXED: Gallery save with better security
function save_internship_gallery($post_id) {
    // Security checks
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check if this is the internship post type
    if (!isset($_POST['post_type']) || $_POST['post_type'] !== 'internship') {
        return;
    }

    // Verify nonce
    if (!isset($_POST['internship_gallery_nonce_field']) || 
        !wp_verify_nonce($_POST['internship_gallery_nonce_field'], 'internship_gallery_nonce_action')) {
        return;
    }

    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save gallery data
    if (isset($_POST['internship_gallery'])) {
        update_post_meta($post_id, '_internship_gallery', wp_unslash($_POST['internship_gallery']));
    }
}
add_action('save_post_internship', 'save_internship_gallery', 10, 1);

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

// Disable ACF validation for our custom meta fields (if ACF is active)
function disable_acf_validation_for_internship_meta() {
    if (!function_exists('acf_add_filter_variations')) {
        return; // ACF not active
    }
    
    add_filter('acf/validate_value', function($valid, $value, $field, $input) {
        // Skip ACF validation for our custom internship meta fields
        $our_fields = array(
            '_internship_start_date',
            '_internship_end_date',
            '_internship_application_opens',
            '_internship_application_deadline',
            '_internship_duration',
            '_internship_application_status',
            '_internship_hybrid_available',
            '_internship_hybrid_cost',
            '_internship_incountry_available',
            '_internship_incountry_cost',
            '_internship_gallery',
        );
        
        if (in_array($field['name'], $our_fields)) {
            return true; // Always valid
        }
        
        return $valid;
    }, 10, 4);
}
add_action('acf/init', 'disable_acf_validation_for_internship_meta');
?>
