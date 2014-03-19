/**
 *
 * The Bipio Email Pod.  Outbound email delivery for Bips
 *
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Pod = require('bip-pod'),
  fs = require('fs'),
  Email = new Pod({
    name : 'email',
    description : 'Email',
    dataSources : [ require('./models/email_verify') ],
    // uses NodeMailer - check docs for config :
    // https://github.com/andris9/Nodemailer
    config : {
      "strategy" : "smtp", // transport
      "mailer": { // nodemailer options
        "host" : "localhost",
        "port" : 25
      },
      "sender" : "noreply@exampledomain.org", // sender (DKIM signing party)
      "verify_from" : "Sender <support@exampledomain.org>",
      // .ejs template path for verification emails.
      // check templates/email_confirm.ejs for a boilerplate sample
      "verify_template_path" : "",
      "dkim" : { // DKIM selector and path to private key
        "selector" : "",
        "key_path" : ""
      }
    }
  },
  // constructor
  function() {
    var self = this,
      config = this.getConfig();

    this._template = null;

    fs.readFile(
      (config.verify_template_path || __dirname + '/templates/email_confirm.ejs'),
      function(err, data) {
        if (err) {
          //log : function(message, channel, level) {
          self.log(
            err,
            {
              action : 'CONSTRUCTOR',
              owner_id : 'SYSTEM'
            },
            'error'
          );
        } else {
          self._template = data.toString();

        }
      });
  });


// attach smtp forwarder
Email.add(require('./smtp_forward.js'));

// -----------------------------------------------------------------------------
module.exports = Email;
