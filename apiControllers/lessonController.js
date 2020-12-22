var express = require('express');
var lessonRepo = require('../repos/lessonRepo');
var router = express.Router();
// Chapter
router.post('/chapter',  (req, res) => {
    lessonRepo.addChapter(req.body).then(insertId => {
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
router.put('/chapter', (req, res) => {
    lessonRepo.updateChapter(req.body)
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

router.get('/chapter', (req, res) => {
    lessonRepo.loadbyIdSubject(req.body).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
router.delete('/chapter/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        lessonRepo.deleteChapter(id).then(affectedRows => {
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
//Lesson-----------------------------------------------------------------------
router.post('/',  (req, res) => {
    lessonRepo.addLesson(req.body).then(insertId => {
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
    lessonRepo.updateLesson(req.body)
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

router.get('/', (req, res) => {
    lessonRepo.loadlessonbyIdChapter(req.body.idChapter).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});
router.get('/:id',  (req, res) => {

    if (req.params.id) {
        lessonRepo.loadbyIdLesson(req.params.id).then(rows => {
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
        lessonRepo.deleteLesson(id).then(affectedRows => {
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