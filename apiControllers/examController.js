var express = require('express');
var examRepo = require('../repos/examRepo');
var router = express.Router();

router.post('/',  (req, res) => {
    examRepo.addExam(req.body).then(insertId => {
        if (insertId) {
            res.status(200).json({
                message: "added success"
            })
        } else {
            res.status(500).json({
                message: "added failed"
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "view log on console"
        })
    })
});
router.put('/', (req, res) => {
    examRepo.updateExam(req.body)
        .then(changedRows => {
            res.statusCode = 201;
            res.json({
                changedRows: changedRows
            });
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
});

router.get('/:id',  (req, res) => {

    if (req.params.id) {
        examRepo.loadbyIdLesson(req.params.id).then(rows => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.statusCode = 204;
                res.end();
            }
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    } else {
        res.statusCode = 400;
        res.json({
            msg: 'error'
        });
    }
});


router.delete('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        examRepo.deleteExam(id).then(affectedRows => {
            res.json({
                affectedRows: affectedRows
            });
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on console.');
        });
    } else {
        res.statusCode = 400;
        res.json({
            msg: 'error'
        });
    }
});
module.exports = router;