# Ananth Civil Works — Modular React Website

Includes the homepage and **About, Properties, Construction Works, Interior Design, Lift Design, Gallery, Contact** pages. Each page has shared header and footer via `SiteLayout`.

## Start

```bash
npm install
npm run dev
```

Use `npm run build` to generate the production `/dist` folder.

## Easy-to-read structure

```
public/images/logo.png         Original brand logo from existing project
src/
  App.jsx                       All URL routes; add future routes here
  main.jsx                      React bootstrap
  layout/
    SiteLayout.jsx               Header + page + Footer (only once)
    Header.jsx                   Shared navbar, active links, mobile menu
    Footer.jsx                   Shared footer
  pages/
    HomePage.jsx                 Full homepage, exact section order
    AboutPage.jsx                About page with values and services
    PropertiesPage.jsx           Property listing search and filters
    ContactPage.jsx              Contact details and email enquiry
    GalleryPage.jsx              Project photo grid
    ServicePage.jsx              Shared template for construction/interior/lift pages
  components/
    AutoLocations.jsx           Continuous looping city names; pause
    SolutionCarousel.jsx        Automatically changing filmstrip; arrows + pause
    ListingSection.jsx          Reusable group of project cards
    ListingCard.jsx             Property / project display card
    ProjectModal.jsx            Project details overlay
    AboutIntro.jsx              Visual company introduction
    InquiryBanner.jsx           Homepage contact banner
    SectionHeading.jsx          Section typography
  data/
    listings.js                  Edit/add properties, civil, interior, lift entries
    images.js                    Full-size original photograph URLs (not screenshot crops)
    site.js                      Business contact details, nav links and carousels
  styles/site.css                Site-wide responsive styling
```

## Adding a page

1. Create `src/pages/NewPage.jsx` and export a React component.
2. Add `import NewPage from './pages/NewPage'` to `src/App.jsx` and `<Route path="/new" element={<NewPage/>}/>` under the `SiteLayout` route.
3. Add `{label:'New Page',path:'/new'}` to `src/data/site.js` for the navbar; optionally add a footer link.
4. No need to duplicate navbar/footer or change other pages.

## Images

Product/project photos use **full-resolution external Unsplash original-photo URLs** rather than the screenshots you provided. They require an internet connection. To use images from your own projects, save them to `public/images/` and replace the URLs in `src/data/images.js` with paths like `/images/my-building.jpg`. The local `logo.png` is reused from your earlier project. The example photos are representative and **are not actual photos of the advertised listings**; replace with project-authorized images before publishing.

## Backend connections

This is a frontend prototype; inventory data, authentic favorites, saved search, login, and enquiry persistence need APIs. The Contact form currently opens the visitor's email application with the completed enquiry. The Buy/Rent/Lease dropdown is present but does not filter until `purpose` data exists in the listing objects. `/admin` links to the expected admin URL — hook it into your existing backend, or update the link. The listing text/prices are sample content from the previous code. Do not imply photos are actual property images until updated.


## Property detail pages

- Each property card opens `/properties/:slug`, a dedicated responsive details page.
- `src/pages/PropertyDetailsPage.jsx` renders the photo slider, price sidebar, overview, specifications, description, amenities, and media gallery.
- `src/data/propertyDetails.js` stores the extended attributes for each property.
- `src/data/propertyPhotos.js` stores photo gallery URLs and labels. Replace these sample images with your actual images in `public/images/properties/` or with backend URLs.
- Add a property in `src/data/listings.js` and, optionally, a matching entry in `propertyDetails.js` and `propertyPhotos.js`; routes will work automatically.
- The first property uses reference-provided details. Additional fields on other listings are illustrative placeholders and should be verified before publishing.
- Contact advisor uses `tel:` and inquiry navigates to the existing contact page. No backend submission is implemented.
