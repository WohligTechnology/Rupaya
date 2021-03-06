/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
    //Sandbox
    // var user = "e93ce3908b30b55d7f5dcff3ea3454ad";
    // var pass = "f454cc903be596f3296fcdaea4b26725";

    //Production
    var user = "5d05305ba700673a89138f7e8211e51b";
    var pass = "f2ca0ba1ed9071fcd8d19ca0055e9686";
    sails.Db = require('mongodb').Db,
        sails.MongoClient = require('mongodb').MongoClient,
        sails.ISODate = require('mongodb').ISODate,
        sails.Server = require('mongodb').Server,
        sails.ReplSetServers = require('mongodb').ReplSetServers,
        sails.ObjectID = require('mongodb').ObjectID,
        sails.Binary = require('mongodb').Binary,
        sails.GridStore = require('mongodb').GridStore,
        sails.Grid = require('mongodb').Grid,
        sails.Code = require('mongodb').Code,
        sails.assert = require('assert'),
        sails.md5 = require('MD5'),
        sails.mime = require('mime'),
        sails.moment = require('moment'),
        sails.fs = require('fs'),
        sails.request = require('request'),
        sails.mandrill = require('mandrill-api/mandrill'),
        sails.mandrill_client = new sails.mandrill.Mandrill('mIzFLCrgdHg4H7MLWJ97_w'),
        sails.lwip = require('lwip'),
        //Sandbox
        // sails.shmart = "http://180.179.146.81/wallet/v1/",
        // sails.iframe = "http://pay.sandbox.shmart.in/pay_rest/createorder",
        // sails.paymentUrl = "http://pay.sandbox.shmart.in/pay_post/initiate/",

        //Prodcution
        sails.shmart = "https://shmart.in/wallet/v1/",
        sails.iframe = "https://pay.shmart.in/newpg/pay_rest/createorder",
        sails.paymentUrl = "https://pay.shmart.in/newpg/pay_post/initiate/",

        sails.auth = new Buffer(user + ':' + pass).toString('base64'),
        sails.merchantID = "TSV206595",
        // Connection URL
        sails.url = 'mongodb://localhost:27017/paiso';
    sails.query = function (myfunc) {
            sails.MongoClient.connect(sails.url, myfunc);
        }
        // It's very important to trigger this callback method when you are finished
        // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};
