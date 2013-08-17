bip-pod-email
=======

Email Pod for Bipio.  Outbound email delivery for Bips

## Installation

From bipio server install directory

    npm install bip-pod-email

## Methods

### smtp_forward

Use to forward email messages to a chosen recipient (requires recipient verification)

Sample Channel Config :

```
"config": {
  "rcpt_to": "foo@bar.net"
}
```

[Bipio Docs](https://bip.io/docs/pods/email)

## License

BipIO is free for non-commercial use.

[GPLv3](http://www.gnu.org/copyleft/gpl.html)

Our open source license is the appropriate option if you are creating an open source application under a license compatible with the GNU GPL license v3. 

Bipio may not be used for Commercial purposes by an entity who has not secured a Bipio Commercial OEM License.  To secure a Commercial OEM License for Bipio,
please [reach us](mailto:enquiries@cloudspark.com.au)

![Cloud Spark](http://www.cloudspark.com.au/cdn/static/img/cs_logo.png "Cloud Spark - Rapid Web Stacks Built Beautifully")
Copyright (c) 2010-2014  [CloudSpark pty ltd](http://www.cloudspark.com.au)