const Anhelfen = require("../models/Anhelfen");
const { validateEmail, validateLength } = require("../helpers/validation");

exports.helfen = async (req, res) => {
  try {
    const { first_name, last_name, email, nachricht } = req.body;
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Die angegebene E-Mail-Adresse ist ungültig.",
      });
    }
    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "Der Vorname muss zwischen 3 und 30 Zeichen lang sein.",
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "Der Nachname muss zwischen 3 und 30 Zeichen lang sein.",
      });
    }
    if (!validateLength(nachricht, 20, 5000)) {
      return res.status(400).json({
        message:
          "Die angegebene Nachricht ist zu kurz. Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.",
      });
    }
    const helfen = await new Anhelfen({
      first_name,
      last_name,
      email,
      nachricht,
    }).save();
    res.send({
      first_name: helfen.first_name,
      last_name: helfen.last_name,
      email: helfen.email,
      nachricht: helfen.nachricht,
      message:
        "Ihre Anfrage ist bei uns eingegangen und wird schnellstmöglich bearbeitet.",
    });

    //res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
