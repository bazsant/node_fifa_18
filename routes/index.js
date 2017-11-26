var express = require('express');
var router = express.Router();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');

}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Sorteio FIFA18", data: getLocalJson() });
});

function getLocalJson() {
    if (!localStorage.getItem('JsonLocal')) {
        setDefaultLocalJson();
    }

    return JSON.parse(localStorage.getItem('JsonLocal'));
}

function setDefaultLocalJson() {
    localStorage.setItem('JsonLocal', JSON.stringify(
        [{
                "titulo": "Escalações",
                "itens": [
                    { "valor": "3-4-1-2" },
                    { "valor": "3-4-2-1" },
                    { "valor": "3-4-3" },
                    { "valor": "3-5-2" },
                    { "valor": "4-1-2-1-2" },
                    { "valor": "4-1-2-1-2 (2)" },
                    { "valor": "4-1-4-1" },
                    { "valor": "4-2-2-2" },
                    { "valor": "4-2-3-1" },
                    { "valor": "4-2-3-1 (2)" },
                    { "valor": "4-3-1-2" },
                    { "valor": "4-3-2-1" },
                    { "valor": "4-3-3" },
                    { "valor": "4-3-3 (2)" },
                    { "valor": "4-3-3 (3)" },
                    { "valor": "4-3-3 (4)" },
                    { "valor": "4-3-3 (5)" },
                    { "valor": "4-4-1-1" },
                    { "valor": "4-4-2" },
                    { "valor": "4-4-2 (2)" },
                    { "valor": "4-5-1" },
                    { "valor": "4-5-1 (2)" },
                    { "valor": "5-2-1-2" },
                    { "valor": "5-2-2-1" },
                    { "valor": "5-3-2" }
                ]
            },
            {
                "titulo": "Times",
                "itens": [
                    { "valor": "FC Bayern - Bundesliga" },
                    { "valor": "Real Madrid - Liga BBVA" },
                    { "valor": "Juventus - Serie A TIM" },
                    { "valor": "FC Barcelona - Liga BBVA" },
                    { "valor": "Chelsea - Barclays PL" },
                    { "valor": "Manchester City - Barclays PL" },
                    { "valor": "Manchester Utd - Barclays PL" },
                    { "valor": "Paris SG - Ligue 1" },
                    { "valor": "Atlético Madrid - Liga BBVA" },
                    { "valor": "Espanha" },
                    { "valor": "Alemanha" },
                    { "valor": "Brasil" },
                    { "valor": "França" },
                    { "valor": "Bélgica" },
                    { "valor": "Portugal" },
                    { "valor": "Argentina" },
                    { "valor": "Itália" }
                ]
            }
        ]
    ));
}

module.exports = router;