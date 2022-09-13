import express from "express";
import  fs  from 'fs';
import cors from 'cors';

const app = express()
const port = 4000
const productsJSON = './data/products.json'

//  get(route,callback function);
app.get("/api", (req, res) => {
    res.send("Get Products Server")
})

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Routes
// GET all products
app.get("/api/home", async (req, res) => {
    fs.readFile(productsJSON, 'utf8', (err, data) => {
        const homeData = JSON.parse(data);
        let laptops = homeData.laptops
        let smartphones = homeData.smartphones
        let sliders = homeData.sliders;
        res.json({
            laptops,
            smartphones,
            sliders
        })
    });
})
// Get a specific product with id
app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id
    fs.readFile(productsJSON, 'utf8', (err, data) => {
        const allData = JSON.parse(data);
        let products = allData.laptops.concat(allData.smartphones);
        const product = products.filter(product => product.id == id)[0];
        res.json(product)
    });
})
// Add a new product

app.post("/api/products", async (req, res) => {
    fs.readFile(productsJSON, 'utf8', (err, data) => {
        let products = JSON.parse(data);
        let product = getProduct(req.body);
        products[req.body.category].push(product);
        let newDataString = JSON.stringify(products) 
        fs.writeFile(productsJSON, newDataString , (err) => {
            res.json({
                status : true,
                product
            });
        })
    });

})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


function getProduct(data){
    return {
        "id": 6,
        "title": data.title ?? 'No Title',
        "description": data.description ?? 'Not Description',
        "price": data.price ?? 'Free',
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": data.stock ?? 0,
        "brand": data.brand ?? 'No Brand',
        "category": data.category,
        "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png",
        "images": [
          "https://dummyjson.com/image/i/products/6/1.png",
          "https://dummyjson.com/image/i/products/6/2.jpg",
          "https://dummyjson.com/image/i/products/6/3.png",
          "https://dummyjson.com/image/i/products/6/4.jpg"
        ]
      }
}