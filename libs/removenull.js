
var x={
  "data": {
    "allPagesJson": {
      "edges": [
        {
          "node": {
            "a": null,
            "a_propos_des_jfac": null
          }
        },
        {
          "node": {
            "a": null,
            "a_propos_des_jfac": null
          }
        },
        {
          "node": {
            "a": [
              {
                "animationin": "fadeInRight",
                "animationout": "fadeOut",
                "contenu": "<p>Nous sommes tous concernés par les conséquences de la dégradation de notre environnement et du changement climatique et aucun pays africain, aucun secteur, aucune couche sociale n'est épargnée. Les enjeux sont réels et palpables. Et heureusement les solutions existent pour proposer de nouveaux modèles économiques plus durables basés sur une croissance intelligente, équitable et soucieuse des défis environnementaux et sociaux. L’institution des journées africaines de l'écologie se présente comme un espace privilégié d’échange entre experts et de</p>",
                "le_titre": "",
                "left": false,
                "nom_prenoms_et_poste": "Prof Joseph SEKA SEKA,",
                "photo": "/v1572268723/refacc/images/jp-5b1d34ad75b20a80edc21832ca2ac772_ehji6o.png",
                "right": true
              },
              {
                "animationin": "fadeInLeft",
                "animationout": "fadeOut",
                "contenu": "<p>««Les défis restent énormes et variés pour le continent. La Chine a déployé une stratégie en matière de lutte contre les changements climatiques en se fixant un plan de contribution en réponse aux changements climatiques à travers la réduction de 60 à 65% son émission de CO2 par unité de PIB d’ici 2030. Le pays a réussi à réduire ses émissions de carbone de 45% en 2017. La Chine envisage de réaliser 50 projets d’aide dans le continent africain dans les domaines du développement vert, de l’écologie et de la protection de l’Environnement.»</p>",
                "le_titre": "Ambassadeur de la République Populaire de Chine en Côte d’Ivoire, au nom des partenaires des JFAC 2019 :",
                "left": true,
                "nom_prenoms_et_poste": "SEM Tang WEIBIN",
                "photo": "/v1572268776/refacc/images/1-c0f74139ea659c96bed7dd8b639b034f_mrowyy.png",
                "right": false
              },
              {
                "animationin": "fadeInRight",
                "animationout": "fadeOut",
                "contenu": "<p>«Ces journées de la transition écologique africaine sont une opportunité de formation et de sensibilisation pour les acteurs de nos pays. Nous nous tenons aux côtés des experts du REFACC, et la BAD ira plus loin avec l'accroissement de 40% ses investissements vers les changements climatiques et la croissance verte, à partir de 2020. Ce qui va apporter plus de financement dans le processus de transition écologique et surtout inverser la forte tendance à la déforestation»</p>",
                "le_titre": "Responsable de la division Climat et Croissance à la BAD :",
                "left": false,
                "nom_prenoms_et_poste": "M. Al-Hamdou DORSOUMA",
                "photo": "/v1572268818/refacc/images/2-07aec175ce43aa823c99ea2cc6fece19_r0zu7u.png",
                "right": true
              }
            ],
            "a_propos_des_jfac": {
              "contenu": "<p>Les Journées africaines de l’écologie et des changements climatiques (JFAC 2019) deviennent un baromètre des actions climatiques et écologiques de la Côte d’Ivoire. «Les JFAC peuvent et doivent, en effet, constituer un rendez-vous périodique (peut-être annuel) d’évaluation de nos progrès en matière de lutte contre les changements climatiques et d’atteinte des Objectifs du Développement Durable (ODD). Il est important de se trouver, de dialoguer et d’apprendre l’un de l’autre car l’enjeu climatique nous y oblige», c’est ce qu’a déclaré le ministre ivoirien de l’Environnement et du Développement durable, Séka Séka.</p>",
              "le_titre": "Pourquoi les JFAC",
              "image": "/v1572268654/refacc/images/2_rvcqp5.jpg",
              "title": "Pourquoi les JFAC"
            }
          }
        },
        {
          "node": {
            "a": null,
            "a_propos_des_jfac": null
          }
        }
      ]
    }
  }
}

x.data.allPagesJson.edges.map(edge =>{
    data = edge.node
    if(data.a!=null){
        return console.log(data.a_propos_des_jfac);
    }
})
