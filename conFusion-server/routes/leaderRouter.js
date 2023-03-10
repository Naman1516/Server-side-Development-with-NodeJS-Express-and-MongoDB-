const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send all the leaders to you!');
    })

    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on leaders');
    })

    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('Will send details of leader ' + req.params.leaderId);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post operation not supported');
    })

    .put((req, res, next) => {
        req.statusCode = 403;
        res.end('Will update leader ' + req.params.leaderId);
    })

    .delete((req, res, next) => {
        res.end('Deleting leader with ID ' + req.params.leaderId);
    });

module.exports = leaderRouter;