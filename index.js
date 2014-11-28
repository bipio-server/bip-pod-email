/**
 *
 * The Bipio Email Pod.  Outbound email delivery for Bips
 *
 * @author Michael Pearson <github@m.bip.io>
 * Copyright (c) 2010-2013 Michael Pearson https://github.com/mjpearson
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
