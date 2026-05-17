# Hotel Listing Platform - Stage 1

## Project Overview
This project is currently in **Stage 1** of development. This project is a web application that allows users to create, view, edit, and delete hotel listings, each with details like title, description, image, price, location, and country. It uses Node.js, Express, MongoDB, and EJS to manage hotel data and provide a user-friendly interface for managing listings.

## Current Features
- Add new hotel listings
- Edit existing hotel listings
- Delete hotel listings
- View all hotel listings
- Organized project structure (routes, models, views, public assets)
- Listing model defined in `models/listing.js`
- Initial data setup in `init/data.js`
- EJS templates for displaying listings and layouts
- Static files served from the `public` directory (CSS and JS)
- Navigation and footer partials for consistent UI

## Folder Structure
```
app.js
package.json
init/
	data.js
	index.js
models/
	listing.js
public/
	css/
		style.css
	js/
		script.js
views/
	includes/
		footer.ejs
		navbar.ejs
	layouts/
		boilerplate.ejs
	listings/
		edit.ejs
		index.ejs
		new.ejs
		show.ejs
```

## How to Run
1. Install dependencies:
	 ```bash
	 npm install
	 ```
2. Start the server:
	 ```bash
	 node app.js
	 ```

## Next Steps (Future Stages)
- Implement authentication and user management
- Add advanced search and filtering for hotels
- Add image uploads for hotel listings
- Enhance UI/UX with more features

---
*This is just Stage 1. More features and improvements will be added in future stages.*
