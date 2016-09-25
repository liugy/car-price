import { Component } from '@angular/core';
@Component({
  selector: 'assessor-form',
  templateUrl: 'assessor-form.html'
})
export class FormComponent {
 
  models =  [{
     "Value": "86",
     "Display": "86"
    },
    {
     "Value": "Allex",
     "Display": "Allex"
    },
    {
     "Value": "Allion",
     "Display": "Allion"
    },
    {
     "Value": "Alphard",
     "Display": "Alphard"
    },
    {
     "Value": "Altezza",
     "Display": "Altezza"
    },
    {
     "Value": "Altise",
     "Display": "Altise"
    },
    {
     "Value": "Aqua",
     "Display": "Aqua"
    },
    {
     "Value": "Aristo",
     "Display": "Aristo"
    },
    {
     "Value": "Aurion",
     "Display": "Aurion"
    },
    {
     "Value": "Auris",
     "Display": "Auris"
    },
    {
     "Value": "Avalon",
     "Display": "Avalon"
    },
    {
     "Value": "Avensis",
     "Display": "Avensis"
    },
    {
     "Value": "Axio",
     "Display": "Axio"
    },
    {
     "Value": "BB",
     "Display": "BB"
    },
    {
     "Value": "Belta",
     "Display": "Belta"
    },
    {
     "Value": "Blade",
     "Display": "Blade"
    },
    {
     "Value": "Blizzard",
     "Display": "Blizzard"
    },
    {
     "Value": "Brevis",
     "Display": "Brevis"
    },
    {
     "Value": "Caldina",
     "Display": "Caldina"
    },
    {
     "Value": "Camry",
     "Display": "Camry"
    },
    {
     "Value": "Carib",
     "Display": "Carib"
    },
    {
     "Value": "Carina",
     "Display": "Carina"
    },
    {
     "Value": "Cavalier",
     "Display": "Cavalier"
    },
    {
     "Value": "Celica",
     "Display": "Celica"
    },
    {
     "Value": "Celsior",
     "Display": "Celsior"
    },
    {
     "Value": "Century",
     "Display": "Century"
    },
    {
     "Value": "Ceres",
     "Display": "Ceres"
    },
    {
     "Value": "Chaser",
     "Display": "Chaser"
    },
    {
     "Value": "Corolla",
     "Display": "Corolla"
    },
    {
     "Value": "Corona",
     "Display": "Corona"
    },
    {
     "Value": "Corsa",
     "Display": "Corsa"
    },
    {
     "Value": "Cressida",
     "Display": "Cressida"
    },
    {
     "Value": "Cresta",
     "Display": "Cresta"
    },
    {
     "Value": "Crown",
     "Display": "Crown"
    },
    {
     "Value": "Curren",
     "Display": "Curren"
    },
    {
     "Value": "Cynos",
     "Display": "Cynos"
    },
    {
     "Value": "Duet",
     "Display": "Duet"
    },
    {
     "Value": "Dyna",
     "Display": "Dyna"
    },
    {
     "Value": "Echo",
     "Display": "Echo"
    },
    {
     "Value": "Estima",
     "Display": "Estima"
    },
    {
     "Value": "Exiv",
     "Display": "Exiv"
    },
    {
     "Value": "Fielder",
     "Display": "Fielder"
    },
    {
     "Value": "FJ Cruiser",
     "Display": "FJ Cruiser"
    },
    {
     "Value": "Fortuner",
     "Display": "Fortuner"
    },
    {
     "Value": "FunCargo",
     "Display": "FunCargo"
    },
    {
     "Value": "Gaia",
     "Display": "Gaia"
    },
    {
     "Value": "Grand Hiace",
     "Display": "Grand Hiace"
    },
    {
     "Value": "Granvia",
     "Display": "Granvia"
    },
    {
     "Value": "GT",
     "Display": "GT"
    },
    {
     "Value": "Harrier",
     "Display": "Harrier"
    },
    {
     "Value": "Hiace",
     "Display": "Hiace"
    },
    {
     "Value": "Highlander",
     "Display": "Highlander"
    },
    {
     "Value": "Hilux",
     "Display": "Hilux"
    },
    {
     "Value": "Ipsum",
     "Display": "Ipsum"
    },
    {
     "Value": "IQ",
     "Display": "IQ"
    },
    {
     "Value": "Isis",
     "Display": "Isis"
    },
    {
     "Value": "Ist",
     "Display": "Ist"
    },
    {
     "Value": "Kluger",
     "Display": "Kluger"
    },
    {
     "Value": "Lancer",
     "Display": "Lancer"
    },
    {
     "Value": "Land Cruiser",
     "Display": "Land Cruiser"
    },
    {
     "Value": "Land Cruiser Prado",
     "Display": "Land Cruiser Prado"
    },
    {
     "Value": "Levin",
     "Display": "Levin"
    },
    {
     "Value": "Liteace",
     "Display": "Liteace"
    },
    {
     "Value": "Lucida",
     "Display": "Lucida"
    },
    {
     "Value": "Luxel",
     "Display": "Luxel"
    },
    {
     "Value": "Mark",
     "Display": "Mark"
    },
    {
     "Value": "Mark II",
     "Display": "Mark II"
    },
    {
     "Value": "Mark-X",
     "Display": "Mark-X"
    },
    {
     "Value": "MR2",
     "Display": "MR2"
    },
    {
     "Value": "MR-S",
     "Display": "MR-S"
    },
    {
     "Value": "Nadia",
     "Display": "Nadia"
    },
    {
     "Value": "Noah",
     "Display": "Noah"
    },
    {
     "Value": "Opa",
     "Display": "Opa"
    },
    {
     "Value": "Paseo",
     "Display": "Paseo"
    },
    {
     "Value": "Passo",
     "Display": "Passo"
    },
    {
     "Value": "Platz",
     "Display": "Platz"
    },
    {
     "Value": "Porte",
     "Display": "Porte"
    },
    {
     "Value": "Premio",
     "Display": "Premio"
    },
    {
     "Value": "Previa",
     "Display": "Previa"
    },
    {
     "Value": "Prius",
     "Display": "Prius"
    },
    {
     "Value": "Probox",
     "Display": "Probox"
    },
    {
     "Value": "Progress",
     "Display": "Progress"
    },
    {
     "Value": "Qualis",
     "Display": "Qualis"
    },
    {
     "Value": "Ractis",
     "Display": "Ractis"
    },
    {
     "Value": "Raum",
     "Display": "Raum"
    },
    {
     "Value": "RAV4",
     "Display": "RAV4"
    },
    {
     "Value": "Regius",
     "Display": "Regius"
    },
    {
     "Value": "Rumion",
     "Display": "Rumion"
    },
    {
     "Value": "Runx",
     "Display": "Runx"
    },
    {
     "Value": "Rush",
     "Display": "Rush"
    },
    {
     "Value": "Scepter",
     "Display": "Scepter"
    },
    {
     "Value": "Seinta",
     "Display": "Seinta"
    },
    {
     "Value": "Sera",
     "Display": "Sera"
    },
    {
     "Value": "Sienta",
     "Display": "Sienta"
    },
    {
     "Value": "Soarer",
     "Display": "Soarer"
    },
    {
     "Value": "Spacio",
     "Display": "Spacio"
    },
    {
     "Value": "Sprinter",
     "Display": "Sprinter"
    },
    {
     "Value": "Starlet",
     "Display": "Starlet"
    },
    {
     "Value": "Succeed",
     "Display": "Succeed"
    },
    {
     "Value": "Supra",
     "Display": "Supra"
    },
    {
     "Value": "Surf",
     "Display": "Surf"
    },
    {
     "Value": "Tercel",
     "Display": "Tercel"
    },
    {
     "Value": "Townace",
     "Display": "Townace"
    },
    {
     "Value": "Toyoace",
     "Display": "Toyoace"
    },
    {
     "Value": "Trueno",
     "Display": "Trueno"
    },
    {
     "Value": "Vanguard",
     "Display": "Vanguard"
    },
    {
     "Value": "Vellfire",
     "Display": "Vellfire"
    },
    {
     "Value": "Verossa",
     "Display": "Verossa"
    },
    {
     "Value": "Vista",
     "Display": "Vista"
    },
    {
     "Value": "Vitz",
     "Display": "Vitz"
    },
    {
     "Value": "Voltz",
     "Display": "Voltz"
    },
    {
     "Value": "Voxy",
     "Display": "Voxy"
    },
    {
     "Value": "WiLL",
     "Display": "WiLL"
    },
    {
     "Value": "Windom",
     "Display": "Windom"
    },
    {
     "Value": "Wish",
     "Display": "Wish"
    },
    {
     "Value": "Yaris",
     "Display": "Yaris"
    },
    {
     "Value": "Other",
     "Display": "Other"
    }];
}