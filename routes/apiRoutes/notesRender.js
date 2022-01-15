const router = require("express").Router();
const {
    filterByQuery,
    findById,
    createNotes,
    validateNotes,
} = require("../../lib/notes")

module.exports = router;

router.get("/notes", (req, res) => {
    let results = notesData;
    if (req.query) {
        results = filterByQuery(req.query, notesData);
      }
      res.json(notesData);
    });