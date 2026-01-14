# WordPress Internships CMS Setup Guide

## 🎯 Overview

This guide will help you set up WordPress as a CMS for managing internship programs. Once configured, you can add, edit, and manage internships from WordPress, and they'll automatically appear on your Next.js site with a beautiful, professional design matching your Ghana/Rwanda internship pages.

## 📋 Complete Setup Instructions

Follow these steps to add the Internships custom post type to your WordPress site.

---

## Step 1: Add Custom Post Type Code to WordPress

### Option A: Using Code Snippets Plugin (Recommended)

1. **Install Code Snippets Plugin:**
   - Go to WordPress Admin → **Plugins** → **Add New**
   - Search for **"Code Snippets"**
   - Install and activate

2. **Add the Internships Code:**
   - Go to **Snippets** → **Add New**
   - Give it a name: `Hilltop Internships Custom Post Type`
   - Copy the ENTIRE contents of `internships-custom-post-type.php`
   - Paste into the code editor
   - Check **"Run snippet everywhere"**
   - Click **"Save Changes and Activate"**

### Option B: Add to theme's functions.php

1. Go to **Appearance** → **Theme File Editor**
2. Click on **functions.php** (right sidebar)
3. Scroll to the bottom
4. Paste the contents of `internships-custom-post-type.php`
5. Click **"Update File"**

---

## Step 2: Verify the Custom Post Type

1. Refresh your WordPress admin dashboard
2. You should see a new menu item: **"Internships"** with a portfolio icon
3. Click on it - you should see "Add New" option

---

## Step 3: Create Your First Internship

### Basic Information:

1. Click **Internships** → **Add New**

2. **Title:** 
   ```
   2026 Summer Business Internship Program - Ghana
   ```
   *This appears as the main heading on the page*

3. **Excerpt (Short Summary - IMPORTANT!):**
   ```
   Gain professional experience in Accra placements across fintech, agritech, creative industries and more. Cultural immersion, leadership development and mentorship included.
   ```
   *This appears directly under the title in the hero section*

4. **Content (Full Program Description):**
   
   Write your detailed program description. Use headings and formatting:
   
   ```
   The program blends professional growth and cultural exploration in Accra. Interns work across technology, finance, agribusiness, health, and creative sectors. Fridays feature leadership, community engagement, and cultural excursions.

   ## Program Highlights
   
   - Project-based work with leading African startups
   - Weekly leadership development workshops
   - Cultural immersion activities and excursions
   - Professional mentorship and networking
   - Academic credit support documentation
   
   ## Industries & Placements
   
   Placements are available across multiple sectors including fintech, agribusiness, creative industries, technology, healthcare, and social impact organizations.
   
   ## What's Included
   
   - Pre-vetted accommodation (twin-share)
   - Professional placement matching
   - Leadership workshops & mentorship
   - Cultural excursions & activities
   - 24/7 on-ground coordinator support
   - Pre-departure orientation (virtual)
   - Airport pickup & group transport
   
   ## Eligibility
   
   - Current undergraduate or graduate students
   - Minimum GPA of 2.5
   - Interest in international business and cultural exchange
   - Strong communication and adaptability skills
   ```
   
   *This content appears in the "About the Program" section*

5. **Featured Image:**
   - Click **"Set featured image"** (right sidebar)
   - Upload a high-quality image of the location (1600x900px recommended)
   - This appears as the background in the hero section
   - Click **"Set featured image"**

### Internship Details (Custom Fields):

Scroll down to the **"Internship Details"** box and fill in ALL fields:

- **Start Date:** `2026-06-22`
  - Appears in hero and "Key Details" section
  
- **End Date:** `2026-07-17`
  - Appears in hero as "Dates: June 22 – July 17, 2026"
  
- **Application Deadline:** `2026-03-14`
  - Appears prominently in "Key Details" and "Application" sections
  
- **Cost:** `$6,050`
  - Format as: `$6,050` (with dollar sign and comma)
  - Appears in hero cards and "Key Details" section
  
- **Duration:** `4 weeks`
  - Appears in hero cards and throughout the page
  
- **Format:** Select `In-Country`
  - Options: In-Country, Hybrid, or Virtual
  - Determines the "Program Format" section content

- **Application Status:** Select `Applications Open`
  - Options: Applications Open, Applications Closed
  - Controls the badge displayed on internship cards and detail pages
  - Defaults to "Open" for new posts
  - Change to "Closed" when applications are no longer being accepted

### Cultural Highlights Gallery:

Scroll down to the **"Cultural Highlights Gallery"** box:

1. Click **"Select Cultural Highlights Images"**
2. Upload or select **4-6 images** showing cultural activities
3. **After selecting images**, each image will appear with a **Title** input field
4. Give each image a descriptive **Title** (e.g., "Traditional Music & Dance", "Makola Market", "Cape Coast Castle")
5. Titles are automatically saved as you type

**Important Notes:**
- Each image **MUST** have a title for it to display properly on the site
- You can reorder images by removing and re-adding them in your desired order
- Click the **×** button on an image to remove it from the gallery
- Click **"Clear Gallery"** to start over

**Suggested Titles:**
- "Traditional Music & Dance"
- "Makola Market" (or "Local Markets")
- "Cape Coast Castle" (or "Historical Sites")
- "Kakum National Park" (or "Nature & Wildlife")
- "Creative Hubs" (or "Art Galleries")
- Community Centers → "Community engagement"

**Image Tips:**
- Use high-quality photos (1200x800px minimum)
- Show actual activities from the location
- Bright, vibrant, engaging images
- People in action when possible

### Taxonomies (Categories):

**Locations:** *(Appears in hero badges and location info)*
- Create: `Ghana` (if it doesn't exist)
- Or: `Rwanda`, `Kenya`, `South Africa`
- Check the appropriate box(es)
- Multiple locations supported

**Fields:** *(Appears in grid filters and sidebar)*
- Create: `Business`
- Create: `Technology`
- Create: `Fintech`
- Create: `Agriculture`
- Check relevant boxes
- Multiple fields supported

**Programs:** *(Appears as badge in hero)*
- Create: `Summer 2026`
- Or: `Fall 2026`, `Year-Round`
- Check the box

### Publish:

- Click **"Publish"** button (top right)
- Click **"Publish"** again to confirm
- Your internship is now live!

---

## 🎨 How Your Content Appears on the Site

### **Hero Section** (Top of page):
- **Background:** Featured image (with navy overlay)
- **Status Badge:** Shows "Applications Open" (green) or "Applications Closed" (red)
- **Title:** Post title in large white text
- **Dates Line:** "Dates: [Start Date] – [End Date]"
- **Description:** Excerpt text
- **3 Feature Cards:** 
  - Gain global work experience
  - Cross-cultural leadership
  - Network & mentorship
- **Location Info:** "Location: [Locations] • Structure: Mon–Thu placements..."
- **Back Button:** Returns to internships listing

### **About the Program Section:**
- Full content from the main editor
- Rich text formatting supported
- Headings, lists, bold, links all work

### **Program Format Section:**
- Automatically shows based on Format field:
  - Option 1: Full In-Country ([Duration] in-country)
  - Option 2: Hybrid Format (3 weeks + 1 week remote)

### **Key Details Section:**
- Application Deadline (large gold text)
- Internship Dates (from Start/End dates)
- Cost ([Duration])
- Duration

### **Application Section:**
- "Applications open" badge
- Application deadline
- "Apply Now" button

### **Payment Terms Section:**
- Standard payment terms text
- 4 bullet points

### **Sample Week Section:**
- Mon-Thu: Internship work
- Friday: Leadership sessions
- Weekend: Cultural activities

### **Cultural Highlights Section** (if gallery added):
- Grid of 2-3 columns
- Each image shows with custom title overlaid at the bottom
- Hover effects scale and lift cards
- Note: "Activities shown are representative..."

### **Contact Section:**
- Phone: +1 202-499-2284
- Email: support@hilltopglobalgroup.com
- Address: 700 12th Street NW...

---

## Step 4: Test the WordPress API

Visit this URL in your browser:
```
https://hilltopglobalgroup.com/wp-json/wp/v2/internships
```

You should see JSON data with your internship post!

---

## Step 5: View on Your Next.js Site

Visit:
```
http://localhost:3000/internships
```

Your WordPress-powered internships will appear in the "More Internship Programs" section below the featured Ghana and Rwanda programs.

Your internship should appear in the grid!

Click "Learn More" to see the full details page.

---

## 📝 Creating More Internships

### Best Practices:

1. **Use Descriptive Titles:**
   - Good: "2026 Summer Fintech Internship - Kigali, Rwanda"
   - Bad: "Internship 1"

2. **Write Compelling Excerpts:**
   - Keep to 2-3 sentences
   - Highlight key benefits
   - Mention unique features

3. **Detailed Content:**
   - Use headings (##) to organize
   - Include bullet points for easy scanning
   - Describe what students will actually do
   - Explain what's included

4. **High-Quality Images:**
   - Use 1600x900px or larger
   - Show the actual location
   - Bright, professional photos
   - Avoid stock photos if possible

5. **Complete ALL Custom Fields:**
   - Every field helps users make decisions
   - Missing data creates an incomplete page
   - Dates should be in YYYY-MM-DD format

### Suggested Internships to Create:

#### 1. Rwanda Tech Internship
- **Title:** 2026 Technology & Innovation Internship - Kigali, Rwanda
- **Excerpt:** Work with Rwanda's leading tech startups in Kigali. Placements in software development, product management, and digital innovation with ALU partnership.
- **Location:** Rwanda
- **Fields:** Technology, Innovation, Fintech
- **Program:** Summer 2026
- **Duration:** 4 weeks
- **Cost:** $5,700
- **Format:** In-Country
- **Application Status:** Applications Open
- **Start Date:** 2026-06-22
- **End Date:** 2026-07-17
- **Deadline:** 2026-03-14

#### 2. Ghana Healthcare Internship
- **Title:** 2026 Healthcare & Public Health Internship - Accra, Ghana
- **Excerpt:** Gain hands-on experience in Ghana's healthcare sector. Placements with hospitals, clinics, and health NGOs focused on community health and health tech.
- **Location:** Ghana
- **Fields:** Healthcare, Social Impact
- **Program:** Summer 2026
- **Duration:** 6 weeks
- **Cost:** $7,200
- **Format:** In-Country
- **Start Date:** 2026-06-22
- **End Date:** 2026-08-02
- **Deadline:** 2026-03-14

#### 3. Pan-African Marketing Internship
- **Title:** 2026 Marketing & Communications Internship - Multiple Locations
- **Excerpt:** Work with African brands and startups on marketing campaigns, social media strategy, and brand development across Ghana and Rwanda.
- **Location:** Ghana, Rwanda (select both)
- **Fields:** Marketing, Business, Creative Industries
- **Program:** Fall 2026
- **Duration:** 8 weeks
- **Cost:** $8,500
- **Format:** Hybrid
- **Start Date:** 2026-09-01
- **End Date:** 2026-10-26
- **Deadline:** 2026-06-15

---

## 🎯 Quick Reference

### Locations to Create:
- Ghana
- Rwanda
- Kenya
- South Africa

### Fields to Create:
- Business
- Technology
- Healthcare
- Agriculture
- Education
- Marketing
- Finance
- Social Impact

### Programs to Create:
- Summer 2026
- Fall 2026
- Spring 2027
- Year-Round

---

## ✅ Benefits of This Setup

1. **Easy Management:** Add/edit internships from WordPress admin (no coding!)
2. **Automatic Sync:** Changes appear on your Next.js site within 60 seconds
3. **Smart Filtering:** Users can filter by location and field on the listing page
4. **SEO Friendly:** Each internship has its own URL and custom metadata
5. **Beautiful Design:** Professional layout matching your Ghana/Rwanda pages
6. **No Redirects:** Everything stays on your site - never sends users to WordPress
7. **Custom Fields:** Track dates, costs, and formats automatically
8. **Mobile Responsive:** Works perfectly on all devices
9. **Rich Content:** Support for headings, lists, images, formatting
10. **Future-Proof:** Add unlimited internships without touching code

## 📊 Page Structure Reference

When you create an internship in WordPress, here's exactly how it maps to the Next.js page:

| WordPress Field | Where It Appears | Example |
|----------------|------------------|---------|
| **Title** | Hero section (large heading) | "2026 Ghana Internship Program" |
| **Excerpt** | Hero section (under title) | "Gain professional experience in Accra..." |
| **Featured Image** | Hero background | Image of Accra skyline |
| **Content** | "About the Program" section | Full program description |
| **Start Date** | Hero + Key Details | "June 22, 2026" |
| **End Date** | Hero + Key Details | "July 17, 2026" |
| **Deadline** | Key Details + Application | "March 14, 2026" |
| **Cost** | Hero card + Key Details | "$6,050" |
| **Duration** | Hero card + Key Details | "4 weeks" |
| **Format** | Hero card + Program Format | "In-Country" |
| **Location** | Hero badge + info line | "Ghana" |
| **Fields** | Listing filters + sidebar tags | "Business, Technology" |
| **Program** | Hero badge | "Summer 2026" |
| **Gallery** | Cultural Highlights section | 4-6 images with custom titles |

---

## 🔍 Troubleshooting

### Internships don't appear in WordPress menu:
- Deactivate and reactivate the code snippet
- OR go to Settings → Permalinks and click "Save Changes"

### Internships don't show on Next.js site:
- Check the WordPress API: `https://hilltopglobalgroup.com/wp-json/wp/v2/internships`
- Make sure internships are Published (not Draft)
- Clear Next.js cache: delete `.next` folder and restart

### Custom fields don't save:
- Make sure you're editing an already-published internship
- Try publishing first, then editing and updating

---

## 🚀 You're All Set!

Your WordPress is now a powerful CMS for managing internships. Content editors can add new programs anytime, and they'll automatically appear on your beautifully designed Next.js site!

**Next.js Routes:**
- Listing: `/internships` (WordPress programs appear in "More Internship Programs" section)
- Detail: `/internships/[slug]` (slug auto-generated from title)
- Static Programs: `/internships/ghana` and `/internships/rwanda` (hand-coded, not from WordPress)

**WordPress Admin:**
- View All: `https://hilltopglobalgroup.com/wp-admin/edit.php?post_type=internship`
- Add New: `https://hilltopglobalgroup.com/wp-admin/post-new.php?post_type=internship`

## 🎯 Quick Reference Checklist

Before publishing an internship, make sure you have:

- [ ] Written a descriptive title
- [ ] Added a compelling excerpt (2-3 sentences)
- [ ] Written detailed content with headings
- [ ] Uploaded a high-quality featured image
- [ ] Filled in ALL custom fields:
  - [ ] Start Date
  - [ ] End Date  
  - [ ] Application Deadline
  - [ ] Cost (with $ sign)
  - [ ] Duration
  - [ ] Format
- [ ] Added Cultural Highlights gallery (4-6 images with custom titles)
- [ ] Selected at least one Location
- [ ] Selected at least one Field
- [ ] Selected a Program
- [ ] Set Application Status (Open or Closed)
- [ ] Clicked "Publish"

---

## 🎛️ Managing Application Status

The **Application Status** field gives you control over how your internship appears to visitors:

### Applications Open (Default)
- Badge displays in **Green (#10B981)**
- Text: "Applications Open"
- Card is clickable and interactive
- "Learn More" button is active (navy/gold)
- "Apply Now" button is enabled on detail page
- Use this when actively accepting applications

### Applications Closed
- Badge displays in **Red (#DC2626)**
- Text: "Applications Closed"
- Card becomes **non-clickable** and grayed out (75% opacity)
- "Learn More" button is replaced with "Applications Closed"
- "Apply Now" button is disabled on detail page
- Use this when the deadline has passed or program is full

### How to Change Status:
1. Edit the internship post
2. Scroll to **"Internship Details"** box
3. Find **"Application Status"** dropdown
4. Select "Applications Closed"
5. Click **"Update"**

**Note:** The status badge appears in three places:
- Internship listing cards on `/internships`
- Hero section badge on individual internship pages
- Application section badge

---

## 💡 Pro Tips

1. **Use Consistent Naming:** Follow the pattern "YEAR [Type] Internship - Location"
2. **Update Dates Regularly:** Keep application deadlines current
3. **Rich Descriptions:** Use headings, bullets, and formatting in content
4. **Multiple Filters:** Select all relevant locations and fields for better filtering
5. **Preview First:** Use WordPress preview to check formatting before publishing
6. **Duplicate Posts:** Use the "Duplicate" feature to quickly create similar programs
7. **Draft Mode:** Save as draft while working, publish when ready
8. **Archive Old Programs:** Change status to "Draft" for past programs instead of deleting

## 📞 Need Help?

If you run into issues:

1. **WordPress Not Showing Custom Fields?**
   - Make sure the code snippet is activated
   - Go to Settings → Permalinks and click "Save"

2. **Internships Not Appearing on Site?**
   - Check they're "Published" (not "Draft")
   - Verify the WordPress API: `https://hilltopglobalgroup.com/wp-json/wp/v2/internships`
   - Clear Next.js cache: `rm -rf .next` and restart

3. **Images Not Loading?**
   - Check `next.config.ts` has the WordPress domain configured
   - Verify image is uploaded to WordPress Media Library
   - Try a different image format (JPG works best)

4. **Dates Not Displaying?**
   - Use YYYY-MM-DD format (e.g., 2026-06-22)
   - Make sure all three date fields are filled

---

Your internships CMS is production-ready! 🎉

