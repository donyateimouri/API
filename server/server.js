import express from "express";
import fetch from 'node-fetch'
import cors from 'cors';

const app = express()
const port = 3031
//  get(route,callback function);
app.get("/api", (req, res) => {
    res.send("Get Products Server")
})

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Routes
// Get a specific product with id
app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id
    let product = await fetch(`https://dummyjson.com/products/${id}`)
    let productJSON = await product.json();
    res.json({
        product : productJSON,
    })
})

// Login
app.post("/api/login", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let result = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
      let login = await result.json();
    res.json(login)
})





// GET all products
app.get("/api/home", async (req, res) => {
    let laptops = await fetch(`https://dummyjson.com/products/category/laptops`)
    let laptopsJSON = await laptops.json();
    let smartphones = await fetch(`https://dummyjson.com/products/category/Smartphones`)
    let smartphonesJSON = await smartphones.json();
    let sliders = [
        '/assets/image/banner1.jpg',
        '/assets/image/banner2.jpg',
    ];

    res.json({
        laptops : laptopsJSON,
        smartphones : smartphonesJSON,
        sliders : sliders
    })
})
// GET all categories
app.get("/api/categories", async (req, res) => {
    let response = await fetch(`https://dummyjson.com/products/categories`)
    let result = await response.json();
    res.json(result)
})
// Get products of a category 
app.get("/api/products/categories/:category", async (req, res) => {
    const category = req.params.category
    let response = await fetch(`https://dummyjson.com/products/category/${category}`)
    let result = await response.json();
    res.json(result)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})