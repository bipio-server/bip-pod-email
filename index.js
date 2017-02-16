/**
 *
 * The Bipio Email Pod.  Outbound email delivery for Bips
 *
 * Copyright (c) 2017 InterDigital, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pod = require('bip-pod'),
  fs = require('fs'),
  Email = new Pod({},
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
    }
  );

// -----------------------------------------------------------------------------
module.exports = Email;
