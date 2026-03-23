# Hilltop CMS — WordPress Operations Guide

**For:** Non-technical admins managing content at `cms.hilltopglobalgroup.com`
**Last updated:** March 2026

---

## Table of Contents

1. [Your Plugins: What They Do](#1-your-plugins-what-they-do)
2. [Spam Prevention & Security](#2-spam-prevention--security)
3. [Managing Internships (Current → Past)](#3-managing-internships-current--past)
4. [Managing Blog Posts](#4-managing-blog-posts)
5. [Managing Testimonials](#5-managing-testimonials)
6. [Updating Site Metrics](#6-updating-site-metrics)
7. [Contact Form & Submissions](#7-contact-form--submissions)
8. [Newsletter Signups](#8-newsletter-signups)
9. [Media & Image Management](#9-media--image-management)
10. [Complete Data Flow Map](#10-complete-data-flow-map)
11. [Common Tasks Cheat Sheet](#11-common-tasks-cheat-sheet)
12. [Recommended Optional Plugins](#12-recommended-optional-plugins)

---

## 1. Your Plugins: What They Do

You installed these plugins during setup. Here's what each one does in plain English:

### Core Plugins (Required — do NOT deactivate)

| Plugin | What It Does | Where You See It |
|--------|-------------|-----------------|
| **Code Snippets** | Runs custom PHP code that makes WordPress headless, handles CORS, creates the REST API endpoints for contact forms/testimonials/metrics. Think of it as the "glue" between WordPress and the website. | **Snippets** in sidebar. You should see 6–7 active snippets. Never deactivate these without understanding what they do. |
| **Custom Post Type UI** | Creates the "Internships" and "Testimonials" content types (they appear in your sidebar just like Posts). Without this, you'd only have Posts and Pages. | **CPT UI** in sidebar. Already configured — you shouldn't need to touch it unless adding new content types. |
| **Advanced Custom Fields (ACF)** | Adds the custom input fields you see when editing internships (start date, end date, cost, application status, etc.) and testimonials (student name, quote, rating, etc.). | **ACF** in sidebar. Already configured — field groups are set up. You fill in the fields when editing content. |
| **Contact Form 7** | Handles the contact form logic. When someone submits the contact form on the website, WordPress processes it and sends an email to your team. | **Contact** in sidebar. The form template is already set up. |
| **Flamingo** | Saves every contact form submission in the WordPress database so you never lose them, even if the email doesn't arrive. Think of it as a backup inbox. | **Flamingo** in sidebar → **Inbound Messages**. Check here if you think you missed an email. |

### How They Work Together

```
Website visitor fills out contact form
        ↓
Next.js sends data to WordPress REST API
        ↓
Code Snippets (CF7 REST Endpoint) receives it
        ↓
Contact Form 7 processes and sends email
        ↓
Flamingo stores a copy in the database
        ↓
You receive an email AND can check Flamingo
```

---

## 2. Spam Prevention & Security

### What's Already Protected

Your WordPress already has several layers of security from the setup:

1. **Headless Mode** — The WordPress frontend is completely hidden. Visitors get redirected to your real site. Bots can't crawl WordPress pages because they don't exist publicly.
2. **XML-RPC Disabled** — A common attack vector (brute-force login attempts) is already shut off via Code Snippets.
3. **Security Headers** — X-Content-Type-Options and X-Frame-Options are set on API responses.
4. **CORS Restrictions** — Only your domains (hilltopglobalgroup.com, localhost, Vercel previews) can call the API. Random websites cannot.
5. **Cloudflare** — If you're using the orange cloud (Proxied), Cloudflare provides DDoS protection, bot filtering, and hides your real server IP.

### Recommended: Add Anti-Spam Protection

**For contact form spam:**

1. Go to **Plugins** → **Add New**
2. Search for **"Akismet Anti-Spam"** (by Automattic — it comes pre-installed on most WordPress sites)
3. Activate it and connect with a free API key (free for personal/non-commercial, $10/mo for commercial — well worth it)
4. Akismet automatically filters spam submissions from Contact Form 7

**Alternative: reCAPTCHA for Contact Form 7:**

1. Go to **Contact** → **Integration** in the WordPress sidebar
2. You'll see **reCAPTCHA** integration
3. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
4. Register your site with these domains: `hilltopglobalgroup.com`, `cms.hilltopglobalgroup.com`
5. Choose **reCAPTCHA v3** (invisible — doesn't bother users)
6. Copy the **Site Key** and **Secret Key**
7. Paste them into Contact → Integration → reCAPTCHA → Setup Integration
8. Save

This adds an invisible spam check to all Contact Form 7 forms. Most spam bots will be blocked automatically.

**For testimonial form spam:**

The testimonial form already has built-in protection:
- Submissions are saved as **Drafts** — they never appear on the website until you approve them
- You get an email notification for each one, so you can quickly trash spam
- The REST endpoint validates required fields (name, email, testimonial text)

**For login security:**

1. Install **Wordfence Security** (free version) — Plugins → Add New → search "Wordfence"
2. After activation, go to **Wordfence** → **Firewall** and click **"Optimize Firewall"**
3. Go to **Wordfence** → **Login Security** → enable **Two-Factor Authentication (2FA)**
4. This prevents brute-force attacks on your wp-admin login

**For backups:**

1. Install **UpdraftPlus** (free version) — Plugins → Add New → search "UpdraftPlus"
2. Go to **Settings** → **UpdraftPlus Backups**
3. Set it to backup weekly to Google Drive, Dropbox, or email
4. This way, if anything goes wrong, you can restore

### Security Checklist

- [ ] Akismet OR reCAPTCHA activated for spam filtering
- [ ] Wordfence installed with 2FA enabled for all admin accounts
- [ ] UpdraftPlus configured for weekly backups
- [ ] WordPress auto-updates enabled (**Dashboard** → **Updates** → enable auto-updates for minor releases)
- [ ] Only trusted users have admin accounts
- [ ] Admin passwords are strong (16+ characters)

---

## 3. Managing Internships (Current → Past)

This is probably the most important workflow for you. Here's exactly how it works:

### How the Website Decides "Current" vs "Past"

The website checks one field: **Application Status**

| Application Status value | Where it shows on the website |
|-------------------------|-------------------------------|
| `open` | `/internships/current` page |
| `closed` | `/internships/past` page |

That's it. One field controls everything.

### To Move an Internship from Current → Past

1. Log into `https://cms.hilltopglobalgroup.com/wp-admin`
2. Click **Internships** in the sidebar
3. Find the internship you want to close (e.g. "Summer 2026 Ghana Program")
4. Click **Edit**
5. Scroll down to the ACF custom fields section
6. Find **"Application Status"**
7. Change it from **`open`** to **`closed`**
8. Click **"Update"** (top right)

Done. Within 60 seconds (the website's cache refresh interval), the program will:
- Disappear from the "Current Internships" page
- Appear on the "Past Internships" page
- Show a "Completed" badge instead of "Applications Open"

### To Create a New Current Internship

1. Go to **Internships** → **Add New**
2. Fill in the **Title** — e.g. "Fall 2026 Business Internship Program — Rwanda"
3. Write the program description in the main editor
4. Add a **Featured Image** (this becomes the card image and hero background)
5. Fill in ALL the custom fields:

| Field | Example | Notes |
|-------|---------|-------|
| Start Date | June 22, 2026 | Use the date picker |
| End Date | July 19, 2026 | Use the date picker |
| Application Deadline | April 15, 2026 | Use the date picker |
| Cost | $6,050 | Include currency symbol |
| Duration | 4 weeks | |
| Format | In-Country | Choose from dropdown |
| Application Status | **open** | Must be "open" to show on current page |
| Application URL | https://8xlyl7wsuni.typeform.com/to/... | External link to application form |
| Country | Rwanda | |
| City | Kigali | |
| Highlights | One per line, e.g.:<br>Fintech & Technology<br>Healthcare Innovation<br>Social Enterprise | Enter one per line |

6. Assign a **Location** taxonomy (sidebar) — e.g. "Rwanda"
7. Assign **Field/Industry** taxonomies if applicable
8. Click **"Publish"**

The new internship will appear on the "Current Internships" page almost immediately.

### To Bulk-Move All Current → Past (End of Season)

If you want to close all internships at once (e.g. after summer programs end):

1. Go to **Internships** in the sidebar
2. Check the **checkbox** next to each current internship
3. From the **"Bulk Actions"** dropdown at the top, select **"Edit"**
4. Click **"Apply"**
5. You'll see a bulk edit panel — unfortunately, bulk edit doesn't show ACF fields
6. So instead, click into each one individually and change Application Status to `closed`

> **Tip:** If you have many internships, do this at the end of each program season. It only takes a few minutes.

### The Two Static Cards (Ghana & Rwanda)

On the `/internships/current` page, there are always two featured "marketing" cards for Ghana and Rwanda at the top. These are hardcoded in the website code (they link to the detailed Ghana/Rwanda program pages). Below them, any WordPress-managed current internships also appear.

This means:
- The top Ghana/Rwanda cards are always visible regardless of WordPress
- Any additional current internships from WordPress appear below them
- When you close all WordPress internships, the two static cards still show

---

## 4. Managing Blog Posts

### Creating a New Blog Post

1. Go to **Posts** → **Add New**
2. Write your title and content
3. Add a **Featured Image** — this shows as the hero/card image on the news page
4. Assign one or more **Categories** (e.g. "Program Updates", "Student Stories", "Company News")
5. Write a short **Excerpt** (optional — if empty, WordPress auto-generates one from the content)
6. Click **"Publish"**

The post appears on `hilltopglobalgroup.com/news` within 60 seconds.

### Editing an Existing Post

1. Go to **Posts** → **All Posts**
2. Hover over the post title → click **"Edit"**
3. Make your changes
4. Click **"Update"**

### Unpublishing / Hiding a Post

1. Edit the post
2. In the **"Status"** section (right sidebar), change from "Published" to **"Draft"**
3. Click **"Update"**

The post disappears from the website but stays in WordPress for future use.

### Categories

Categories control the filter tabs on the news page. To create a new category:

1. Go to **Posts** → **Categories**
2. Enter the name (e.g. "Partner Spotlight")
3. Click **"Add New Category"**

---

## 5. Managing Testimonials

### How the Testimonial Flow Works

```
Student visits website → fills out testimonial form
        ↓
Form data sent to WordPress via API
        ↓
WordPress creates a DRAFT testimonial
        ↓
You receive an email notification
        ↓
You log into wp-admin → Testimonials
        ↓
Read the draft → Publish (approve) or Trash (decline)
        ↓
Published testimonials appear on the website
```

### Approving a Testimonial

1. You receive an email: "[Hilltop] New Testimonial Submission — Jane Doe"
2. Click the link in the email (or go to **Testimonials** in WordPress)
3. Click on the draft testimonial
4. Review the content:
   - Student Name, Email, Role, Organization
   - Program, Year, Rating
   - The actual testimonial quote
5. If it looks good: click **"Publish"** → it now shows on the website
6. If it's spam or inappropriate: click **"Move to Trash"**

### Manually Adding a Testimonial

For testimonials you already have (from the PDF, emails, etc.):

1. Go to **Testimonials** → **Add New**
2. Title: student's name
3. Fill in the ACF fields (student_name, email, role, organization, program, year, quote, rating)
4. Add a student photo as Featured Image (optional)
5. Click **"Publish"**

---

## 6. Updating Site Metrics

The numbers that appear across the site (homepage stats bar, about page, testimonials page):

1. Click **Site Metrics** in the WordPress sidebar (chart bar icon)
2. Update any number:
   - Programs Delivered: `50`
   - Years in Africa: `10`
   - African Countries: `7`
   - Host Organizations: `50`
   - Students Placed: `1000`
3. Click **"Save Metrics"**

> **Note:** The website currently uses hardcoded fallback values. The CMS values override them when available. If the CMS is unreachable, the fallback values display automatically.

---

## 7. Contact Form & Submissions

### Where Contact Submissions Go

Every contact form submission goes to **two places**:

1. **Email** → `support@hilltopglobalgroup.com` (configurable in the CF7 REST snippet)
2. **Flamingo database** → WordPress sidebar → **Flamingo** → **Inbound Messages**

### Checking Submissions in Flamingo

1. Go to **Flamingo** → **Inbound Messages**
2. You'll see a list of all submissions with sender name, email, subject, and date
3. Click any to view the full message

This is your backup — even if the email goes to spam or gets lost, Flamingo has it.

### If Emails Aren't Arriving

WordPress's default email function (`wp_mail`) uses your server's built-in mail. This sometimes ends up in spam or doesn't deliver at all. Fix:

1. Install **WP Mail SMTP** (Plugins → Add New → search "WP Mail SMTP")
2. Activate it and go through the setup wizard
3. Choose **"Other SMTP"** and enter:
   - SMTP Host: your email provider's SMTP server
   - SMTP Port: 587 (TLS) or 465 (SSL)
   - Username: your email address
   - Password: your email password or app password
4. Send a test email to verify

Popular SMTP options:
- **Gmail SMTP**: smtp.gmail.com, port 587, use an App Password
- **SendGrid**: Free tier, 100 emails/day
- **Mailgun**: Free tier, good deliverability

### Contact Sources

The website sends contact submissions from two places:
- The main **Contact page** form (`/contact`) — sends name, email, phone, subject, program interest, message
- The **Footer** mini-form ("Start a Conversation") — sends name, email, message

Both go through the same API endpoint and arrive in the same inbox.

---

## 8. Newsletter Signups

The newsletter signup form on the News page (`/news`) now submits through the same contact API. Submissions arrive in your email and Flamingo with the subject "Newsletter Signup".

To manage a proper newsletter:

**Option A (Simple — current setup):**
- Newsletter signups arrive in Flamingo with subject "Newsletter Signup"
- You manually add these emails to your mailing list (Mailchimp, etc.)

**Option B (Automated — recommended for scale):**
- Sign up for **Mailchimp** (free up to 500 contacts)
- Install the **MC4WP: Mailchimp for WordPress** plugin
- Connect your Mailchimp API key
- New signups automatically get added to your Mailchimp list
- You can then send email campaigns from Mailchimp

---

## 9. Media & Image Management

### Uploading Images

1. Go to **Media** → **Add New**
2. Drag and drop images, or click "Select Files"
3. WordPress automatically creates multiple sizes (thumbnail, medium, large, full)

### Best Practices

- **Featured Images for internships**: Use landscape images, at least 1200×600px
- **Featured Images for blog posts**: Same — landscape, 1200×600px minimum
- **File naming**: Use descriptive names like `ghana-summer-2026-group.jpg` not `IMG_4521.jpg`
- **File size**: Keep images under 2MB. Use [TinyPNG](https://tinypng.com/) to compress before uploading
- **Formats**: JPG for photos, PNG for graphics with transparency, WebP for best compression

---

## 10. Complete Data Flow Map

Here's exactly what connects to WordPress and what doesn't:

### Connected to WordPress (you control from wp-admin)

| Feature | WordPress Content Type | Frontend Page |
|---------|----------------------|---------------|
| Blog / News | Posts | `/news` and `/news/[slug]` |
| Current Internships | Internships (status: open) | `/internships/current` (below the static Ghana/Rwanda cards) |
| Past Internships | Internships (status: closed) | `/internships/past` |
| Individual Internship Details | Single Internship | `/internships/[slug]` |
| Testimonials (approved) | Testimonials (published) | Currently hardcoded — will switch to WP when enough approved |
| Testimonial Submissions | Testimonials (drafts) | Form on `/testimonials` |
| Contact Form | via CF7 + Flamingo | `/contact` and footer form |
| Newsletter Signups | via Contact API + Flamingo | `/news` page signup |
| Site Metrics | Site Metrics settings page | Homepage, About, Testimonials page stats |

### NOT Connected to WordPress (hardcoded in the code)

| Feature | Why It's Hardcoded | Page |
|---------|-------------------|------|
| Ghana program detail page | Specific, rarely-changing content about the Ghana program | `/internships/ghana` |
| Rwanda program detail page | Same — specific Rwanda content | `/internships/rwanda` |
| About Us / Our Story | Static brand story | `/about` |
| Education programs | Static program descriptions | `/education` |
| TVET page | Static content | `/education/tvet` |
| Values page | Static content | `/values` |
| Team page | Static team info | `/about/team` |
| Student testimonials carousel | Currently uses hardcoded data from PDF | `/testimonials` |
| The two featured cards on Current Internships | Always-visible Ghana/Rwanda marketing cards | `/internships/current` |

### The Key Insight

**You only need WordPress for things that change regularly.** Static pages about your company, programs, and values don't need a CMS — they're better as code because they're more performant and don't break if WordPress is down.

---

## 11. Common Tasks Cheat Sheet

### End of Season: Close All Programs

1. **Internships** → Edit each current internship → Change "Application Status" to `closed` → Update
2. That's it. Programs move to the Past page automatically.

### New Season: Create New Programs

1. **Internships** → Add New → Fill in all fields → Set status to `open` → Publish
2. Update the Application URL to your new Typeform link

### Someone Submitted a Testimonial

1. Check your email for "[Hilltop] New Testimonial Submission"
2. Click the link → read it → Publish or Trash

### Write a Blog Post About a Recent Program

1. **Posts** → Add New → Write your post → Add featured image → Choose category → Publish

### Update the "50+ Programs" Numbers

1. **Site Metrics** → Update numbers → Save

### Someone Says "I Submitted the Contact Form But Got No Response"

1. **Flamingo** → Inbound Messages → search for their name/email
2. If it's there, the submission worked (check your spam folder for the email)
3. If it's NOT there, the submission failed (check if ModSecurity is blocking API requests — you may need to disable it in cPanel)

### Check If the API Is Working

Open these URLs in your browser:
- `https://cms.hilltopglobalgroup.com/wp-json/wp/v2/posts` — should show blog posts
- `https://cms.hilltopglobalgroup.com/wp-json/wp/v2/internships` — should show internships
- `https://cms.hilltopglobalgroup.com/wp-json/hilltop/v1/metrics` — should show metrics

If any return an error, go to **Settings** → **Permalinks** → click **"Save Changes"** (this fixes most API issues).

### Something Broke After a WordPress Update

1. Try deactivating plugins one by one to find the culprit
2. If it's a Code Snippet, go to **Snippets** → find the problematic one → deactivate it
3. Restore from backup (UpdraftPlus → Existing Backups → Restore)

---

## 12. Recommended Optional Plugins

### Security & Anti-Spam

| Plugin | Purpose | Free? |
|--------|---------|-------|
| **Akismet Anti-Spam** | Filters spam from contact forms | Free for personal use, $10/mo commercial |
| **Wordfence Security** | Firewall, malware scan, 2FA login | Yes (free version is excellent) |

### Reliability & Backups

| Plugin | Purpose | Free? |
|--------|---------|-------|
| **UpdraftPlus** | Scheduled backups to cloud storage | Yes |
| **WP Mail SMTP** | Reliable email delivery via SMTP provider | Yes |

### Nice to Have

| Plugin | Purpose | Free? |
|--------|---------|-------|
| **MC4WP: Mailchimp for WordPress** | Auto-add newsletter signups to Mailchimp | Yes |
| **Redirection** | Track and manage 301 redirects | Yes |
| **WP Activity Log** | See who changed what and when (useful if multiple admins) | Yes |

### Plugins You Do NOT Need

- Page builders (Elementor, Divi, etc.) — the frontend is Next.js
- SEO plugins that modify HTML — Next.js handles SEO
- Caching plugins (W3 Total Cache, etc.) — only the API is used
- Any theme customization plugin — the theme is irrelevant in headless mode

---

## Quick Reference: Your Code Snippets

These are the custom PHP snippets running in **Snippets** → **All Snippets**. Do not deactivate them unless troubleshooting:

| Snippet Name | What It Does |
|-------------|-------------|
| Headless Mode — Redirect Frontend | Redirects all non-admin/non-API WordPress pages to your real site |
| Disable XML-RPC | Blocks a common attack vector |
| Security Headers | Adds security headers to API responses |
| CF7 REST API Endpoint | Lets the website submit contact forms to WordPress |
| Testimonial Submission REST Endpoint | Lets the website submit testimonials (saved as drafts) |
| Site Metrics Settings Page | Creates the "Site Metrics" page in the admin sidebar |
| Site Metrics REST Endpoint | Exposes metrics numbers to the website |
| CORS Headers for REST API | Allows your website domains to access the WordPress API |

**Rule of thumb:** If a snippet name starts with "Headless" or contains "REST" or "CORS" or "Security", it's critical infrastructure. Don't deactivate it.

---

**That's it.** Your day-to-day work is: write blog posts, manage internships (open/close), approve testimonials, and update metrics. Everything else runs automatically.
