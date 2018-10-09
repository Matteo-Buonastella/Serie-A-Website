
var CurrentWeek = 13;  //Current Matchday, Update once every team has played their match for the current week

var teams = [
     {id: 1, name: "AC Milan", logo: "../images/ACMilan.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 2, name: "AS Roma", logo: "../images/ASRoma.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 3, name: "Atalanta", logo: "../images/Atalanta.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 4, name: "Bologna", logo: "../images/Bologna.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 5, name: "Benevento", logo: "../images/Benevento.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 6, name: "Cagliari", logo: "../images/Cagliari.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 7, name: "Chievo", logo: "../images/Chievo.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 8, name: "Crotone", logo: "../images/Crotone.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 9, name: "Fiorentina", logo: "../images/Fiorentina.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 10, name: "Genoa", logo: "../images/Genoa.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 11, name: "Hellas Verona", logo: "../images/HellasVerona.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 12, name: "Inter", logo: "../images/Inter.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 13, name: "Juventus", logo: "../images/Juventus.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 14, name: "Lazio", logo: "../images/Lazio.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 15, name: "Napoli", logo: "../images/Napoli.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 16, name: "Sampdoria", logo: "../images/Sampdoria.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 17, name: "Sassuolo", logo: "../images/Sassuolo.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 18, name: "SPAL", logo: "../images/SPAL.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 19, name: "Torino", logo: "../images/Torino.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
    {id: 20, name: "Udinese", logo: "../images/Udinese.png", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
];

var teamsforschedule = [     //This array is used when creating the schedule and loading club logos on the main pages
     {id: 1, logo: "images/ACMilan.png", name: "AC Milan", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 2, logo: "images/ASRoma.png", name: "AS Roma", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 3, logo: "images/Atalanta.png", name: "Atalanta", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 4, logo: "images/Bologna.png", name: "Bologna", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 5, logo: "images/Benevento.png", name: "Benevento", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 6, logo: "images/Cagliari.png", name: "Cagliari", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 7, logo: "images/Chievo.png", name: "Chievo", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 8, logo: "images/Crotone.png", name: "Crotone", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 9, logo: "images/Fiorentina.png", name: "Fiorentina", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 10, logo: "images/Genoa.png", name: "Genoa", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 11, logo: "images/HellasVerona.png", name: "Hellas Verona", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 12,logo: "images/Inter.png",  name: "Inter", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 13, logo: "images/Juventus.png", name: "Juventus", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 14, logo: "images/Lazio.png", name: "Lazio", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 15, logo: "images/Napoli.png", name: "Napoli", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 16, logo: "images/Sampdoria.png", name: "Sampdoria", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 17,logo: "images/Sassuolo.png",  name: "Sassuolo", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 18,logo: "images/SPAL.png",  name: "SPAL", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
     {id: 19,logo: "images/Torino.png",  name: "Torino", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
    {id: 20,logo: "images/Udinese.png",  name: "Udinese", GP:0, W: 0, D: 0, L:0, GF:0, GA:0, pts:0},
];

var fixtures = [
    //matchday1
    {match: 1, week: 1, Homeid: 13, Awayid: 6,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 1, Homeid: 11, Awayid: 15,    Homescore: 1, Awayscore: 3},
    {match: 1, week: 1, Homeid: 3,  Awayid: 2,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 1, Homeid: 14, Awayid: 18,   Homescore: 0, Awayscore: 0},
    {match: 1, week: 1, Homeid: 4,  Awayid: 19,   Homescore: 1, Awayscore: 1},
    {match: 1, week: 1, Homeid: 12, Awayid: 9,     Homescore: 3, Awayscore: 0},
    {match: 1, week: 1, Homeid: 20, Awayid: 7,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 1, Homeid: 16, Awayid: 5,   Homescore: 2, Awayscore: 1},
    {match: 1, week: 1, Homeid: 17, Awayid: 10,   Homescore: 0, Awayscore: 0},
    {match: 1, week: 1, Homeid: 8, Awayid: 1,   Homescore: 0, Awayscore:3 },
    //matchday2
    {match: 1, week: 2, Homeid: 10, Awayid: 13,    Homescore: 2, Awayscore: 4},
    {match: 1, week: 2, Homeid: 5, Awayid: 4,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 2, Homeid: 2,  Awayid: 12,    Homescore: 1, Awayscore: 3},
    {match: 1, week: 2, Homeid: 19, Awayid: 17,   Homescore: 3, Awayscore: 0},
    {match: 1, week: 2, Homeid: 1,  Awayid: 6,   Homescore: 2, Awayscore: 1},
    {match: 1, week: 2, Homeid: 7, Awayid:14,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 2, Homeid: 9, Awayid: 16,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 2, Homeid: 8, Awayid: 11,   Homescore: 0, Awayscore: 0},
    {match: 1, week: 2,Homeid: 15, Awayid: 3,   Homescore: 3, Awayscore: 1},
    {match: 1, week: 2, Homeid: 18, Awayid: 20,   Homescore: 3, Awayscore: 2},
    //matchday 3
    {match: 1, week: 3, Homeid: 13, Awayid: 7,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 3, Homeid: 16, Awayid: 2,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 3, Homeid: 12, Awayid: 18,   Homescore: 2, Awayscore: 0},
    {match: 1, week: 3, Homeid: 3, Awayid: 17,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 3, Homeid: 20,  Awayid: 10,  Homescore: 1, Awayscore: 0},
    {match: 1, week: 3, Homeid: 11, Awayid:9,     Homescore: 0, Awayscore: 5},
    {match: 1, week: 3, Homeid: 6, Awayid: 8,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 3, Homeid: 14, Awayid: 1,    Homescore: 4, Awayscore: 1},
    {match: 1, week: 3, Homeid: 5, Awayid: 19,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 3, Homeid: 4, Awayid: 15,    Homescore: 0, Awayscore: 3},
    //matchday 4
    {match: 1, week: 4, Homeid: 8, Awayid: 12,    Homescore: 0, Awayscore: 2},
    {match: 1, week: 4, Homeid: 9, Awayid: 4,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 4, Homeid: 2, Awayid: 11,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 4, Homeid: 17, Awayid: 13,   Homescore: 1, Awayscore: 3},
    {match: 1, week: 4, Homeid: 1,  Awayid: 20,   Homescore: 2, Awayscore: 1},
    {match: 1, week: 4, Homeid: 15, Awayid:5,     Homescore: 6, Awayscore: 0},
    {match: 1, week: 4, Homeid: 19, Awayid: 16,   Homescore: 2, Awayscore: 2},
    {match: 1, week: 4, Homeid: 18, Awayid: 6,    Homescore: 0, Awayscore: 2},
    {match: 1, week: 4, Homeid: 7, Awayid: 3,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 4, Homeid: 10, Awayid: 14,    Homescore: 2, Awayscore: 3},
    //matchday 5
    {match: 1, week: 5, Homeid: 4, Awayid: 12,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 5, Homeid: 5, Awayid: 2,     Homescore: 0, Awayscore: 4},
    {match: 1, week: 5, Homeid: 14, Awayid: 15,    Homescore: 1, Awayscore: 4},
    {match: 1, week: 5, Homeid: 1, Awayid: 18,    Homescore: 2, Awayscore: 0},
    {match: 1, week: 5, Homeid: 3, Awayid: 8,   Homescore: 5, Awayscore: 1},
    {match: 1, week: 5, Homeid: 13,  Awayid: 9,   Homescore: 1, Awayscore: 0},
    {match: 1, week: 5, Homeid: 20, Awayid:19,     Homescore: 2, Awayscore: 3},
    {match: 1, week: 5, Homeid: 11, Awayid: 16,   Homescore: 0, Awayscore: 0},
    {match: 1, week: 5, Homeid: 10, Awayid: 7,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 5, Homeid: 6, Awayid: 17,    Homescore: 0, Awayscore: 1},
    //matchday 6
    {match: 1, week: 6, Homeid: 2, Awayid: 20,    Homescore: 3, Awayscore: 1},
    {match: 1, week: 6, Homeid: 18, Awayid: 15,   Homescore: 2, Awayscore: 3},
    {match: 1, week: 6, Homeid: 13, Awayid: 19,   Homescore: 4, Awayscore: 0},
    {match: 1, week: 6, Homeid: 16, Awayid: 1,    Homescore: 2, Awayscore: 0},
    {match: 1, week: 6, Homeid: 12, Awayid: 10,   Homescore: 1, Awayscore: 0},
    {match: 1, week: 6, Homeid: 11, Awayid: 14,   Homescore: 0, Awayscore: 3},
    {match: 1, week: 6, Homeid: 8,  Awayid: 5,    Homescore: 2, Awayscore: 0},
    {match: 1, week: 6, Homeid: 6, Awayid: 7,     Homescore: 0, Awayscore: 2},
    {match: 1, week: 6, Homeid: 17, Awayid: 4,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 6, Homeid: 9, Awayid: 3,     Homescore: 1, Awayscore: 1},
    //matchday 7
    {match: 1, week: 7, Homeid: 20, Awayid: 16,    Homescore: 4, Awayscore: 0},
    {match: 1, week: 7, Homeid: 3, Awayid: 13,     Homescore: 2, Awayscore: 2},
    {match: 1, week: 7, Homeid: 15, Awayid: 6,     Homescore: 3, Awayscore: 0},
    {match: 1, week: 7, Homeid: 5, Awayid: 12,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 7, Homeid: 1, Awayid: 2,      Homescore: 0, Awayscore: 2},
    {match: 1, week: 7, Homeid: 7, Awayid: 9,      Homescore: 2, Awayscore: 1},
    {match: 1, week: 7, Homeid: 14,  Awayid: 17,   Homescore: 6, Awayscore: 1},
    {match: 1, week: 7, Homeid: 19, Awayid: 11,    Homescore: 2, Awayscore: 2},
    {match: 1, week: 7, Homeid: 10, Awayid: 4,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 7, Homeid: 18, Awayid: 8,     Homescore: 1, Awayscore: 1},
    //matchday 8
    {match: 1, week: 8, Homeid: 13, Awayid: 14,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 8, Homeid: 2, Awayid: 15,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 8, Homeid: 9, Awayid: 20,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 8, Homeid: 4, Awayid: 18,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 8, Homeid: 16, Awayid: 3,     Homescore: 3, Awayscore: 1},
    {match: 1, week: 8, Homeid: 17, Awayid: 7,     Homescore: 0, Awayscore: 0},
    {match: 1, week: 8, Homeid: 8,  Awayid: 19,    Homescore: 2, Awayscore: 2},
    {match: 1, week: 8, Homeid: 6, Awayid: 10,     Homescore: 2, Awayscore: 3},
    {match: 1, week: 8, Homeid: 12, Awayid: 1,     Homescore: 3, Awayscore: 2},
    {match: 1, week: 8, Homeid: 11, Awayid: 5,     Homescore: 1, Awayscore: 0},
    //matchday 9
    {match: 1, week: 9, Homeid: 16, Awayid: 8,      Homescore: 5, Awayscore: 0},
    {match: 1, week: 9, Homeid: 15, Awayid: 12,     Homescore: 0, Awayscore: 0},
    {match: 1, week: 9, Homeid: 7, Awayid: 11,      Homescore: 3, Awayscore: 2},
    {match: 1, week: 9, Homeid: 1, Awayid: 10,      Homescore: 0, Awayscore: 0},
    {match: 1, week: 9, Homeid: 3, Awayid: 4,       Homescore: 1, Awayscore: 0},
    {match: 1, week: 9, Homeid: 19, Awayid: 2,      Homescore: 0, Awayscore: 1},
    {match: 1, week: 9, Homeid: 5,  Awayid: 9,      Homescore: 0, Awayscore: 3},
    {match: 1, week: 9, Homeid: 18, Awayid: 17,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 9, Homeid: 20, Awayid: 13,     Homescore: 2, Awayscore: 6},
    {match: 1, week: 9, Homeid: 14, Awayid: 6,      Homescore: 3, Awayscore: 0},
    //matchday 10
    {match: 1, week: 10, Homeid: 12, Awayid: 16,     Homescore: 3, Awayscore: 2},
    {match: 1, week: 10, Homeid: 3, Awayid: 11,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 10, Homeid: 2, Awayid: 8,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 10, Homeid: 4, Awayid: 14,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 10, Homeid: 13, Awayid: 18,      Homescore: 4, Awayscore: 1},
    {match: 1, week: 10, Homeid: 7, Awayid: 1,     Homescore: 1, Awayscore: 4},
    {match: 1, week: 10, Homeid: 10,  Awayid: 15,     Homescore: 2, Awayscore: 3},
    {match: 1, week: 10, Homeid: 17, Awayid: 20,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 10, Homeid: 9, Awayid: 19,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 10, Homeid: 6, Awayid: 5,     Homescore: 2, Awayscore: 1},
    //matchday 11
    {match: 1, week: 11, Homeid: 1, Awayid: 13,     Homescore: 0, Awayscore: 2},
    {match: 1, week: 11, Homeid: 2, Awayid: 4,    Homescore: 1, Awayscore: 0},
    {match: 1, week: 11, Homeid: 5, Awayid: 14,     Homescore: 1, Awayscore: 5},
    {match: 1, week: 11, Homeid: 20, Awayid: 3,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 11, Homeid: 16, Awayid: 7,      Homescore: 4, Awayscore: 1},
    {match: 1, week: 11, Homeid: 8, Awayid: 9,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 11, Homeid: 15,  Awayid: 17,     Homescore: 3, Awayscore: 1},
    {match: 1, week: 11, Homeid: 18, Awayid: 10,    Homescore: 1, Awayscore: 0},
    {match: 1, week: 11, Homeid: 19, Awayid: 6,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 11, Homeid: 11, Awayid: 12,     Homescore: 1, Awayscore: 2},
    //matchday 12
    {match: 1, week: 12, Homeid: 4, Awayid: 8,     Homescore: 2, Awayscore: 3},
    {match: 1, week: 12, Homeid: 10, Awayid: 16,    Homescore: 0, Awayscore: 2},
    {match: 1, week: 12, Homeid: 12, Awayid: 19,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 12, Homeid: 14, Awayid: 20,     Homescore: 3, Awayscore: 0},
    {match: 1, week: 12, Homeid: 13, Awayid: 5,      Homescore: 2, Awayscore: 1},
    {match: 1, week: 12, Homeid: 7, Awayid: 15,     Homescore: 0, Awayscore: 0},
    {match: 1, week: 12, Homeid: 9,  Awayid: 2,     Homescore: 2, Awayscore: 4},
    {match: 1, week: 12, Homeid: 6, Awayid: 11,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 12, Homeid: 3, Awayid: 18,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 12, Homeid: 17, Awayid: 1,     Homescore: 0, Awayscore: 2},
    //matchday 13
    {match: 1, week: 13, Homeid: 2, Awayid: 14,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 13, Homeid: 15, Awayid: 1,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 13, Homeid: 8, Awayid: 10,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 13, Homeid: 20, Awayid: 6,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 13, Homeid: 16, Awayid: 13,      Homescore: 3, Awayscore: 2},
    {match: 1, week: 13, Homeid: 19, Awayid: 7,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 13, Homeid: 5,  Awayid: 17,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 13, Homeid: 18, Awayid: 9,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 13, Homeid: 12, Awayid: 3,    Homescore: 2, Awayscore: 0},
    {match: 1, week: 13, Homeid: 11, Awayid: 4,     Homescore: 2, Awayscore: 3},
    //matchday 14
    {match: 1, week: 14, Homeid: 4, Awayid: 16,     Homescore: 3, Awayscore: 0},
    {match: 1, week: 14, Homeid: 7, Awayid: 18,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 14, Homeid: 17, Awayid: 11,     Homescore: 0, Awayscore: 2},
    {match: 1, week: 14, Homeid: 6, Awayid: 12,     Homescore: 1, Awayscore: 3},
    {match: 1, week: 14, Homeid: 1, Awayid: 19,      Homescore: 0, Awayscore: 0},
    {match: 1, week: 14, Homeid: 20, Awayid: 15,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 14, Homeid: 10,  Awayid: 2,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 14, Homeid: 14, Awayid: 9,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 14, Homeid: 13, Awayid: 8,    Homescore: 3, Awayscore: 0},
    {match: 1, week: 14, Homeid: 3, Awayid: 5,     Homescore: 1, Awayscore: 0},
    //matchday 15
    {match: 1, week: 15, Homeid: 2, Awayid: 18,     Homescore: 3, Awayscore: 1},
    {match: 1, week: 15, Homeid: 15, Awayid: 13,    Homescore: 0, Awayscore: 1},
    {match: 1, week: 15, Homeid: 19, Awayid: 3,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 15, Homeid: 5, Awayid: 1,     Homescore: 2, Awayscore: 2},
    {match: 1, week: 15, Homeid: 4, Awayid: 6,      Homescore: 1, Awayscore: 1},
    {match: 1, week: 15, Homeid: 12, Awayid: 7,     Homescore: 5, Awayscore: 0},
    {match: 1, week: 15, Homeid: 9,  Awayid: 17,     Homescore: 3, Awayscore: 0},
    {match: 1, week: 15, Homeid: 16, Awayid: 14,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 15, Homeid: 8, Awayid: 20,    Homescore: 0, Awayscore: 3},
    {match: 1, week: 15, Homeid: 11, Awayid: 10,     Homescore: 0, Awayscore: 1},
    //matchday 16
    {match: 1, week: 16, Homeid: 6, Awayid: 16,     Homescore: 2, Awayscore: 2},
    {match: 1, week: 16, Homeid: 13, Awayid: 12,    Homescore: 0, Awayscore: 0},
    {match: 1, week: 16, Homeid: 7, Awayid: 2,     Homescore: 0, Awayscore: 0},
    {match: 1, week: 16, Homeid: 20, Awayid: 5,     Homescore: 2, Awayscore: 0},
    {match: 1, week: 16, Homeid: 15, Awayid: 9,      Homescore: 0, Awayscore: 0},
    {match: 1, week: 16, Homeid: 18, Awayid: 11,     Homescore: 2, Awayscore: 2},
    {match: 1, week: 16, Homeid: 17,  Awayid: 8,     Homescore: 2, Awayscore: 1},
    {match: 1, week: 16, Homeid: 1, Awayid: 4,    Homescore: 2, Awayscore: 1},
    {match: 1, week: 16, Homeid: 10, Awayid: 3,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 16, Homeid: 14, Awayid: 19,     Homescore: 1, Awayscore: 3},
    //matchday 17
    {match: 1, week: 17, Homeid: 16, Awayid: 2,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 17, Homeid: 12, Awayid: 20,    Homescore: 1, Awayscore: 3},
    {match: 1, week: 17, Homeid: 19, Awayid: 15,     Homescore: 1, Awayscore: 3},
    {match: 1, week: 17, Homeid: 2, Awayid: 6,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 17, Homeid: 11, Awayid: 1,      Homescore: 3, Awayscore: 0},
    {match: 1, week: 17, Homeid: 4, Awayid: 13,     Homescore: 0, Awayscore: 3},
    {match: 1, week: 17, Homeid: 16,  Awayid: 17,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 17, Homeid: 8, Awayid: 7,    Homescore: 1, Awayscore: 0},
    {match: 1, week: 17, Homeid: 9, Awayid: 10,    Homescore: 0, Awayscore: 0},
    {match: 1, week: 17, Homeid: 5, Awayid: 18,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 17, Homeid: 3, Awayid: 14,     Homescore: 3, Awayscore: 3},
    //matchday 18
    {match: 1, week: 18, Homeid: 14, Awayid: 8,     Homescore: 4, Awayscore: 0},
    {match: 1, week: 18, Homeid: 1, Awayid: 3,    Homescore: 0, Awayscore: 2},
    {match: 1, week: 18, Homeid: 13, Awayid: 2,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 18, Homeid: 20, Awayid: 11,     Homescore: 4, Awayscore: 0},
    {match: 1, week: 18, Homeid: 7, Awayid: 4,      Homescore: 2, Awayscore: 3},
    {match: 1, week: 18, Homeid: 10, Awayid: 5,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 18, Homeid: 17,  Awayid: 12,     Homescore: 1, Awayscore: 0},
    {match: 1, week: 18, Homeid: 15, Awayid: 16,    Homescore: 3, Awayscore: 2},
    {match: 1, week: 18, Homeid: 18, Awayid: 19,    Homescore: 2, Awayscore: 2},
    {match: 1, week: 18, Homeid: 6, Awayid: 9,     Homescore: 0, Awayscore: 1},
    //matchday 19
    {match: 1, week: 19, Homeid: 2, Awayid: 17,     Homescore: 1, Awayscore: 1},
    {match: 1, week: 19, Homeid: 3, Awayid: 6,    Homescore: 1, Awayscore: 2},
    {match: 1, week: 19, Homeid: 4, Awayid: 20,     Homescore: 1, Awayscore: 2},
    {match: 1, week: 19, Homeid: 12, Awayid: 14,     Homescore: 0, Awayscore: 0},
    {match: 1, week: 19, Homeid: 11, Awayid: 13,      Homescore: 1, Awayscore: 3},
    {match: 1, week: 19, Homeid: 16, Awayid: 18,     Homescore: 2, Awayscore: 0},
    {match: 1, week: 19, Homeid: 8,  Awayid: 15,     Homescore: 0, Awayscore: 1},
    {match: 1, week: 19, Homeid: 9, Awayid: 1,    Homescore: 1, Awayscore: 1},
    {match: 1, week: 19, Homeid: 19, Awayid: 10,    Homescore: 0, Awayscore: 0},
    {match: 1, week: 19, Homeid: 5, Awayid: 7,     Homescore: 1, Awayscore: 0},
    //matchday 20
    {match: 1, week: 20, Homeid: 1, Awayid: 8,     Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 2, Awayid: 3,    Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 7, Awayid: 20,     Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 10, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 9, Awayid: 12,      Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 15, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 19,  Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 5, Awayid: 16,    Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 18, Awayid: 14,    Homescore: null, Awayscore: null},
    {match: 1, week: 20, Homeid: 6, Awayid: 13,     Homescore: null, Awayscore: null},
    //matchday 21
    {match: 1, week: 21, Homeid: 14, Awayid: 7,     Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 3, Awayid: 15,    Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 4, Awayid: 5,     Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 12, Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 13, Awayid: 10,      Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 20, Awayid: 18,     Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 11,  Awayid: 8,     Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 16, Awayid: 9,    Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 17, Awayid: 19,    Homescore: null, Awayscore: null},
    {match: 1, week: 21, Homeid: 6, Awayid: 1,     Homescore: null, Awayscore: null},
    //matchday 22
    {match: 1, week: 22, Homeid: 1, Awayid: 14,     Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 2, Awayid: 16,    Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 7, Awayid: 13,     Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 10, Awayid: 20,     Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 17, Awayid: 3,      Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 8, Awayid: 6,     Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 9,  Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 15, Awayid: 4,    Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 19, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 22, Homeid: 18, Awayid: 12,     Homescore: null, Awayscore: null},
    //matchday 23
    {match: 1, week: 23, Homeid: 14, Awayid: 10,     Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 3, Awayid: 7,    Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 4, Awayid: 9,     Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 12, Awayid: 8,     Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 13, Awayid: 17,      Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 20, Awayid: 1,     Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 11,  Awayid: 3,     Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 16, Awayid: 19,    Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 5, Awayid: 15,    Homescore: null, Awayscore: null},
    {match: 1, week: 23, Homeid: 6, Awayid: 18,     Homescore: null, Awayscore: null},
    //matchday 24
    {match: 1, week: 24, Homeid: 2, Awayid: 5,     Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 12, Awayid: 4,    Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 7, Awayid: 10,     Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 16, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 17, Awayid: 6,      Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 8, Awayid: 3,     Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 9,  Awayid: 13,     Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 15, Awayid: 14,    Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 19, Awayid: 20,    Homescore: null, Awayscore: null},
    {match: 1, week: 24, Homeid: 18, Awayid: 1,     Homescore: null, Awayscore: null},
    //matchday 25
    {match: 1, week: 25, Homeid: 14, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 1, Awayid: 16,    Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 3, Awayid: 9,     Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 4, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 20, Awayid: 2,      Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 7, Awayid: 6,     Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 10,  Awayid: 12,     Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 15, Awayid: 18,    Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 19, Awayid: 13,    Homescore: null, Awayscore: null},
    {match: 1, week: 25, Homeid: 5, Awayid: 8,     Homescore: null, Awayscore: null},
    //matchday 26
    {match: 1, week: 26, Homeid: 2, Awayid: 1,     Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 4, Awayid: 10,    Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 12, Awayid: 5,     Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 13, Awayid: 3,     Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 11, Awayid: 19,      Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 16, Awayid: 20,     Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 17,  Awayid: 14,     Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 8, Awayid: 18,    Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 9, Awayid: 7,    Homescore: null, Awayscore: null},
    {match: 1, week: 26, Homeid: 6, Awayid: 15,     Homescore: null, Awayscore: null},
    //matchday 27
    {match: 1, week: 27, Homeid: 14, Awayid: 13,     Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 1, Awayid: 12,    Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 3, Awayid: 16,     Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 20, Awayid: 9,     Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 7, Awayid: 17,      Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 10, Awayid: 6,     Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 15,  Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 19, Awayid: 8,    Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 5, Awayid: 11,    Homescore: null, Awayscore: null},
    {match: 1, week: 27, Homeid: 18, Awayid: 4,     Homescore: null, Awayscore: null},
    //matchday 28
    {match: 1, week: 28, Homeid: 2, Awayid: 19,     Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 4, Awayid: 3,    Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 12, Awayid: 15,     Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 13, Awayid: 20,     Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 11, Awayid: 7,      Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 10, Awayid: 1,     Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 17,  Awayid: 18,     Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 8, Awayid: 16,    Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 9, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 28, Homeid: 6, Awayid: 14,     Homescore: null, Awayscore: null},
    //matchday 29
    {match: 1, week: 29, Homeid: 14, Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 1, Awayid: 7,    Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 20, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 11, Awayid: 3,     Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 16, Awayid: 12,      Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 8, Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 15,  Awayid: 10,     Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 19, Awayid: 9,    Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 5, Awayid: 6,    Homescore: null, Awayscore: null},
    {match: 1, week: 29, Homeid: 18, Awayid: 13,     Homescore: null, Awayscore: null},
    //mathcday 30
    {match: 1, week: 30, Homeid: 14, Awayid: 5,     Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 3, Awayid: 20,    Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 4, Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 12, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 13, Awayid: 1,      Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 7, Awayid: 16,     Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 10,  Awayid: 18,     Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 17, Awayid: 15,    Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 9, Awayid: 8,    Homescore: null, Awayscore: null},
    {match: 1, week: 30, Homeid: 6, Awayid: 19,     Homescore: null, Awayscore: null},
    //matchday 31
    {match: 1, week: 31, Homeid: 1, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 2, Awayid: 9,    Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 20, Awayid: 14,     Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 11, Awayid: 6,     Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 16, Awayid: 10,      Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 8, Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 15,  Awayid: 7,     Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 19, Awayid: 12,    Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 5, Awayid: 13,    Homescore: null, Awayscore: null},
    {match: 1, week: 31, Homeid: 18, Awayid: 3,     Homescore: null, Awayscore: null},
    //matchday 32
    {match: 1, week: 32, Homeid: 14, Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 1, Awayid: 15,    Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 3, Awayid: 12,     Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 4, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 13, Awayid: 16,      Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 7, Awayid: 19,     Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 10,  Awayid: 8,     Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 17, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 9, Awayid: 18,    Homescore: null, Awayscore: null},
    {match: 1, week: 32, Homeid: 6, Awayid: 20,     Homescore: null, Awayscore: null},
    //matchday 33
    {match: 1, week: 33, Homeid: 2, Awayid: 10,     Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 12, Awayid: 6,    Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 11, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 16, Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 8, Awayid: 13,      Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 9, Awayid: 14,     Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 15,  Awayid: 20,     Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 19, Awayid: 1,    Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 5, Awayid: 3,    Homescore: null, Awayscore: null},
    {match: 1, week: 33, Homeid: 18, Awayid: 7,     Homescore: null, Awayscore: null},
    //matchday 34
    {match: 1, week: 34, Homeid: 14, Awayid: 16,     Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 1, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 3, Awayid: 19,     Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 13, Awayid: 15,     Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 20, Awayid: 8,      Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 7, Awayid: 12,     Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 10,  Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 17, Awayid: 9,    Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 18, Awayid: 2,    Homescore: null, Awayscore: null},
    {match: 1, week: 34, Homeid: 6, Awayid: 4,     Homescore: null, Awayscore: null},
    //matchday 35
    {match: 1, week: 35, Homeid: 2, Awayid: 7,     Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 3, Awayid: 10,    Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 4, Awayid: 1,     Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 12, Awayid: 13,     Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 11, Awayid: 18,      Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 16, Awayid: 6,     Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 8,  Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 9, Awayid: 15,    Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 19, Awayid: 14,    Homescore: null, Awayscore: null},
    {match: 1, week: 35, Homeid: 5, Awayid: 20,     Homescore: null, Awayscore: null},
    //matchday 36
    {match: 1, week: 36, Homeid: 14, Awayid: 3,     Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 1, Awayid: 11,    Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 13, Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 20, Awayid: 12,     Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 7, Awayid: 8,      Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 10, Awayid: 9,     Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 17,  Awayid: 16,     Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 15, Awayid: 19,    Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 18, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 36, Homeid: 6, Awayid: 2,     Homescore: null, Awayscore: null},
    //matchday 37
    {match: 1, week: 37, Homeid: 2, Awayid: 13,     Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 3, Awayid: 1,    Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 4, Awayid: 7,     Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 12, Awayid: 17,     Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 11, Awayid: 20,      Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 16, Awayid: 15,     Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 8,  Awayid: 14,     Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 9, Awayid: 6,    Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 19, Awayid: 5,    Homescore: null, Awayscore: null},
    {match: 1, week: 37, Homeid: 5, Awayid: 10,     Homescore: null, Awayscore: null},
    //matchday 38
    {match: 1, week: 38, Homeid: 14, Awayid: 12,     Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 1, Awayid: 9,    Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 13, Awayid: 11,     Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 20, Awayid: 4,     Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 7, Awayid: 5,      Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 10, Awayid: 19,     Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 17,  Awayid: 2,     Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 15, Awayid: 8,    Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 18, Awayid: 16,    Homescore: null, Awayscore: null},
    {match: 1, week: 38, Homeid: 6, Awayid: 3,     Homescore: null, Awayscore: null},
    ]; 
  

   for (var i = 0; i < fixtures.length;i++) {    //For loop which calculates the Home and Away results for each team
        if (fixtures[i].Homescore != null){
        // Hometeam
        teams[fixtures[i].Homeid-1].GP+=fixtures[i].match;            //for example ac milan is id 1, but in team array they occupy [0] spot, so team[fixtures[i].homeid -1] would be 0 in the team array but have home id 1 in the fixture array
        teams[fixtures[i].Homeid-1].GF+=fixtures[i].Homescore;
        teams[fixtures[i].Homeid-1].GA+=fixtures[i].Awayscore;
        teams[fixtures[i].Homeid-1].GD+=fixtures[i].Homescore-fixtures[i].Awayscore;
        teams[fixtures[i].Homeid-1].W+=fixtures[i].Homescore > fixtures[i].Awayscore ? 1 : 0;
        teams[fixtures[i].Homeid-1].L+=fixtures[i].Homescore < fixtures[i].Awayscore ? 1 : 0;
        teams[fixtures[i].Homeid-1].D+=fixtures[i].Homescore == fixtures[i].Awayscore ? 1 : 0;
        // Awayteam
        teams[fixtures[i].Awayid-1].GP+=fixtures[i].match;
        teams[fixtures[i].Awayid-1].GF+=fixtures[i].Awayscore;
        teams[fixtures[i].Awayid-1].GA+=fixtures[i].Homescore;
        teams[fixtures[i].Awayid-1].GD+=fixtures[i].Awayscore-fixtures[i].Homescore;
        teams[fixtures[i].Awayid-1].W+=fixtures[i].Homescore < fixtures[i].Awayscore ? 1 : 0;
        teams[fixtures[i].Awayid-1].L+=fixtures[i].Homescore > fixtures[i].Awayscore ? 1 : 0;
        teams[fixtures[i].Awayid-1].D+=fixtures[i].Homescore == fixtures[i].Awayscore ? 1 : 0;
    }
}

   
for (var x = 0; x < teams.length; x++)               /////Calculates Total points for all teams////
    {
        teams[x].pts = teams[x].W * 3 + teams[x].D;
    }

window.onload = function()
{
    var tableContainer = document.querySelector("#table");
    var table = "";

    teams.sort(function(a,b){
        var n = b.pts - a.pts;
        if (n !== 0){
            return n;
        }
        return (b.GF - b.GA) - (a.GF-a.GA);
    });

    for (var i = 0; i<teams.length; i++)
    {
        table += "<tr>" + 
                     "<td>" + teams[i].name + "</td>"+
                     "<td>" + teams[i].GP + "</td>"+
                     "<td>" + teams[i].W + "</td>"+
                     "<td>" + teams[i].D + "</td>"+
                     "<td>" + teams[i].L + "</td>"+
                     "<td>" + teams[i].GF + "</td>"+
                     "<td>" + teams[i].GA + "</td>"+
                     "<td>" + (teams[i].GF - teams[i].GA) + "</td>"+
                     "<td>" + ( (teams[i].W * 3) + teams[i].D) + "</td>"+
                "</tr>";
    }
        tableContainer.innerHTML+=table;


        

};

///////////////////////////Results on Table Page/////////////////////////////

function Result(id){                                  //For Home teams
    if (id == 1){
        var line = document.getElementById("f1a");
    }
    if (id == 2){
        var line = document.getElementById("f2a");
    }
    if (id == 3){
        var line = document.getElementById("f3a");
    }
    if (id == 4){
        var line = document.getElementById("f4a");
    }
    if (id == 5){
        var line = document.getElementById("f5a");
    }
    if (id == 6){
        var line = document.getElementById("f6a");
    }
    if (id == 7){
        var line = document.getElementById("f7a");
    }
    if (id == 8){
        var line = document.getElementById("f8a");
    }
    if (id == 9){
        var line = document.getElementById("f9a");
    }
    if (id == 10){
        var line = document.getElementById("f10a");
    }
    var f1a = "";
    var f1b = "";
    var counter = 1;

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    })
    for (var i = 0; i < fixtures.length; i++){
        if (fixtures[i].week == CurrentWeek - 1){
           if (counter == id){
                line.innerHTML +=  "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 40px height = 55px >" + "<strong>" + fixtures[i].Homescore + "-" + fixtures[i].Awayscore;
                counter++
            }
            else{
                counter++
            }
        }       
    }
}

function AwayResult(id){            ///For Away Teams
    if (id == 1){
        var line = document.getElementById("f1b");
    }
    if (id == 2){
        var line = document.getElementById("f2b");
    }
    if (id == 3){
        var line = document.getElementById("f3b");
    }
    if (id == 4){
        var line = document.getElementById("f4b");
    }
    if (id == 5){
        var line = document.getElementById("f5b");
    }
    if (id == 6){
        var line = document.getElementById("f6b");
    }
    if (id == 7){
        var line = document.getElementById("f7b");
    }
    if (id == 8){
        var line = document.getElementById("f8b");
    }
    if (id == 9){
        var line = document.getElementById("f9b");
    }
    if (id == 10){
        var line = document.getElementById("f10b");
    }
    var f1a = "";
    var f1b = "";
    var counter = 1;

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    })
    for (var i = 0; i < fixtures.length; i++){
        if (fixtures[i].week == CurrentWeek - 1){
           if (counter == id){
                line.innerHTML +=  "<img src =" +teamsforschedule[fixtures[i].Awayid -1].logo +
           " width = 40px height = 55px >";
                counter++
            }
            else{
                counter++
            }
        }       
    }
}
/////////////////////////////////////////////////////////////////////////////////////


function Position(id)             ////////////Finds the position for specified team///////////////
{
    var place = 0;
    var ending = "";

    teams.sort(function(a,b){
        var n = b.pts - a.pts;
        if (n !== 0){
            return n;
        }
        return (b.GF - b.GA) - (a.GF-a.GA);
    });

    for (var i = 0; i < teams.length; i++){
        if (teams[i].id === id){
            place += i+1;
        }
    }
    var tableContainer = document.querySelector("#position");
    var position = "";

    if (place > 3 && place < 21){
        ending = "th";
    }
    else if(place == 3){
        ending = "rd";
    }
    else if (place == 2){
        ending = "nd";
    }
    else if (place == 1){
        ending = "st";
    }

    position += "<h4>" + "Position: " + place + ending + "</h4>";
               
    
    tableContainer.innerHTML+=position;

};


function Form(id){                   ///////////Finds the League form of each team //////////////
    var form = "";
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var last_five = [];
    var new_fixtures = [];
    var formContainer = document.querySelector("#form");

       teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });
                                                         ////Checks Home and Away results involving the last 5 games for specified team
    for (var i = 0; i < fixtures.length; i++){                 
        if (teams[id - 1].GP == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                one = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                one = "D";
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                one = "L";
            }
        }     
        if (teams[id - 1].GP == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
                one = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                one = "D";
            }
            else if (fixtures[i].Homescore > fixtures[i].Awayscore){
                one = "L";
            }
        }

        if ((teams[id - 1].GP - 1) == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                two = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                two = "D";
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                two = "L";
            }
        }

        if ((teams[id - 1].GP - 1) == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
                two = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                two = "D";
            }
            else if (fixtures[i].Homescore > fixtures[i].Awayscore){
                two = "L";
            }
        }

        if ((teams[id - 1].GP-2) == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                three = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                three = "D";
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                three = "L";
            }
        }

        if ((teams[id - 1].GP-2) == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
                three = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                three = "D";
            }
            else if (fixtures[i].Homescore > fixtures[i].Awayscore){
                three = "L";
            }
        }

        if ((teams[id - 1].GP-3) == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                four = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                four = "D";
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                four = "L";
            }
        }

        if ((teams[id - 1].GP-3) == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
                four = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                four = "D";
            }
            else if (fixtures[i].Homescore > fixtures[i].Awayscore){
                four = "L";
            }
        }

        if ((teams[id - 1].GP-4) == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                five = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                five = "D";
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                five = "L";
            }
        }

        if ((teams[id - 1].GP-4) == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
                five = "W";
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                five = "D";
            }
            else if (fixtures[i].Homescore > fixtures[i].Awayscore){
                five = "L";
            }
        }
    }   
    last_five = [one + "-" + two + "-" + three + "-" + four + "-" + five];
    form = "<h4>" + "Form: " + last_five + "</h4>";
    formContainer.innerHTML += form;    
}


function NextMatch(id){                        /////////Finds Next weeks opponent//////////////
    var VS_AT = "";
    var next_team = "";
    var teamid = "";
    var match = "";
    
    var next = document.querySelector("#nextTeam");

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });

    for (var i = 0; i < fixtures.length; i++){
        if ((CurrentWeek) == fixtures[i].week && fixtures[i].Homeid == teams[id - 1].id){      
            VS_AT = "VS";
            next_team = teams[fixtures[i].Awayid - 1].name;
            teamid = teams[fixtures[i].Awayid - 1].id
        }
        else if ((CurrentWeek) == fixtures[i].week && fixtures[i].Awayid == teams[id - 1].id){
            VS_AT = "AT";
            next_team = teams[fixtures[i].Homeid - 1].name;
            teamid = teams[fixtures[i].Homeid - 1].id
        }
    }
 
    match += "<h4>" + "Next Match: " + VS_AT + " " + next_team + " " + "<img src =" +teams[teamid - 1].logo + " width = 25px  >" + "</h4>";
    next.innerHTML += match;
}


function Upcoming(){                                                         //////Upcoming Fixtures for Home screen///////////
    var UpcomingContainer = document.querySelector("#UpcomingFixtures");    
    var Home = [];

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });

    for (var i = 0; i<fixtures.length; i++){
        if ((CurrentWeek) == fixtures[i].week){
           UpcomingContainer.innerHTML+= "<h4>" + Home + "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 45px height = 60px >" + "   VS   " + "<img src =" + teamsforschedule[fixtures[i].Awayid -1].logo +
           " width = 49px height = 65px >" + "</h4>" + " <br />";
        }
    }  
}


//////////////////Displays Schedule//////////////////
function UpcomingWeek(){
    var line = document.getElementById("Upcoming");                    ///Finds what the current week is, i.e. Week 6

     teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });

    line.innerHTML += "<h4>" + "Current Week: " +  (CurrentWeek) + "</h4>";     
}


function schedule(myform){                                 //The Full schedule in the schedule tab
  var schedule = "";
  var matchday = "";
  var not_played = "";

  var scheduleContainer = document.querySelector("#League_Schedule");
  var matchdayContainer = document.querySelector("#mathcday");

  var selIndex = form_schedule.s1.options.selectedIndex;   //1 Lower then the actual select week (starts at 0)
  selIndex += 1;                                           //selIndex's value is always 1 lower then the actual selected week
  
  matchday +=  "<h4>" +  "Week " + selIndex + "</h4>"

  for (var i = 0; i < fixtures.length; i++){
      if (selIndex == fixtures[i].week && selIndex != 40){
         if(fixtures[i].Homescore != null){
                schedule +=  "<tr>" + 
                                    "<td>" + teamsforschedule[fixtures[i].Homeid-1].name + "   " + "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 20px height = 35px >" +  "</td>" +     
                                    "<td>" + fixtures[i].Homescore + " - " + fixtures[i].Awayscore +  "</td>" +                            
                                    "<td>" +  "<img src =" +teamsforschedule[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" + "   "  + teamsforschedule[fixtures[i].Awayid-1].name + "</td>" +
                             "</tr>"
           }
        else if (fixtures.Homescore == null){
            not_played = "VS";

                schedule +=  "<tr>" + 
                                    "<td>" + teamsforschedule[fixtures[i].Homeid-1].name + "   " + "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 20px height = 35px >" +   "</td>" +     
                                    "<td>" + not_played + "</td>" +                            
                                    "<td>" + "<img src =" +teamsforschedule[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" + "   " + teamsforschedule[fixtures[i].Awayid-1].name + "</td>" +
                             "</tr>"

        }
      }
      else if(selIndex == 39){                 //////Upcoming Weeks////////
          if (fixtures[i].Homescore == null){
               not_played = "VS";

                schedule +=  "<tr>" + 
                                    "<td>" + teamsforschedule[fixtures[i].Homeid-1].name + "   " + "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 20px height = 35px >" +  "</td>" +     
                                    "<td>" + not_played + "</td>" +                            
                                    "<td>" + "<img src =" +teamsforschedule[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teamsforschedule[fixtures[i].Awayid-1].name + "</td>" +
                             "</tr>"

          }
      }
      else if (selIndex == 40){                  /////All Weeks/////////        
            if (fixtures[i].Homescore != null){
                schedule +=  "<tr>" + 
                                "<td>" + teamsforschedule[fixtures[i].Homeid-1].name +  "   " + "<img src =" +teamsforschedule[fixtures[i].Homeid -1].logo +
           " width = 20px height = 35px >" + "</td>" +     
                                "<td>" + fixtures[i].Homescore + " - " + fixtures[i].Awayscore + "</td>" + 
                                "<td>" + "<img src =" +teamsforschedule[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teamsforschedule[fixtures[i].Awayid-1].name + "</td>" +
                             "</tr>";
            }     
      }
  }
 
  scheduleContainer.innerHTML = schedule;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Functions specific to Club pages

function Home(){
    document.getElementById("Home").style.display = "inline";
    document.getElementById("Schedule").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Squad").style.display = "none";
    document.getElementById("History").style.display = "none"; 


}

function Record(id){                 // Function displays the Record for each club
 
    var record = "";
    var line = document.getElementById("Record");

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });

    for (var i = 0; i < teams.length; i++){
        if (teams[i].id == id){
            record += "<h3>"  + teams[i].W + "-" + teams[i].D + "-" + teams[i].L +  "</h3>";
        }
    }

    line.innerHTML+=record;        
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function News(){
    document.getElementById("News").style.display = "inline";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Schedule").style.display = "none";
    document.getElementById("Squad").style.display = "none";
    document.getElementById("History").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Squad(){
    document.getElementById("Squad").style.display = "inline";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Schedule").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("History").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function History(){
    document.getElementById("History").style.display = "block";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Schedule").style.display = "none";
    document.getElementById("Squad").style.display = "none";
    document.getElementById("News").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ClubSchedule(id){            //Displays Schedule for specific club on club page//
    document.getElementById("Schedule").style.display = "inline";
    document.getElementById("Home").style.display = "none";
    document.getElementById("History").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Squad").style.display = "none";
  
    var schedule = "";
    var NotPlayed = "";
    var result = "";
    var list = document.querySelector("#Club_Schedule");

    teams.sort(function(a,b){
        var n = a.id - b.id;
        if (n !== 0){
            return n;
        }
    });

    for (var i = 0; i <fixtures.length; i++){
        if (fixtures[i].Homeid == id && fixtures[i].Homescore != null){    //If statement finds whether or not it was a win, draw or loss
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                result = "<span style='color:#009900; font-weight: bold;'>W</span>";  //Makes W green
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                result = "<span style='color:orange; font-weight: bold;'>D</span>";  //Makes D Orange
            }
            else if (fixtures[i].Homescore < fixtures[i].Awayscore){
                result = "<span style='color:red; font-weight: bold;'>L</span>";     //Make L red
            }
            schedule += "<tr>" +
                        "<td>" + "Week " + fixtures[i].week + "</td>" +
                        "<td>" + result + "  " + fixtures[i].Homescore + " - " + fixtures[i].Awayscore + "</td>" +
                        "<td>" + "<img src =" + teams[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teams[fixtures[i].Awayid - 1].name + "</td>" +
                        "</tr>";
        }
        else if (fixtures[i].Homeid == id && fixtures[i].Homescore == null){
            schedule += "<tr>" +
                        "<td>" + "Week " + fixtures[i].week + "</td>" +
                        "<td>" + " VS " +  "</td>" +
                        "<td>" +  "<img src =" + teams[fixtures[i].Awayid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teams[fixtures[i].Awayid - 1].name + "</td>" +
                        "</tr>";
        }        
        else if (fixtures[i].Awayid == id && fixtures[i].Homescore != null){
            if (fixtures[i].Homescore < fixtures[i].Awayscore){
               result = "<span style='color:#009900; font-weight: bold;'>W</span>";  //Makes W green
            }
            else if (fixtures[i].Homescore == fixtures[i].Awayscore){
                result = "<span style='color:orange; font-weight: bold;'>D</span>";  //Makes D Orange";
            }
            if (fixtures[i].Homescore > fixtures[i].Awayscore){
                result = "<span style='color:red; font-weight: bold;'>L</span>";     //Make L red
            }
            schedule += "<tr>" +
                        "<td>" + "Week " + fixtures[i].week + "</td>" +
                        "<td>" + result + "  " + fixtures[i].Awayscore + " - " + fixtures[i].Homescore + "</td>" +
                        "<td>" +  "<img src =" + teams[fixtures[i].Homeid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teams[fixtures[i].Homeid - 1].name + "</td>" +
                        "</tr>";
        }
        else if (fixtures[i].Awayid == id && fixtures[i].Homescore == null){
            schedule += "<tr>" +
                        "<td>" + "Week " + fixtures[i].week + "</td>" +
                        "<td>" + " AT " +  "</td>" +
                        "<td>" + "<img src =" + teams[fixtures[i].Homeid-1].logo + 
           " width = 20px height = 35px >" +  "   " + teams[fixtures[i].Homeid - 1].name + "</td>" +
                        "</tr>";
        }  
    }
list.innerHTML = schedule;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////




//Season 2016/2017
/*
    var teams = [
        {name: "AC Milan", GP:38, W: 18, D: 9, L:11, GF:57, GA:45, pts:"63"},
        {name: "AS Roma", GP:38,  W: 28, D: 3, L:7, GF:90, GA:38, pts:"87" },
        {name: "Atalanta", GP:38,  W: 21, D:9, L:8, GF:62, GA:41, pts:"72" },
        {name: "Bologna", GP:38,  W: 11, D: 8, L:19, GF:40, GA:58, pts:"41" },
        {name: "Cagliari", GP:38,  W: 14, D: 5, L:19, GF:55, GA:76, pts:"47" },
        {name: "Chievo", GP:38,  W: 12, D: 7, L:19, GF:43, GA:61, pts:"43" },
        {name: "Crotone", GP:38,  W: 9, D: 7, L:22, GF:34, GA:58, pts:"34" },
        {name: "Empoli", GP:38,  W: 8, D: 8, L:22, GF:29, GA:61, pts:"32" },
        {name: "Fiorentina", GP:38,  W: 16, D: 12, L:10, GF:63, GA:"57", pts:"60" },
        {name: "Genoa", GP:38,  W: 9, D: 9, L:20, GF:38, GA:64, pts:"36" },
        {name: "Inter", GP:38,  W: 19, D:5, L:14, GF:72, GA:49, pts:"62" },
        {name: "Juventus", GP:38, W: 29, D: 4, L:5, GF:77, GA:27, pts:"91" },
        {name: "Lazio", GP:38,  W: 21, D: 7, L:10, GF:64, GA:51, pts:"70" },
        {name: "Napoli", GP:38,  W: 26, D: 8, L:4, GF:94, GA:39, pts:"86" },
        {name: "Palermo", GP:38,  W: 6, D: 8, L:24, GF:33, GA:77, pts:"26" },
        {name: "Sampdoria", GP:38,  W: 12, D: 12, L:14, GF:49, GA:55, pts:"48" },
        {name: "Sassuolo", GP:38,  W: 13, D: 7, L:18, GF:58, GA:63, pts:"46" },
        {name: "Torino", GP:38,  W: 13, D: 14, L:11, GF:71, GA:66, pts:"53" },
        {name: "Udinese", GP:38,  W: 12, D: 9, L:17, GF:47, GA:56, pts:"45" },
        {name: "US Pescara", GP:38,  W: 3, D: 9, L:26, GF:37, GA:81, pts:"18" },
        

    ];
*/
