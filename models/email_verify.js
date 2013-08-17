EmailVerify = {};
EmailVerify.entityName = 'verify';
EmailVerify.entitySchema = {
    id: {
        type: String,
        renderable: false,
        writable: false
    },
    owner_id : {
        type: String,
        renderable: false,
        writable: false
    },
    created : {
        type: String,
        renderable: true,
        writable: false
    },
    email_verify: {
        type: String,
        renderable: false,
        writable: false
    },
    nonce: {
        type: String,
        renderable: false,
        writable: false
    },
    mode: {
        type: String,
        renderable: false,
        writable: false,
        "default" : "pending" // pending, no_global, accept
    },
    num_sent: {
        type: Number,
        renderable : false,
        writable : false,
        "default" : 1
    }
};

EmailVerify.compoundKeyContraints = {
    owner_id : 1,
    email_verify : 1
};

module.exports = EmailVerify;