var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "accessKeyId12345",
    secretAccessKey: "secretAccessKey12345",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = JSON.parse(fs.readFileSync('websiteVN.json', 'utf8'));
    var object = {
        title: data.title,
        phoneName: data.phoneName,
        myPhone: data.myPhone,
        webSiteName: data.webSiteName,
        homePage: data.homePage,
        page1: data.page1,
        page1_1: data.page1_1,
        page1_2: data.page1_2,
        page1_3: data.page1_3,
        page1_4: data.page1_4,
        page1_5: data.page1_5,
        page1_6: data.page1_6,
        page1_7: data.page1_7,
        page1_8: data.page1_8,
        page1_9: data.page1_9,
        page1_10: data.page1_10,
        page1_11: data.page1_11,
        page2: data.page2,
        page3: data.page3,
        page3_1: data.page3_1,
        page3_2: data.page3_2,
        page3_3: data.page3_3,
        page4: data.page4,
        page4_1: data.page4_1,
        page4_2: data.page4_2,
        page4_3: data.page4_3,
        page4_4: data.page4_4,
        page5: data.page5,
        signUp: data.signUp,
        signIn: data.signIn,
        searchPlaceholder: data.searchPlaceholder,
        flagVN: data.flagVN,
        flagEN: data.flagEN,
        vn: data.vn,
        en: data.en,
        language: data.language,
        vietnamese: data.vietnamese,
        english: data.english,
        lienhe: data.lienhe,
        amthuc: data.amthuc,
        giaitri: data.giaitri,
        muasam: data.muasam,
        diachi: data.diachi,
        quanan: data.quanan,
        rapphim: data.rapphim,
        tttm: data.tttm,
        anvat: data.anvat,
        khuvuichoi: data.khuvuichoi,
        openDoor: data.openDoor,
        nhahang: data.nhahang,
        buffet: data.buffet
    }
    res.render('home', object)
});

module.exports = router;
