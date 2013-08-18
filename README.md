![Email](email.png) bip-pod-email
=======

[Email](http://en.wikipedia.org/wiki/Email) pod for [bipio](https://bip.io).  

## Installation

From bipio server root directory

    npm install bip-pod-email
    ./tools/pod-install.js -a email [-u optional account-wide channel auto install]

The pod-install script is a server script which will register the pod with the bipio server and add sparse
configuration to your NODE_ENV environment config ('default.json', staging or production)
keyed to 'email', based on the default config in the pod constructor.  It will also move the
pod icon into the server cdn

Manually restart the bipio server at your convenience.

## Actions

### smtp_forward

Use to forward email messages to a chosen recipient (requires recipient verification).
This action contains an email receipt with verification RPC which the remote user must verify against,
they will be backlinked to :

    https://{your domain}/rpc/pod/email/smtp_forward/verify?_nonce={nonce}&accept={choice}'

Sample Channel Config :

```
"config": {
  "rcpt_to": "foo@bar.net"
}
```

[Bipio Docs](https://bip.io/docs/pods/email)

## License

BipIO is free for non-commercial use - [GPLv3](http://www.gnu.org/copyleft/gpl.html)

Our open source license is the appropriate option if you are creating an open source application under a license compatible with the GNU GPL license v3. 

Bipio may not be used for Commercial purposes by an entity who has not secured a Bipio Commercial OEM License.  To secure a Commercial OEM License for Bipio,
please [reach us](mailto:enquiries@cloudspark.com.au)

![Cloud Spark](http://www.cloudspark.com.au/cdn/static/img/cs_logo.png "Cloud Spark - Rapid Web Stacks Built Beautifully")
Copyright (c) 2010-2013  [CloudSpark pty ltd](http://www.cloudspark.com.au)