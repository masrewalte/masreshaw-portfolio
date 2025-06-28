import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const contact = new Contact({ name, email, message });

    const newContact = await contact.save();

    res.status(201).json(newContact);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error, Please try again later." });
  }
};
