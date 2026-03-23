# Hilltop Global Group — Headless WordPress Backend Setup Guide

**Last updated:** March 2026
**Stack:** Next.js 16 (Vercel) + WordPress (InMotion cPanel) + Cloudflare
**Domain:** hilltopglobalgroup.com

---

## Table of Contents

1. [What We're Building](#1-what-were-building)
2. [Architecture Overview](#2-architecture-overview)
3. [Prerequisites](#3-prerequisites)
4. [Phase 1: Create the CMS Subdomain](#4-phase-1-create-the-cms-subdomain)
5. [Phase 2: Install Fresh WordPress](#5-phase-2-install-fresh-wordpress)
6. [Phase 3: Secure & Lock Down WordPress](#6-phase-3-secure--lock-down-wordpress)
7. [Phase 4: Install Required Plugins](#7-phase-4-install-required-plugins)
8. [Phase 5: Create Content Types & Fields](#8-phase-5-create-content-types--fields)
9. [Phase 6: Configure CORS for the REST API](#9-phase-6-configure-cors-for-the-rest-api)
10. [Phase 7: Connect the Next.js Frontend](#10-phase-7-connect-the-nextjs-frontend)
11. [Phase 8: Enter Your Content](#11-phase-8-enter-your-content)
12. [Phase 9: Test Everything](#12-phase-9-test-everything)
13. [Phase 10: Launch Day Cutover](#13-phase-10-launch-day-cutover)
14. [Content Management Reference](#14-content-management-reference)
15. [Troubleshooting](#15-troubleshooting)

---

## 1. What We're Building

**The problem:**
- The old WordPress at `hilltopglobalgroup.com` has a theme license issue (Ave theme)
- We've rebuilt the entire frontend in Next.js (this repo) and need WordPress only as a content API
- We need to launch without breaking the old site

**The solution:**
- Install a **brand-new WordPress** on a **subdomain** (e.g. `cms.hilltopglobalgroup.com`)
- This WordPress is **headless** — it has no public-facing frontend. It only serves content via its REST API
- The Next.js app on Vercel fetches content from `cms.hilltopglobalgroup.com/wp-json/wp/v2/...`
- The old site stays alive at `hilltopglobalgroup.com` until we flip the DNS to Vercel
- **No theme license is needed** because nobody ever sees the WordPress frontend

**After launch:**
```
hilltopglobalgroup.com      →  Vercel (Next.js frontend)
cms.hilltopglobalgroup.com  →  InMotion (WordPress headless API)
```

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        VISITORS                                 │
│                  hilltopglobalgroup.com                          │
│                           │                                     │
│                     ┌─────▼──────┐                              │
│                     │ Cloudflare │  DNS + CDN + SSL              │
│                     └─────┬──────┘                              │
│                           │                                     │
│              ┌────────────▼────────────┐                        │
│              │   Vercel (Next.js)      │                        │
│              │   Your frontend app     │                        │
│              │   - Pages               │                        │
│              │   - Components          │                        │
│              │   - API routes          │                        │
│              └────────────┬────────────┘                        │
│                           │ fetch() calls                       │
│                           │ to REST API                         │
│              ┌────────────▼────────────┐                        │
│              │   InMotion cPanel       │                        │
│              │   cms.hilltopglobalgroup│                        │
│              │   .com                  │                        │
│              │                         │                        │
│              │   WordPress (headless)  │                        │
│              │   - Posts (News/Blog)   │                        │
│              │   - Internships (CPT)   │                        │
│              │   - Testimonials (CPT)  │                        │
│              │   - Site Metrics        │                        │
│              │   - Contact Form        │                        │
│              └─────────────────────────┘                        │
└─────────────────────────────────────────────────────────────────┘
```

**What content is managed where:**

| Content | Currently | After Setup |
|---------|-----------|-------------|
| News / Blog posts | WordPress (old) | WordPress (new CMS) |
| Current Internships | Hardcoded in Next.js | WordPress (new CMS) |
| Past Internships | WordPress (old) | WordPress (new CMS) |
| Testimonials | Hardcoded in Next.js | WordPress (new CMS) — students submit from frontend, you approve in wp-admin |
| Site Metrics (50+ Programs, etc.) | Hardcoded in Next.js | Can stay hardcoded OR move to WordPress |
| Contact Form submissions | Next.js API route (logs only) | WordPress (Contact Form 7) or email service |
| Newsletter signups | Not connected | WordPress or Mailchimp |
| Static pages (About, Education, etc.) | Next.js components | Stay in Next.js (no change) |

---

## 3. Prerequisites

Before starting, make sure you have:

- [ ] Login credentials for **InMotion cPanel** (the hosting control panel)
- [ ] Login credentials for **Cloudflare** (DNS management)
- [ ] Login credentials for **Vercel** (where the Next.js app is deployed)
- [ ] The InMotion server's **IP address** (find it in cPanel → "Server Information" or on your InMotion dashboard)
- [ ] Access to this repository (the Next.js codebase)

**Write these down before proceeding:**

```
InMotion cPanel URL:     https://secure319.inmotionhosting.com:2083/
InMotion Server IP:      ___.___.___.___ 173.205.124.204
Cloudflare login:        _______________ https://dash.cloudflare.com/71b1e31c8951b6849feeea8e1f428dfd/home/overview
Vercel project URL:      https://hilltop-platform.vercel.app/
```

---

## 4. Phase 1: Create the CMS Subdomain

**Goal:** Create `cms.hilltopglobalgroup.com` so we have a fresh place to install WordPress.

### Step 1: Create the subdomain in InMotion cPanel

1. Log into your **InMotion cPanel** at `https://your-server:2083` (or via InMotion AMP dashboard)
2. In the search bar at the top, type **"Domains"** and click **"Domains"** (or look under the "Domains" section)
3. Click **"Create A New Domain"**
4. Enter the following:
   - **Domain:** `cms.hilltopglobalgroup.com`
   - **Share document root:** **Uncheck this** (we want a separate directory)
   - **Document Root:** `cms.hilltopglobalgroup.com` (cPanel will auto-suggest this)
5. Click **"Submit"**

> **Note:** If your cPanel version shows "Subdomains" instead of "Domains," use that. Enter:
> - **Subdomain:** `cms`
> - **Domain:** `hilltopglobalgroup.com` (from dropdown)
> - **Document Root:** will auto-fill to something like `/home/youruser/cms.hilltopglobalgroup.com`

### Step 2: Add DNS record in Cloudflare

1. Log into **Cloudflare** at https://dash.cloudflare.com
2. Select the **hilltopglobalgroup.com** zone
3. Go to **DNS** → **Records**
4. Click **"Add Record"**
5. Fill in:
   - **Type:** `A`
   - **Name:** `cms`
   - **IPv4 address:** Your InMotion server IP (the one you wrote down above)
   - **Proxy status:** Leave the cloud **orange** (Proxied). This hides your server IP and gives you Cloudflare's CDN/DDoS protection. Make sure your Cloudflare **SSL/TLS** encryption mode is set to **"Full"** or **"Full (Strict)"** (go to SSL/TLS in the Cloudflare sidebar to check).
   - **TTL:** Auto
6. Click **"Save"**

### Step 3: Verify the subdomain resolves

Wait 2–5 minutes, then open a terminal and run:

```bash
nslookup cms.hilltopglobalgroup.com
```

You should see your InMotion server IP in the response. If you see it, the subdomain is live.

Alternatively, visit `http://cms.hilltopglobalgroup.com` in a browser. You should see either a cPanel default page or a blank directory listing. That's correct — WordPress isn't installed yet.

---

## 5. Phase 2: Install Fresh WordPress

**Goal:** Install a clean WordPress on the `cms` subdomain. No premium theme needed.

### Option A: Using Softaculous (Recommended — easiest)

1. In **cPanel**, search for **"Softaculous"** and open it
2. Find **"WordPress"** in the list (or search for it)
3. Click **"Install"**
4. Fill in the installation form:

| Field | Value |
|-------|-------|
| **Choose Protocol** | `https://` (if SSL is ready) or `http://` (change later) |
| **Choose Domain** | Select `cms.hilltopglobalgroup.com` from the dropdown |
| **In Directory** | Leave **BLANK** (very important — don't type anything here) |
| **Site Name** | `Hilltop CMS` |
| **Site Description** | `Content management for hilltopglobalgroup.com` |
| **Admin Username** | Pick something secure (NOT "admin") — e.g. `hilltop_editor` |
| **Admin Password** | Generate a strong password. **Save this somewhere safe.** |
| **Admin Email** | Your business email (e.g. `support@hilltopglobalgroup.com`) |
| **Select Language** | English |
| **Select Plugins** | Uncheck everything — we'll install what we need manually |
| **Advanced Options** | Leave defaults |

5. Click **"Install"**
6. Wait for it to complete (usually 30–60 seconds)
7. You'll get a success message with your admin URL: `https://cms.hilltopglobalgroup.com/wp-admin`

### Option B: Using WordPress Toolkit (if available in your cPanel)

1. In **cPanel**, search for **"WordPress Toolkit"**
2. Click **"Install"**
3. Set the installation path to `cms.hilltopglobalgroup.com`
4. Fill in admin credentials
5. Click **"Install"**

### Step 4: Log in and verify

1. Go to `https://cms.hilltopglobalgroup.com/wp-admin`
2. Log in with the admin username and password you just created
3. You should see the WordPress dashboard
4. Go to **Appearance** → **Themes** — you'll see a default theme (like Twenty Twenty-Four). **This is fine. Leave it. Nobody will ever see it.**

### Step 5: Set permalinks

This is critical for the REST API to work correctly:

1. Go to **Settings** → **Permalinks**
2. Select **"Post name"** (the one that shows `/%postname%/`)
3. Click **"Save Changes"**

This ensures URLs like `/wp-json/wp/v2/posts` work correctly.

---

## 6. Phase 3: Secure & Lock Down WordPress

**Goal:** Since this WordPress is headless (API only), we lock down the public frontend so nobody can browse it.

### Step 1: Redirect the WordPress frontend to your real site

Go to **Appearance** → **Theme File Editor** (or use the Plugin method below).

**Method A: Using Code Snippets plugin (safer)**

1. Install the **"Code Snippets"** plugin (Plugins → Add New → search "Code Snippets")
2. Activate it
3. Go to **Snippets** → **Add New**
4. Name it: `Headless Mode — Redirect Frontend`
5. Paste this code:

```php
/**
 * Redirect all non-admin, non-API requests to the main site.
 * This makes WordPress headless — only the REST API and wp-admin are accessible.
 */
add_action('template_redirect', function() {
    // Allow wp-admin
    if (is_admin()) return;
    
    // Allow REST API requests
    if (defined('REST_REQUEST') && REST_REQUEST) return;
    
    // Allow AJAX requests
    if (wp_doing_ajax()) return;
    
    // Allow WP-CLI
    if (defined('WP_CLI') && WP_CLI) return;
    
    // Allow cron
    if (defined('DOING_CRON') && DOING_CRON) return;
    
    // Redirect everything else to the main site
    wp_redirect('https://hilltopglobalgroup.com', 301);
    exit;
});
```

6. Set "Run snippet everywhere"
7. Click **"Save Changes and Activate"**

**Verify:** Open `https://cms.hilltopglobalgroup.com` in an incognito browser window. It should redirect to `hilltopglobalgroup.com`. But `https://cms.hilltopglobalgroup.com/wp-admin` should still work.

### Step 2: Disable XML-RPC (security hardening)

Add another Code Snippet called `Disable XML-RPC`:

```php
// Disable XML-RPC to prevent brute-force attacks
add_filter('xmlrpc_enabled', '__return_false');
```

### Step 3: Add basic security headers

Add another Code Snippet called `Security Headers`:

```php
add_action('send_headers', function() {
    if (defined('REST_REQUEST') && REST_REQUEST) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: DENY');
    }
});
```

---

## 7. Phase 4: Install Required Plugins

**Goal:** Install only what we need. No bloat.

Log into `https://cms.hilltopglobalgroup.com/wp-admin` and go to **Plugins** → **Add New**.

### Required Plugins (install and activate all of these):

| Plugin | Purpose | How to Find |
|--------|---------|-------------|
| **Code Snippets** | Run custom PHP without editing theme files | Search "Code Snippets" (by Code Snippets Pro) |
| **Custom Post Type UI** | Create Internships and Testimonials post types via UI (no code) | Search "Custom Post Type UI" (by WebDevStudios) |
| **Advanced Custom Fields (ACF)** | Add custom fields (dates, costs, etc.) to post types | Search "Advanced Custom Fields" (by WP Engine) |
| **Contact Form 7** | Handle contact form submissions and send emails | Search "Contact Form 7" (by Rock Lobster Inc) |
| **Flamingo** | Stores Contact Form 7 submissions in the database (so you don't lose them) | Search "Flamingo" (by Rock Lobster Inc) |

> **Note about ACF and REST API:** ACF has built-in REST API support — you do NOT need the "ACF to REST API" plugin. When creating each ACF field group, scroll to **Settings** at the bottom and set **"Show in REST API"** to **Yes**. ACF fields will then appear under the `acf` key in your REST API responses automatically.

### Optional but recommended:

| Plugin | Purpose |
|--------|---------|
| **Yoast SEO** | Adds SEO metadata to the REST API (useful for auto-generating meta tags) |
| **WP Mail SMTP** | Ensures WordPress emails actually get delivered (configure with your SMTP provider) |
| **Wordfence Security** | Firewall and malware scanning |
| **UpdraftPlus** | Automatic backups |

### Plugins you do NOT need:

- Any page builder (Elementor, Divi, WPBakery, etc.) — the frontend is Next.js
- Any theme-related plugin — the theme doesn't matter
- Any caching plugin (W3 Total Cache, WP Super Cache) — only the API is used
- Any SEO plugin that modifies HTML output — the HTML is rendered by Next.js

---

## 8. Phase 5: Create Content Types & Fields

### 8A. Create Custom Post Types with CPT UI

Go to **CPT UI** → **Add/Edit Post Types**.

#### Post Type 1: Internships

| Setting | Value |
|---------|-------|
| **Post Type Slug** | `internship` |
| **Plural Label** | `Internships` |
| **Singular Label** | `Internship` |
| **Show in REST API** | `true` |
| **REST API base slug** | `internships` |
| **Has Archive** | `true` |
| **Menu Icon** | `dashicons-portfolio` |
| **Supports** | Title, Editor, Thumbnail, Excerpt, Custom Fields |

Click **"Add Post Type"**.

#### Post Type 2: Testimonials

| Setting | Value |
|---------|-------|
| **Post Type Slug** | `testimonial` |
| **Plural Label** | `Testimonials` |
| **Singular Label** | `Testimonial` |
| **Show in REST API** | `true` |
| **REST API base slug** | `testimonials` |
| **Has Archive** | `true` |
| **Menu Icon** | `dashicons-format-quote` |
| **Supports** | Title, Editor, Thumbnail, Custom Fields |

Click **"Add Post Type"**.

#### Custom Taxonomies (for internships filtering)

Go to **CPT UI** → **Add/Edit Taxonomies**.

**Taxonomy 1: Location**
- Slug: `internship_location`
- Plural: `Locations`
- Singular: `Location`
- Attach to: `Internship`
- Show in REST: `true`
- REST base: `internship_locations`
- Hierarchical: `true`

**Taxonomy 2: Field/Industry**
- Slug: `internship_field`
- Plural: `Fields`
- Singular: `Field`
- Attach to: `Internship`
- Show in REST: `true`
- REST base: `internship_fields`
- Hierarchical: `true`

**Taxonomy 3: Program**
- Slug: `internship_program`
- Plural: `Programs`
- Singular: `Program`
- Attach to: `Internship`
- Show in REST: `true`
- REST base: `internship_programs`
- Hierarchical: `true`

### 8B. Create Custom Fields with ACF

Go to **ACF** → **Field Groups** → **Add New**.

#### Field Group 1: "Internship Details"

- **Location Rule:** Post Type is equal to `Internship`

Create these fields:

| Field Label | Field Name | Field Type | Required | Instructions |
|------------|------------|------------|----------|-------------|
| Start Date | `start_date` | Date Picker | Yes | See date format note below |
| End Date | `end_date` | Date Picker | Yes | See date format note below |
| Application Deadline | `application_deadline` | Date Picker | Yes | See date format note below |
| Cost | `cost` | Text | Yes | Include currency sign, e.g. "$6,050" |
| Duration | `duration` | Text | Yes | e.g. "4 weeks" |
| Format | `format` | Select | Yes | Choices: In-Country, Hybrid, Virtual |
| Application Status | `application_status` | Select | Yes | Choices: open, closed. Default: open |
| Application URL | `application_url` | URL | No | External link to application form (e.g. Typeform URL) |
| Country | `country` | Text | Yes | e.g. "Ghana" or "Rwanda" |
| City | `city` | Text | Yes | e.g. "Accra" or "Kigali" |
| Highlights | `highlights` | Textarea | No | Enter one highlight per line (e.g. "Fintech & Technology"). Set "New Lines" to "No formatting". |

**Date Picker format settings:**

For each Date Picker field (Start Date, End Date, Application Deadline), configure these two settings:

| Setting | What to pick | What it does |
|---------|-------------|-------------|
| **Display Format** | `F j, Y` | Shows as "June 22, 2026" in wp-admin (easy to read when editing) |
| **Return Format** | Custom → type `Y-m-d` | Sends as "2026-06-22" to the API (what the Next.js code expects) |

**Highlights field note:** Since Repeater is a Pro-only ACF feature, we use Textarea instead. Enter one highlight per line in WordPress. The Next.js code splits by newline to get an array:
```javascript
const highlights = acf.highlights ? acf.highlights.split('\n').filter(Boolean) : [];
```

**Important:** After creating all fields, scroll to the **Settings** section at the bottom of the field group and set **"Show in REST API"** to **Yes**. This is required for ACF fields to appear in the API.

Click **"Publish"** to save the field group.

#### Field Group 2: "Testimonial Details"

- **Location Rule:** Post Type is equal to `Testimonial`

These fields store the structured data that arrives from the frontend testimonial submission form. Students submit testimonials on the website, and they appear as **Drafts** in WordPress for you to approve or decline.

| Field Label | Field Name | Field Type | Required | Instructions |
|------------|------------|------------|----------|-------------|
| Student Name | `student_name` | Text | Yes | Full name of the student |
| Email | `email` | Email | No | Student's email (for follow-up, not displayed on site) |
| Program | `program` | Text | No | e.g. "Ghana Internship 2024" |
| Year | `year` | Text | No | e.g. "2024" |
| Quote | `quote` | Textarea | Yes | The testimonial text |

**Important:** Set **"Show in REST API"** to **Yes** in the field group Settings.

**How the approval workflow works:**

1. A student fills out the testimonial form on your website
2. The form POSTs to a WordPress REST endpoint (set up in section 8F below)
3. WordPress creates the testimonial as a **Draft** — it is NOT visible on the site
4. You receive an email notification with the testimonial content and a link to review it
5. In WordPress, go to **Testimonials** — drafts appear at the top
6. Read the testimonial, then either:
   - Click **"Publish"** to approve it (it now shows on the website)
   - Click **"Move to Trash"** to decline it
7. Only **Published** testimonials are fetched and displayed by the Next.js frontend

#### Site Metrics Settings Page (no ACF Pro needed)

ACF Options Pages are a Pro-only feature, so we use a custom settings page built with a Code Snippet instead. This gives you the same result — an admin page where you update your site metrics, exposed via REST API.

Go to **Snippets** → **Add New**, name it `Site Metrics Settings Page`, and paste:

```php
/**
 * Custom Settings Page: Site Metrics
 * Adds a "Site Metrics" page to the WordPress admin sidebar
 * where you can update numbers that appear across the site.
 */

// Register the settings
add_action('admin_init', function() {
    register_setting('hilltop_metrics', 'hilltop_programs_delivered');
    register_setting('hilltop_metrics', 'hilltop_years_in_africa');
    register_setting('hilltop_metrics', 'hilltop_african_countries');
    register_setting('hilltop_metrics', 'hilltop_host_organizations');
    register_setting('hilltop_metrics', 'hilltop_students_placed');
});

// Add the menu page
add_action('admin_menu', function() {
    add_menu_page(
        'Site Metrics',
        'Site Metrics',
        'manage_options',
        'hilltop-metrics',
        'hilltop_metrics_page_html',
        'dashicons-chart-bar',
        30
    );
});

// Render the settings page
function hilltop_metrics_page_html() {
    if (!current_user_can('manage_options')) return;
    
    if (isset($_GET['settings-updated'])) {
        add_settings_error('hilltop_messages', 'hilltop_message', 'Metrics updated!', 'updated');
    }
    settings_errors('hilltop_messages');
    ?>
    <div class="wrap">
        <h1>Site Metrics</h1>
        <p>These numbers appear across the website (homepage stats bar, about page, testimonials page, etc.).</p>
        <form method="post" action="options.php">
            <?php settings_fields('hilltop_metrics'); ?>
            <table class="form-table">
                <tr>
                    <th><label for="hilltop_programs_delivered">Programs Delivered</label></th>
                    <td><input type="number" id="hilltop_programs_delivered" name="hilltop_programs_delivered" value="<?php echo esc_attr(get_option('hilltop_programs_delivered', 50)); ?>" class="small-text"> <span class="description">e.g. 50</span></td>
                </tr>
                <tr>
                    <th><label for="hilltop_years_in_africa">Years in Africa</label></th>
                    <td><input type="number" id="hilltop_years_in_africa" name="hilltop_years_in_africa" value="<?php echo esc_attr(get_option('hilltop_years_in_africa', 10)); ?>" class="small-text"> <span class="description">e.g. 10</span></td>
                </tr>
                <tr>
                    <th><label for="hilltop_african_countries">African Countries</label></th>
                    <td><input type="number" id="hilltop_african_countries" name="hilltop_african_countries" value="<?php echo esc_attr(get_option('hilltop_african_countries', 7)); ?>" class="small-text"> <span class="description">e.g. 7</span></td>
                </tr>
                <tr>
                    <th><label for="hilltop_host_organizations">Host Organizations</label></th>
                    <td><input type="number" id="hilltop_host_organizations" name="hilltop_host_organizations" value="<?php echo esc_attr(get_option('hilltop_host_organizations', 50)); ?>" class="small-text"> <span class="description">e.g. 50</span></td>
                </tr>
                <tr>
                    <th><label for="hilltop_students_placed">Students Placed</label></th>
                    <td><input type="number" id="hilltop_students_placed" name="hilltop_students_placed" value="<?php echo esc_attr(get_option('hilltop_students_placed', 1000)); ?>" class="small-text"> <span class="description">e.g. 1000</span></td>
                </tr>
            </table>
            <?php submit_button('Save Metrics'); ?>
        </form>
    </div>
    <?php
}
```

Activate the snippet. You'll see a new **"Site Metrics"** item with a chart icon in the WordPress admin sidebar. Click it to update your numbers anytime.

### 8C. Set Up Contact Form 7

1. Go to **Contact** → **Add New**
2. Name the form: `Hilltop Contact Form`
3. Use this form template:

```
<p>Your Name (required)
[text* your-name]</p>

<p>Your Email (required)
[email* your-email]</p>

<p>Phone Number
[tel your-phone]</p>

<p>Program Interest
[select your-program "" "Ghana Internship Program" "Rwanda Internship Program" "Education Programs" "Custom Program" "Other"]</p>

<p>Subject (required)
[text* your-subject]</p>

<p>Your Message (required)
[textarea* your-message]</p>

[submit "Send Message"]
```

4. In the **Mail** tab, set:
   - **To:** `support@hilltopglobalgroup.com`
   - **From:** `Hilltop Website <wordpress@cms.hilltopglobalgroup.com>`
   - **Subject:** `[Hilltop Contact] [your-subject]`
   - **Message Body:**
   ```
   Name: [your-name]
   Email: [your-email]
   Phone: [your-phone]
   Program Interest: [your-program]
   Subject: [your-subject]
   
   Message:
   [your-message]
   ```
   - **Additional Headers:** `Reply-To: [your-email]`

5. Click **"Save"**
6. Note the form ID (shown in the shortcode, e.g. `[contact-form-7 id="123"]`). You'll need this number.

### 8D. Expose Contact Form 7 to REST API

Add a new Code Snippet called `CF7 REST API Endpoint`:

```php
/**
 * Accept contact form submissions via REST API
 * POST to: /wp-json/hilltop/v1/contact
 */
add_action('rest_api_init', function() {
    register_rest_route('hilltop/v1', '/contact', array(
        'methods'  => 'POST',
        'callback' => 'hilltop_handle_contact_form',
        'permission_callback' => '__return_true',
    ));
});

function hilltop_handle_contact_form($request) {
    $params = $request->get_json_params();
    
    $name    = sanitize_text_field($params['name'] ?? '');
    $email   = sanitize_email($params['email'] ?? '');
    $phone   = sanitize_text_field($params['phone'] ?? '');
    $program = sanitize_text_field($params['program'] ?? '');
    $subject = sanitize_text_field($params['subject'] ?? '');
    $message = sanitize_textarea_field($params['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        return new WP_REST_Response(array('error' => 'Missing required fields'), 400);
    }
    
    // Send email
    $to = 'support@hilltopglobalgroup.com';
    $email_subject = '[Hilltop Contact] ' . $subject;
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nProgram: $program\nSubject: $subject\n\nMessage:\n$message";
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $name . ' <' . $email . '>',
    );
    
    $sent = wp_mail($to, $email_subject, $email_body, $headers);
    
    if ($sent) {
        return new WP_REST_Response(array('ok' => true, 'message' => 'Message sent successfully'), 200);
    } else {
        return new WP_REST_Response(array('error' => 'Failed to send email'), 500);
    }
}
```

### 8E. Expose Testimonial Submissions to REST API

This endpoint lets students submit testimonials from the Next.js frontend. Submissions are saved as **Drafts** and must be manually approved.

Add a new Code Snippet called `Testimonial Submission REST Endpoint`:

```php
/**
 * Accept testimonial submissions from the frontend.
 * Creates testimonials as DRAFTS — must be manually approved (published) in wp-admin.
 * POST to: /wp-json/hilltop/v1/testimonial
 */
add_action('rest_api_init', function() {
    register_rest_route('hilltop/v1', '/testimonial', array(
        'methods'  => 'POST',
        'callback' => 'hilltop_handle_testimonial_submission',
        'permission_callback' => '__return_true',
    ));
});

function hilltop_handle_testimonial_submission($request) {
    $params = $request->get_json_params();
    
    $name    = sanitize_text_field($params['student_name'] ?? '');
    $program = sanitize_text_field($params['program'] ?? '');
    $year    = sanitize_text_field($params['year'] ?? '');
    $quote   = sanitize_textarea_field($params['quote'] ?? '');
    $email   = sanitize_email($params['email'] ?? '');
    
    if (empty($name) || empty($quote)) {
        return new WP_REST_Response(array('error' => 'Name and testimonial text are required'), 400);
    }
    
    // Create as DRAFT — not visible until admin publishes it
    $post_id = wp_insert_post(array(
        'post_type'   => 'testimonial',
        'post_title'  => $name . ' — Testimonial',
        'post_status' => 'draft',
        'post_content'=> $quote,
    ));
    
    if (is_wp_error($post_id)) {
        return new WP_REST_Response(array('error' => 'Failed to save testimonial'), 500);
    }
    
    // Save ACF fields
    update_field('student_name', $name, $post_id);
    update_field('email', $email, $post_id);
    update_field('program', $program, $post_id);
    update_field('year', $year, $post_id);
    update_field('quote', $quote, $post_id);
    
    // Notify admin by email
    wp_mail(
        'sachuli@hilltopglobalgroup.com',
        '[Hilltop] New Testimonial Submission — ' . $name,
        "A new testimonial was submitted and is awaiting your review.\n\n" .
        "Student: $name\n" .
        "Email: $email\n" .
        "Program: $program\n" .
        "Year: $year\n\n" .
        "Testimonial:\n$quote\n\n" .
        "Review it here: " . admin_url("post.php?post=$post_id&action=edit"),
        array('Reply-To: ' . $name . ' <' . $email . '>')
    );
    
    return new WP_REST_Response(array(
        'ok'      => true,
        'message' => 'Thank you! Your testimonial has been submitted for review.',
    ), 200);
}
```

### 8F. Expose Site Metrics to REST API

Add another Code Snippet called `Site Metrics REST Endpoint`:

```php
/**
 * Expose Site Metrics via REST API
 * GET: /wp-json/hilltop/v1/metrics
 * Reads from the custom settings page values (WordPress options table).
 */
add_action('rest_api_init', function() {
    register_rest_route('hilltop/v1', '/metrics', array(
        'methods'  => 'GET',
        'callback' => function() {
            return new WP_REST_Response(array(
                'programs_delivered'  => intval(get_option('hilltop_programs_delivered', 50)),
                'years_in_africa'    => intval(get_option('hilltop_years_in_africa', 10)),
                'african_countries'  => intval(get_option('hilltop_african_countries', 7)),
                'host_organizations' => intval(get_option('hilltop_host_organizations', 50)),
                'students_placed'    => intval(get_option('hilltop_students_placed', 1000)),
            ), 200);
        },
        'permission_callback' => '__return_true',
    ));
});
```

---

## 9. Phase 6: Configure CORS for the REST API

**Goal:** Allow your Next.js app (on Vercel or localhost) to fetch data from the WordPress REST API.

Add a Code Snippet called `CORS Headers for REST API`:

```php
/**
 * Add CORS headers so the Next.js frontend can call the REST API.
 * Update the allowed origins list as needed.
 */
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        $allowed_origins = array(
            'https://hilltopglobalgroup.com',
            'https://www.hilltopglobalgroup.com',
            'http://localhost:3000',
            'http://localhost:3001',
        );
        
        // Also allow your Vercel preview URLs
        $origin = get_http_origin();
        if (in_array($origin, $allowed_origins) || preg_match('/\.vercel\.app$/', $origin)) {
            header('Access-Control-Allow-Origin: ' . esc_url_raw($origin));
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Allow-Credentials: true');
        }
        
        return $value;
    });
}, 15);
```

---

## 10. Phase 7: Connect the Next.js Frontend

**Goal:** Point the Next.js app to the new WordPress CMS.

### Step 1: Create / update environment variables

Create a file `.env.local` in the project root (this file is gitignored):

```env
# WordPress Headless CMS API
NEXT_PUBLIC_WORDPRESS_API_URL=https://cms.hilltopglobalgroup.com/wp-json/wp/v2

# Custom Hilltop API endpoints
NEXT_PUBLIC_HILLTOP_API_URL=https://cms.hilltopglobalgroup.com/wp-json/hilltop/v1
```

### Step 2: Add the same variables to Vercel

1. Go to your project on **Vercel** → **Settings** → **Environment Variables**
2. Add both variables:
   - `NEXT_PUBLIC_WORDPRESS_API_URL` = `https://cms.hilltopglobalgroup.com/wp-json/wp/v2`
   - `NEXT_PUBLIC_HILLTOP_API_URL` = `https://cms.hilltopglobalgroup.com/wp-json/hilltop/v1`
3. Apply to **Production**, **Preview**, and **Development** environments
4. Click **"Save"**

### Step 3: Update `next.config.ts` to allow images from new CMS

The file `next.config.ts` in the project root needs the new CMS domain added to `remotePatterns`. The updated config should be:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

### Step 4: Update the Contact Form API route

The file `app/api/contact/route.ts` currently just logs submissions. Update it to forward to WordPress:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, program, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Forward to WordPress REST endpoint
    const wpApiUrl = process.env.NEXT_PUBLIC_HILLTOP_API_URL;
    
    if (wpApiUrl) {
      const wpRes = await fetch(`${wpApiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, program, message }),
      });

      if (!wpRes.ok) {
        console.error('WordPress contact API error:', await wpRes.text());
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
      }
    } else {
      // Fallback: just log it
      console.log('Contact form submission (no WP API configured):', body);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

### Step 5: Redeploy on Vercel

After updating the environment variables and `next.config.ts`, trigger a redeployment:

1. Push your code changes to the repo, OR
2. Go to Vercel → your project → **Deployments** → click **"Redeploy"** on the latest deployment

---

## 11. Phase 8: Enter Your Content

### News / Blog Posts

1. Go to `https://cms.hilltopglobalgroup.com/wp-admin` → **Posts** → **Add New**
2. Write your blog post as usual
3. Add a **Featured Image** (this shows in the hero section on the website)
4. Assign **Categories** (e.g. "Program Updates", "Student Stories")
5. Click **"Publish"**

> **Migrating from old WordPress:** You can export posts from the old WordPress using **Tools → Export** (select "Posts") and import into the new one using **Tools → Import** → WordPress Importer. This preserves all content, categories, and images.

### Internships

1. Go to **Internships** → **Add New**
2. Fill in the title (e.g. "2026 Summer Business Internship Program - Ghana")
3. Write the full program description in the editor
4. Add a **Featured Image** (hero background)
5. Fill in all **ACF custom fields** (dates, cost, duration, etc.)
6. Assign **Location**, **Field**, and **Program** taxonomies
7. Click **"Publish"**

### Testimonials

Testimonials work differently from other content — they come from two sources:

**Source 1: Student submissions (automatic)**
Students fill out the testimonial form on the website. Their submissions automatically appear as **Drafts** in WordPress → **Testimonials**. You review each one and either:
- Click **"Publish"** to approve it (shows on website)
- Click **"Move to Trash"** to decline it

**Source 2: Manual entry (for existing testimonials you already have)**
1. Go to **Testimonials** → **Add New**
2. Enter the student's name as the title
3. Fill in the ACF fields (student_name, quote, program, year)
4. Add a student photo as the Featured Image (optional)
5. Click **"Publish"** (since you're manually entering an approved testimonial)

### Site Metrics

1. Go to **Site Metrics** in the WordPress sidebar
2. Enter your current numbers:
   - Programs Delivered: `50`
   - Years in Africa: `10`
   - African Countries: `7`
   - Host Organizations: `50`
   - Students Placed: `1000`
3. Click **"Update"**

---

## 12. Phase 9: Test Everything

### Test the REST API directly

Open these URLs in your browser. You should see JSON data:

```
https://cms.hilltopglobalgroup.com/wp-json/wp/v2/posts
https://cms.hilltopglobalgroup.com/wp-json/wp/v2/internships
https://cms.hilltopglobalgroup.com/wp-json/wp/v2/testimonials
https://cms.hilltopglobalgroup.com/wp-json/wp/v2/categories
https://cms.hilltopglobalgroup.com/wp-json/hilltop/v1/metrics
```

> **Note:** The testimonials endpoint only returns **published** testimonials. Draft submissions won't appear until you approve them in wp-admin.

If any of these return a 404 or error:
- Make sure the post type has `show_in_rest: true`
- Go to **Settings → Permalinks** and click **"Save Changes"** (this flushes rewrite rules)
- Make sure the plugin creating the post type is activated

### Test the Next.js frontend locally

```bash
# In the hilltop-platform directory
npm run dev
```

Then visit:
- `http://localhost:3000/news` — should show blog posts from the new CMS
- `http://localhost:3000/internships/current` — should show current internship cards
- `http://localhost:3000/contact` — submit the form, check if the email arrives

### Test the contact form

1. Fill out the contact form on the website
2. Check:
   - [ ] Does the email arrive at `support@hilltopglobalgroup.com`?
   - [ ] Is it stored in WordPress under **Flamingo** → **Inbound Messages**?
   - [ ] Does the form show a success message?

If emails don't arrive, install and configure **WP Mail SMTP** with your email provider's SMTP settings.

---

## 13. Phase 10: Launch Day Cutover

**When you're ready to go live (everything tested, content entered):**

### Step 1: Update Cloudflare DNS

1. Log into **Cloudflare**
2. Go to **DNS** → **Records**
3. Find the `A` record (or `CNAME`) for `hilltopglobalgroup.com` (the main domain — NOT the `cms` one)
4. **Change it** to point to Vercel:
   - **Option A (CNAME — recommended):** Change the record type to `CNAME`, set the target to `cname.vercel-dns.com`
   - **Option B (A record):** Change the IP to `76.76.21.21` (Vercel's IP)
5. If there's a `www` record, update that too (CNAME to `cname.vercel-dns.com`)
6. Keep the `cms` A record pointing to InMotion — **don't touch it**
7. Save

### Step 2: Add domain to Vercel

1. Go to **Vercel** → your project → **Settings** → **Domains**
2. Add `hilltopglobalgroup.com`
3. Also add `www.hilltopglobalgroup.com` (Vercel will auto-redirect)
4. Vercel will automatically provision an SSL certificate

### Step 3: Update the CORS snippet in WordPress

Add your new Vercel domain to the allowed origins if you haven't already (you should have in Phase 6).

### Step 4: Update the headless redirect snippet

In the WordPress Code Snippet `Headless Mode — Redirect Frontend`, update the redirect URL if needed (it should already point to `https://hilltopglobalgroup.com`).

### Step 5: Verify

Wait 5–15 minutes for DNS propagation, then:

- [ ] Visit `https://hilltopglobalgroup.com` — should show the Next.js site
- [ ] Visit `https://cms.hilltopglobalgroup.com/wp-admin` — should show WordPress admin
- [ ] Visit `https://cms.hilltopglobalgroup.com` — should redirect to `hilltopglobalgroup.com`
- [ ] Visit `https://hilltopglobalgroup.com/news` — should show blog posts from CMS
- [ ] Submit the contact form — should receive an email

### DNS Propagation

DNS changes can take up to 48 hours to propagate worldwide, but with Cloudflare it's usually 5–15 minutes. You can check propagation at: https://www.whatsmydns.net/#A/hilltopglobalgroup.com

---

## 14. Content Management Reference

### Everyday tasks (things you'll do regularly)

| Task | Where to Do It |
|------|---------------|
| Write a new blog post | WordPress → Posts → Add New |
| Add a new internship | WordPress → Internships → Add New |
| Close applications for an internship | Edit the internship → Change "Application Status" to "closed" |
| Review/approve student testimonials | WordPress → Testimonials → click a Draft → Publish or Trash |
| Update site metrics | WordPress → Site Metrics → Update numbers |
| Check contact form submissions | WordPress → Flamingo → Inbound Messages |
| Upload images | WordPress → Media → Add New |

### API Endpoints Quick Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/wp-json/wp/v2/posts` | GET | All blog posts |
| `/wp-json/wp/v2/posts?slug=my-post` | GET | Single post by slug |
| `/wp-json/wp/v2/posts?_embed&per_page=12` | GET | Posts with featured images and categories |
| `/wp-json/wp/v2/categories` | GET | All categories |
| `/wp-json/wp/v2/internships` | GET | All internships |
| `/wp-json/wp/v2/internships?_embed` | GET | Internships with images |
| `/wp-json/wp/v2/testimonials` | GET | All testimonials |
| `/wp-json/wp/v2/media/{id}` | GET | Single media item |
| `/wp-json/hilltop/v1/metrics` | GET | Site-wide metrics |
| `/wp-json/hilltop/v1/contact` | POST | Submit contact form |
| `/wp-json/hilltop/v1/testimonial` | POST | Submit a testimonial (creates as Draft) |

### Files in this codebase that fetch from WordPress

| File | What It Fetches |
|------|----------------|
| `app/news/page.tsx` | Blog posts + categories |
| `app/news/[slug]/page.tsx` | Single blog post by slug |
| `components/internships/CurrentInternshipsOnly.tsx` | Current internship listings |
| `components/internships/PastInternshipsOnly.tsx` | Past internship listings |
| `components/internships/WordPressPrograms.tsx` | All internship programs |
| `components/internships/Programs2026.tsx` | Internship programs |
| `components/internships/InternshipProgramsSection.tsx` | Internship programs |
| `app/internships/[slug]/page.tsx` | Single internship detail + gallery images |
| `components/news/NewsGrid.tsx` | Renders the blog post grid |
| `app/api/contact/route.ts` | Forwards contact form to WordPress |

All of these use the `NEXT_PUBLIC_WORDPRESS_API_URL` environment variable.

---

## 15. Troubleshooting

### "REST API returns 404"

1. Go to WordPress → **Settings** → **Permalinks** → click **"Save Changes"** (flushes rewrite rules)
2. Make sure the custom post type has `show_in_rest => true`
3. Visit `https://cms.hilltopglobalgroup.com/wp-json/` — you should see a JSON index of all routes

### "CORS error in browser console"

1. Check that the CORS Code Snippet (Phase 6) is activated
2. Make sure your domain is in the `$allowed_origins` array
3. For Vercel preview URLs, make sure the regex pattern matches

### "Images from WordPress don't load on Next.js"

1. Check `next.config.ts` — the `remotePatterns` must include `cms.hilltopglobalgroup.com`
2. Make sure the image URL uses the correct protocol (https)
3. Redeploy on Vercel after changing `next.config.ts`

### "Contact form emails don't arrive"

1. Install **WP Mail SMTP** plugin
2. Configure with your email provider (Gmail SMTP, SendGrid, Mailgun, etc.)
3. Use WP Mail SMTP's "Email Test" feature to verify delivery
4. Check spam folders

### "Internships don't show ACF fields in the API"

1. Edit the ACF field group → scroll to **Settings** at the bottom → make sure **"Show in REST API"** is set to **Yes**
2. ACF fields should appear under the `acf` key in the JSON response
3. Test: `https://cms.hilltopglobalgroup.com/wp-json/wp/v2/internships?_embed`
4. If you still don't see the `acf` key, go to **Settings → Permalinks** and click **"Save Changes"** to flush rewrite rules

### "Can't access wp-admin after headless redirect"

1. Access WordPress directly: `https://cms.hilltopglobalgroup.com/wp-admin`
2. If that redirects too, temporarily disable the headless snippet via:
   - cPanel → File Manager → navigate to where Code Snippets stores its data
   - OR add `?bypass_redirect=1` logic to the snippet temporarily
   - OR use FTP/File Manager to edit the theme's `functions.php` to remove the redirect

### "Old WordPress content migration"

To copy blog posts from the old WordPress to the new one:

1. On the **old** WordPress: Go to **Tools** → **Export** → select "Posts" → click "Download Export File"
2. On the **new** WordPress: Go to **Tools** → **Import** → click "WordPress" → "Install Now" → "Run Importer"
3. Upload the XML file from step 1
4. Map the author to your new admin user
5. Check "Download and import file attachments" to copy images
6. Click "Submit"

---

## Checklist Summary

### Before launch:

- [ ] Subdomain `cms.hilltopglobalgroup.com` created in cPanel
- [ ] DNS A record for `cms` added in Cloudflare
- [ ] Fresh WordPress installed on the subdomain
- [ ] Permalinks set to "Post name"
- [ ] Headless redirect snippet activated
- [ ] All required plugins installed and activated
- [ ] Custom Post Types created (Internships, Testimonials)
- [ ] ACF field groups created and assigned
- [ ] CORS snippet activated
- [ ] Contact Form 7 configured with REST endpoint
- [ ] Testimonial submission REST endpoint snippet activated
- [ ] ACF Options page for metrics created
- [ ] `.env.local` created with new CMS URLs
- [ ] Vercel environment variables updated
- [ ] `next.config.ts` updated with new image domain
- [ ] Contact API route updated to forward to WordPress
- [ ] Content entered (blog posts, internships, testimonials, metrics)
- [ ] REST API tested (all endpoints return correct data)
- [ ] Next.js frontend tested locally with new CMS
- [ ] Contact form tested end-to-end

### Launch day:

- [ ] Cloudflare DNS updated (main domain → Vercel)
- [ ] Domain added to Vercel project
- [ ] SSL certificate provisioned by Vercel
- [ ] Site loads correctly on `hilltopglobalgroup.com`
- [ ] All pages load with CMS content
- [ ] Contact form works
- [ ] Old WordPress files left intact as backup on InMotion

---

**Questions?** If anything in this guide is unclear, the key thing to remember is: WordPress is just a database with an API. The Next.js app is the website people see. They talk to each other over HTTP. Everything else is plumbing.
