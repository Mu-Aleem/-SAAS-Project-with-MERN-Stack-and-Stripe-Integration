import User from "../models/User.js";

const RegisterUser = async (req, res) => {
  try {
    const { usrtname, email, password } = req.body;
    if (!usrtname || !email || !password) {
      res.status(400);
      throw new Error("All fields are required");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("password must be up to  6 characters");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(409);
      throw new Error("User with email already exists");
    }
    // create the new instance

    const newuser = new User({ usrtname, email, password });
    // add the data the trial will end
    newuser.trialExpires = new Date(
      new Date().getTime() + newuser.trialPeriod * 24 * 60 * 60 * 1000
    );
    await newuser.save();

    res.json({
      status: true,
      message: "User registered Successfully",
      user: {
        usrtname,
        email,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export { RegisterUser };
