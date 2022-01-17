const router = require("express").Router();
const {
    createNotes,
} = require("../../lib/notes");
const { notes } = require("../../db/db.json")



router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
      }
      res.json(results);
    });

//     router.get("/notes/:title", (req, res) => {
//         const result = findById(req.params.title, notes);
//         if (result) {
//           res.json(result);
//         } else {
//           res.send(404);
//         }
//       });

      router.post("/notes", (req, res) => {
        // set id based on what the next index of the array will be
        // res.body.id = notes.length.toString();
      
        // if (!validateNote(req.body)) {
        //   const note = createNewNote(req.body, notes);
          res.json(notes);
          console.log(notes);
        });
    //   });

      module.exports = router;