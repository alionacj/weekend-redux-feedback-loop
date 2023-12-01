const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    let feedback = req.body
    console.log(feedback)
    const sqlText = `
        INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)
    `
    const sqlValues = [
        feedback.feelings,
        feedback.understanding,
        feedback.support,
        feedback.comments
    ]
    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
        res.sendStatus(201)
    })
    .catch((dbError) => {
        console.error(dbError)
        res.sendStatus(500)
    })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;