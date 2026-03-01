# WordPress Internship Setup - Multiple Formats Guide

## ✅ What Was Changed

### 1. WordPress PHP Code (FIXED Version)
**File:** `wordpress-setup/internships-custom-post-type-FIXED.php`

**New Features:**
- ✅ Added "Application Opens" date field
- ✅ Removed single "Format" dropdown
- ✅ Added checkbox system for **both** format options:
  - 🌍 **Hybrid Format** (with separate pricing)
  - 🏢 **Full In-Country Format** (with separate pricing)
- ✅ Improved UI with visual styling and better organization
- ✅ Fixed ACF compatibility issues

### 2. Next.js TypeScript Interface
**File:** `app/internships/[slug]/page.tsx`

**Updated Interface:**
```typescript
meta: {
  _internship_application_opens?: string;     // NEW
  _internship_hybrid_available?: string;       // NEW
  _internship_hybrid_cost?: string;            // NEW
  _internship_incountry_available?: string;    // NEW
  _internship_incountry_cost?: string;         // NEW
  // Removed: _internship_format, _internship_cost
}
```

### 3. Internship Detail Page
**File:** `app/internships/[slug]/page.tsx`

**Changes:**
- ✅ Replaced single "Program Format" section with new "Flexible Participation Options" section
- ✅ Shows **both** format cards side-by-side with:
  - Icons (Building for In-Country, Globe for Hybrid)
  - Individual pricing for each format
  - Detailed descriptions
  - Hover effects
- ✅ Updated "Key Details" section to include "Application Opens" date
- ✅ Added visual icons for each detail field

### 4. Internship Listing Cards
**File:** `components/internships/WordPressPrograms.tsx`

**Changes:**
- ✅ Removed single format description
- ✅ Added new "Available Formats" section showing:
  - Both format options (if enabled)
  - Individual pricing for each
  - Compact card design with borders

---

## 📋 How to Update Your WordPress Site

### Step 1: Update the Code Snippet

1. Go to WordPress Admin → **Snippets** → **All Snippets**
2. Find your `Hilltop Internships Custom Post Type` snippet
3. Click **Edit**
4. **Delete ALL the old code**
5. Open `wordpress-setup/internships-custom-post-type-FIXED.php` from your project
6. **Copy EVERYTHING** from that file
7. **Paste** it into the WordPress snippet editor
8. Click **"Update"** (make sure it stays activated)

### Step 2: Flush Permalinks

1. Go to WordPress Admin → **Settings** → **Permalinks**
2. Click **"Save Changes"** (don't change anything, just save)

---

## 🎯 How to Configure Internships

### When Creating/Editing an Internship:

You'll now see **3 organized sections**:

#### 📅 Section 1: Application Timeline
- **Application Opens:** When students can start applying
- **Application Deadline:** Last day for applications
- **Application Status:** Open or Closed

#### 📆 Section 2: Program Dates
- **Start Date**
- **End Date**
- **Duration** (e.g., "4 weeks")

#### 💰 Section 3: Format Options & Pricing

**Check BOTH options if both are available:**

✅ **Hybrid Format** (Checkbox)
- Three weeks in-country + one week remote
- **Price:** e.g., `$5,700`

✅ **Full In-Country Format** (Checkbox)
- Four weeks entirely in-country
- **Price:** e.g., `$6,050`

**Note:** You can enable:
- ✅ Both formats (most common)
- ✅ Only Hybrid
- ✅ Only In-Country

---

## 🌐 How It Appears on the Website

### On Listing Page (`/internships`):

Each internship card will show:
```
┌─────────────────────────────────────┐
│ [Featured Image]                    │
│ Program Title                       │
├─────────────────────────────────────┤
│ 📅 Program Dates                    │
│ 📍 Location                         │
│ ⏱️  Duration                        │
│                                     │
│ [Description excerpt...]            │
│                                     │
│ Available Formats:                  │
│ ┌─ Full In-Country ──── $6,050 ──┐ │
│ └─ Hybrid Format ────── $5,700 ──┘ │
│                                     │
│ [Learn more →]    Deadline: Mar 14 │
└─────────────────────────────────────┘
```

### On Detail Page (`/internships/[slug]`):

Students will see:
1. **Hero Section** with program overview
2. **Flexible Participation Options** section with **two side-by-side cards**:
   - Full In-Country (with pricing, description, benefits)
   - Hybrid Format (with pricing, description, benefits)
3. **Key Details** section with Application Opens, Deadline, Program Dates, Duration, Location, Fields
4. Rest of the content (About, Cultural Highlights, etc.)

---

## 🎨 Design Features

### Listing Cards:
- ✅ Compact format boxes with border highlighting
- ✅ Clear pricing display
- ✅ Format descriptions
- ✅ Color-coded by alternating navy/gold

### Detail Page:
- ✅ Large, interactive format cards
- ✅ Icons for each format (Building/Globe)
- ✅ Hover effects (lift + border glow)
- ✅ Detailed benefit lists with checkmarks
- ✅ Note at bottom: "You'll select your preferred format during application"

---

## 📝 Example Configuration

**For a typical internship:**

### Application Timeline:
- Application Opens: `2026-01-01`
- Application Deadline: `2026-03-14`
- Status: `Applications Open`

### Program Dates:
- Start Date: `2026-06-22`
- End Date: `2026-07-17`
- Duration: `4 weeks`

### Format Options:
✅ **Hybrid Format**
- Price: `$5,700`

✅ **Full In-Country Format**
- Price: `$6,050`

**Result:** Students will see both options with clear pricing, allowing them to choose during the application process.

---

## ✅ Testing Checklist

After updating:

- [ ] Old internships: Re-edit and select format options
- [ ] Check listing page: Both formats show with pricing
- [ ] Check detail page: Two format cards display correctly
- [ ] Mobile view: Cards stack nicely
- [ ] Application Opens date displays in Key Details
- [ ] Hover effects work on format cards

---

## 🔧 Troubleshooting

**If formats don't show:**
1. Re-edit the internship in WordPress
2. Check BOTH format checkboxes
3. Fill in BOTH price fields
4. Click Update
5. Wait 60 seconds for Next.js to revalidate

**If changes don't appear:**
1. Clear WordPress cache (if using a caching plugin)
2. Wait 60 seconds (Next.js revalidation time)
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎉 Summary

You can now:
✅ Offer multiple format options per internship
✅ Set different prices for each format
✅ Show "Application Opens" dates
✅ Let students see all options before applying
✅ Maintain flexibility without creating duplicate internships

The system is student-choice focused: you configure what's available, they choose during application! 🚀






