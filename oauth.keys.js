var oauth = OAuth({
    consumer: {
        key: testing? 'D523BBD5542EA96BCD08440B752CD81C' : 'C49656ECD94211DE6F1AAA5CC95BDD4B', // production
        secret: testing? 'E8C34B9DCEC7711E0FE3A13A840AF8E4' : '7E2BE6F6C74C58E2FD05D0734588799B' //production
    },
    signature_method: 'HMAC-SHA1',
    hash_function: function(base_string, key) {
        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
});
var token = {
    key: testing? '3294B1837135195D5F4B819AAC950FF7' : 'BCE4AC1A54060EC75BED28BA3C11ECB2',  //sandbox
    secret: testing? 'B65D2A91DC59A1E1B4CB6FA18FF42F99' : '86DFC02B93D55568E6D2344C9BCC667A'  //sandbox
};