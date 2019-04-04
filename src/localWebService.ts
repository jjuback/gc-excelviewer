'use strict';
import path = require('path');
import http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const fs = require('fs');
import { ExtensionContext } from 'vscode';

export default class LocalWebService {

    private app = express();
    private server = http.createServer();
    private _content = "";
    private _options: any;

    private _servicePort: string;
    private _htmlContentLocation = 'out';
    private _staticContentPath: string;

    constructor(context: ExtensionContext) {
        let self = this;
        // add static content for express web server to serve
        this._staticContentPath = path.join(context.extensionPath, this._htmlContentLocation);
        this.app.use(cors());
        this.app.use(express.static(this._staticContentPath));
        this.app.use(bodyParser.json());
        this.app.get('/state', function (req, res) {
            let storage = {
                content: self._content,
                options: self._options
            };
            res.send(storage);
        });
        this.app.post('/state', function (req, res) {
            context.workspaceState.update(self._options.uri, req.body);
            self._options.state = req.body;
            res.send(200);
        });
        this.app.get('/proxy', function (req, res) {
            let file = req.query.file;
            fs.readFile(file, (err, data) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.send(data);
                }
            });
        });
        this.server.on('request', this.app);
    }

    get serviceUrl(): string {
        return 'http://localhost:' + this._servicePort;
    }

    get content(): string {
        return this._content;
    }
    
    set content(value: string) {
        this._content = value;
    }

    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }
    
    init(content: string, options: any) {
        this._content = content;
        this._options = options;
    }

    start(): void {
        const port = this.server.listen(0).address()["port"]; // 0 = listen on a random port
        this._servicePort = port.toString();
    }
}