var sha512 = require('js-sha512').sha512;

export default api = {
    getUser: (txnid, amount, firstname, email, phone, productInfo) => {
        var hash = sha512('gtKFFx|' + txnid + '|' + amount + '|' + productInfo + '|' + firstname + '|' + email + '|||||||||||eCwWELxi').toString('hex');
        console.log(hash);
        var formData = new FormData();
        formData.append('key', 'gtKFFx');
        formData.append('txnid', txnid);
        formData.append('amount', amount);
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('productInfo', productInfo);
        formData.append('surl', "https://google.co.in");
        formData.append('furl', "https://yahoo.co.in");
        formData.append('HASH', hash);

        return fetch("https://test.payu.in/_payment", {
            method: "POST",
            headers: {
                Accept: 'text/html',
            },
            body: formData
        });
    }
};