var express = require('express'),
    opts = require('../fn/utils');
var userRepo = require('../repos/userRepo');
var router = express.Router();
var verifyOtpMail = require('../repos/otpRepo').verifyOtpMail;


router.put('/changePassword', (req, res) => {
    const { username, new_password, old_password } = req.body;
    userRepo.changePassword(username, new_password, old_password)
        .then(changedRows => {
            if (changedRows > 0) {
                res.statusCode = 201;
                res.json({
                    changedRows: changedRows,
                    message: "change password success"
                });
            } else if (false == changedRows) {
                res.statusCode = 400;
                res.json({
                    message: "old password wrong"
                });
            } else {
                res.statusCode = 500;
                res.json({
                    message: "changed fail"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
});

router.post('/resetPassword', verifyOtpMail, (req, res) => {
    userRepo.resetPassword(req.body).then(changedRows => {
        if (changedRows) {
            res.status(200).json({
                message: "changed success"
            })
        } else {
            res.status(500).json({
                message: "changed failed"
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "view log on console"
        })
    })
});


router.get('/',  (req, res) => {
    var poco = {
        email: req.query.email,
        username: req.query.username,
        account_number: req.query.account_number
    };
    userRepo.loadAccount(poco).then(rows => {
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

});

router.put('/',  (req, res) => {
    userRepo.update(req.body)
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



module.exports = router;
