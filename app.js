import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import UserRoutes from "./routes/user.route.js";
import User from "./model/user.model.js";
import profile from "./model/profile.model.js";

dotenv.config();

const PORT = process.env.PORT || 9005;

const app = express();

//one to one elationship
User.hasOne(profile);
profile.belongsTo(User);

await sequelize.sync();
console.log("All tables have been created");

app.use(express.json());

app.use("/api/users", UserRoutes);

const user = await User.create({name: "the-foo", gender: "male", email: "fooggg@me.com", address: "circle", literate: "false"});
const profile1 = await profile.create({height: "6ft", bio: "born and raised in Tema"});
await user.setProfile(profile1);

console.log(await user.getProfile());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));