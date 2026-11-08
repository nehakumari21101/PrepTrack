const dotenv = require("dotenv");
dotenv.config();
const app = require("./app.js");
const connectDB =  require("./config/db.js");

// const PORT = process.env.PORT || 5000;
// try {
//   connectDB();
//   app.listen(PORT, () => console.log(`PrepTrack API running on http://localhost:${PORT}`));
// } catch (error) {
//   console.error("Unable to start server:", error.message);
//   process.exit(1);
// }
connectDB();
app.listen(5000, ()=>{
    console.log("running on port 5000");
})
