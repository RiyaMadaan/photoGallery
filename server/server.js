const express = require('express');
const cors = require('cors');
const app = express();
const { categories, WomenCategory, InsideCategory, OutsideCategory, ShoppingCategory, photos } = require('./data');

const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Endpoint to get all categories
app.get('/categories', (req, res) => {
  res.json(categories);
});

// Endpoint to get photos by category
app.get('/categories/:category', (req, res) => {
  const { category } = req.params;

  let selectedCategory;
  switch (category.toLowerCase()) {
    case 'women':
      selectedCategory = WomenCategory;
      break;
    case 'inside':
      selectedCategory = InsideCategory;
      break;
    case 'outside':
      selectedCategory = OutsideCategory;
      break;
    case 'shopping':
      selectedCategory = ShoppingCategory;
      break;
    case 'all':
      selectedCategory = [...photos, ...WomenCategory, ...InsideCategory, ...OutsideCategory, ...ShoppingCategory];
      break;
    default:
      return res.status(404).json({ error: "Category not found" });
  }

  res.json(selectedCategory);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
