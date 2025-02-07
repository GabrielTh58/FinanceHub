import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: any, res:any) => {
    res.send("Hello World")
})

app.use("/login", userRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`); // revisar
})