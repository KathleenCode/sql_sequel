import User from "../model/user.model.js";
import profile from "../model/profile.model.js";

 export const addUser = async(req, res) => {
    try {
        const {name, email, gender, address, literate} = req.body;

         const user = await User.create({name, email, gender, address, literate});
         if(!user) res.status(404).send("User not available");
         res.send(user);
    } catch(error) {
        console.log(error);
    }
}

export const fetchUser = async(req, res) => {
    try {
        const users = await User.findAll();
        // const users = await User.findAll({limit: 3, offset: 1});
        // const users = await User.findAll({
        //     attributes: ["name", "email"]
        // });
        res.send(users);
    } catch(error) {
        console.log(error);
    }
}

export const fetchOne = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findAll({
            where: {
                id: id
            }
        });
        if(user.length < 1) return res.status(404).send(`user with id ${id} not found`);
        res.send(user);
    } catch(error) {
        console.log(error);
    }
}
//another way of getting a single user
export const getOne = async(req, res) => {
    try {
        const {id} = req.params;
        const auser = await User.findByPk(id);
        res.send(auser);
    } catch(error) {
        console.log(error);
    }
}

export const upUser = async(req, res) => {
    try {
        const {id} = req.params;
        const {literate} =req.body;
        // const upuer = await User.update(req.body, {
        //     where: {
        //         id: id
        //     }
        // });
        const upus = await User.update({literate: !literate}, {
            where: {
                id: id
            }
        });
        res.status(201).send("User updated");
    } catch(error) {
        console.log(error)
    }
}

export const delUser = async(req, res) => {
    try {
        const {id} = req.params;
        const duser = await User.destroy({where: {id}});
        if(duser.length < 1) return res.status(404).send(`user with id ${id} not found`);
        res.sendStatus(200).send("user deleted successfully");
    } catch(error) {
        console.log(error);
    }
}

export const addUserWithProfile = async(req, res) => {
    try {
        const {name, email, gender, address, literate} = req.body;

        const user = await User.create({name, email, gender, address, literate});
        
        if(user) {
            
            const userprofile = await profile.create({height: "5.5ft", bio: "Attended Osu Primary School", UserId: user.id});
            
            return res.send(userprofile);
        } else {
            res.status(500).send("something happened");
        }
    } catch (error) {
        console.log("something happened", error)
    }
}

export const getUsersProfile = async(req, res) => {
    try {
        const usersprofiles = await profile.findAll({
            include: User
        });
        res.send(usersprofiles);
    } catch (error) {
        console.log(error);
    }
}