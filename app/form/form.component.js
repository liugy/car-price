"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FormComponent = (function () {
    function FormComponent() {
        this.makers = {
            "Name": "Cars",
            "Number": "0001-0268-",
            "Path": "/Trade-Me-Motors/Cars",
            "Subcategories": [
                {
                    "Name": "Alfa Romeo",
                    "Number": "0001-0268-0269-",
                    "Path": "/Trade-Me-Motors/Cars/Alfa-Romeo",
                    "HasClassifieds": true
                },
                {
                    "Name": "Aston Martin",
                    "Number": "0001-0268-0270-",
                    "Path": "/Trade-Me-Motors/Cars/Aston-Martin",
                    "HasClassifieds": true
                },
                {
                    "Name": "Audi",
                    "Number": "0001-0268-0271-",
                    "Path": "/Trade-Me-Motors/Cars/Audi",
                    "HasClassifieds": true
                },
                {
                    "Name": "Austin",
                    "Number": "0001-0268-0272-",
                    "Path": "/Trade-Me-Motors/Cars/Austin",
                    "HasClassifieds": true
                },
                {
                    "Name": "Bentley",
                    "Number": "0001-0268-7081-",
                    "Path": "/Trade-Me-Motors/Cars/Bentley",
                    "HasClassifieds": true
                },
                {
                    "Name": "BMW",
                    "Number": "0001-0268-0275-",
                    "Path": "/Trade-Me-Motors/Cars/BMW",
                    "HasClassifieds": true
                },
                {
                    "Name": "Cadillac",
                    "Number": "0001-0268-0278-",
                    "Path": "/Trade-Me-Motors/Cars/Cadillac",
                    "HasClassifieds": true
                },
                {
                    "Name": "Chery",
                    "Number": "0001-0268-9976-",
                    "Path": "/Trade-Me-Motors/Cars/Chery",
                    "HasClassifieds": true
                },
                {
                    "Name": "Chevrolet",
                    "Number": "0001-0268-0280-",
                    "Path": "/Trade-Me-Motors/Cars/Chevrolet",
                    "HasClassifieds": true
                },
                {
                    "Name": "Chrysler",
                    "Number": "0001-0268-0281-",
                    "Path": "/Trade-Me-Motors/Cars/Chrysler",
                    "HasClassifieds": true
                },
                {
                    "Name": "Citroen",
                    "Number": "0001-0268-0282-",
                    "Path": "/Trade-Me-Motors/Cars/Citroen",
                    "HasClassifieds": true
                },
                {
                    "Name": "Daewoo",
                    "Number": "0001-0268-0283-",
                    "Path": "/Trade-Me-Motors/Cars/Daewoo",
                    "HasClassifieds": true
                },
                {
                    "Name": "Daihatsu",
                    "Number": "0001-0268-0285-",
                    "Path": "/Trade-Me-Motors/Cars/Daihatsu",
                    "HasClassifieds": true
                },
                {
                    "Name": "Daimler",
                    "Number": "0001-0268-7080-",
                    "Path": "/Trade-Me-Motors/Cars/Daimler",
                    "HasClassifieds": true
                },
                {
                    "Name": "Dodge",
                    "Number": "0001-0268-0287-",
                    "Path": "/Trade-Me-Motors/Cars/Dodge",
                    "HasClassifieds": true
                },
                {
                    "Name": "DS Automobiles",
                    "Number": "0001-0268-5680-",
                    "Path": "/Trade-Me-Motors/Cars/DS-Automobiles",
                    "HasClassifieds": true
                },
                {
                    "Name": "Ferrari",
                    "Number": "0001-0268-0290-",
                    "Path": "/Trade-Me-Motors/Cars/Ferrari",
                    "HasClassifieds": true
                },
                {
                    "Name": "Fiat",
                    "Number": "0001-0268-0291-",
                    "Path": "/Trade-Me-Motors/Cars/Fiat",
                    "HasClassifieds": true
                },
                {
                    "Name": "Ford",
                    "Number": "0001-0268-0292-",
                    "Path": "/Trade-Me-Motors/Cars/Ford",
                    "Subcategories": [
                        {
                            "Name": "Category 10007",
                            "Number": "0001-0268-0292-10007-",
                            "Path": "/Trade-Me-Motors/Cars/Ford/Category-10007",
                            "HasClassifieds": true
                        }
                    ],
                    "HasClassifieds": true
                },
                {
                    "Name": "Foton",
                    "Number": "0001-0268-9971-",
                    "Path": "/Trade-Me-Motors/Cars/Foton",
                    "HasClassifieds": true
                },
                {
                    "Name": "Geely",
                    "Number": "0001-0268-9529-",
                    "Path": "/Trade-Me-Motors/Cars/Geely",
                    "HasClassifieds": true
                },
                {
                    "Name": "GMC",
                    "Number": "0001-0268-9975-",
                    "Path": "/Trade-Me-Motors/Cars/GMC",
                    "HasClassifieds": true
                },
                {
                    "Name": "Great Wall",
                    "Number": "0001-0268-9162-",
                    "Path": "/Trade-Me-Motors/Cars/Great-Wall",
                    "HasClassifieds": true
                },
                {
                    "Name": "Holden",
                    "Number": "0001-0268-0297-",
                    "Path": "/Trade-Me-Motors/Cars/Holden",
                    "HasClassifieds": true
                },
                {
                    "Name": "Honda",
                    "Number": "0001-0268-0298-",
                    "Path": "/Trade-Me-Motors/Cars/Honda",
                    "HasClassifieds": true
                },
                {
                    "Name": "Hummer",
                    "Number": "0001-0268-1703-",
                    "Path": "/Trade-Me-Motors/Cars/Hummer",
                    "HasClassifieds": true
                },
                {
                    "Name": "Hyundai",
                    "Number": "0001-0268-0300-",
                    "Path": "/Trade-Me-Motors/Cars/Hyundai",
                    "HasClassifieds": true
                },
                {
                    "Name": "Isuzu",
                    "Number": "0001-0268-0301-",
                    "Path": "/Trade-Me-Motors/Cars/Isuzu",
                    "HasClassifieds": true
                },
                {
                    "Name": "Iveco",
                    "Number": "0001-0268-5677-",
                    "Path": "/Trade-Me-Motors/Cars/Iveco",
                    "HasClassifieds": true
                },
                {
                    "Name": "Jaguar",
                    "Number": "0001-0268-0302-",
                    "Path": "/Trade-Me-Motors/Cars/Jaguar",
                    "HasClassifieds": true
                },
                {
                    "Name": "Jeep",
                    "Number": "0001-0268-0304-",
                    "Path": "/Trade-Me-Motors/Cars/Jeep",
                    "HasClassifieds": true
                },
                {
                    "Name": "Kia",
                    "Number": "0001-0268-0305-",
                    "Path": "/Trade-Me-Motors/Cars/Kia",
                    "HasClassifieds": true
                },
                {
                    "Name": "Lamborghini",
                    "Number": "0001-0268-7013-",
                    "Path": "/Trade-Me-Motors/Cars/Lamborghini",
                    "HasClassifieds": true
                },
                {
                    "Name": "Land Rover",
                    "Number": "0001-0268-0306-",
                    "Path": "/Trade-Me-Motors/Cars/Land-Rover",
                    "HasClassifieds": true
                },
                {
                    "Name": "LDV",
                    "Number": "0001-0268-9974-",
                    "Path": "/Trade-Me-Motors/Cars/LDV",
                    "HasClassifieds": true
                },
                {
                    "Name": "Lexus",
                    "Number": "0001-0268-0307-",
                    "Path": "/Trade-Me-Motors/Cars/Lexus",
                    "HasClassifieds": true
                },
                {
                    "Name": "Lotus",
                    "Number": "0001-0268-0308-",
                    "Path": "/Trade-Me-Motors/Cars/Lotus",
                    "HasClassifieds": true
                },
                {
                    "Name": "Mahindra",
                    "Number": "0001-0268-9973-",
                    "Path": "/Trade-Me-Motors/Cars/Mahindra",
                    "HasClassifieds": true
                },
                {
                    "Name": "Maserati",
                    "Number": "0001-0268-0309-",
                    "Path": "/Trade-Me-Motors/Cars/Maserati",
                    "HasClassifieds": true
                },
                {
                    "Name": "Mazda",
                    "Number": "0001-0268-0310-",
                    "Path": "/Trade-Me-Motors/Cars/Mazda",
                    "HasClassifieds": true
                },
                {
                    "Name": "McLaren",
                    "Number": "0001-0268-5605-",
                    "Path": "/Trade-Me-Motors/Cars/McLaren",
                    "HasClassifieds": true
                },
                {
                    "Name": "Mercedes-Benz",
                    "Number": "0001-0268-0311-",
                    "Path": "/Trade-Me-Motors/Cars/MercedesBenz",
                    "HasClassifieds": true
                },
                {
                    "Name": "MG",
                    "Number": "0001-0268-0312-",
                    "Path": "/Trade-Me-Motors/Cars/MG",
                    "HasClassifieds": true
                },
                {
                    "Name": "MINI",
                    "Number": "0001-0268-0313-",
                    "Path": "/Trade-Me-Motors/Cars/MINI",
                    "HasClassifieds": true
                },
                {
                    "Name": "Mitsubishi",
                    "Number": "0001-0268-0314-",
                    "Path": "/Trade-Me-Motors/Cars/Mitsubishi",
                    "HasClassifieds": true
                },
                {
                    "Name": "Morgan",
                    "Number": "0001-0268-5606-",
                    "Path": "/Trade-Me-Motors/Cars/Morgan",
                    "HasClassifieds": true
                },
                {
                    "Name": "Morris",
                    "Number": "0001-0268-0315-",
                    "Path": "/Trade-Me-Motors/Cars/Morris",
                    "HasClassifieds": true
                },
                {
                    "Name": "Nissan",
                    "Number": "0001-0268-0316-",
                    "Path": "/Trade-Me-Motors/Cars/Nissan",
                    "HasClassifieds": true
                },
                {
                    "Name": "Opel",
                    "Number": "0001-0268-0317-",
                    "Path": "/Trade-Me-Motors/Cars/Opel",
                    "HasClassifieds": true
                },
                {
                    "Name": "Peugeot",
                    "Number": "0001-0268-0318-",
                    "Path": "/Trade-Me-Motors/Cars/Peugeot",
                    "HasClassifieds": true
                },
                {
                    "Name": "Pontiac",
                    "Number": "0001-0268-4153-",
                    "Path": "/Trade-Me-Motors/Cars/Pontiac",
                    "HasClassifieds": true
                },
                {
                    "Name": "Porsche",
                    "Number": "0001-0268-0320-",
                    "Path": "/Trade-Me-Motors/Cars/Porsche",
                    "HasClassifieds": true
                },
                {
                    "Name": "Ram",
                    "Number": "0001-0268-5681-",
                    "Path": "/Trade-Me-Motors/Cars/Ram",
                    "HasClassifieds": true
                },
                {
                    "Name": "Renault",
                    "Number": "0001-0268-0325-",
                    "Path": "/Trade-Me-Motors/Cars/Renault",
                    "HasClassifieds": true
                },
                {
                    "Name": "Riley",
                    "Number": "0001-0268-5679-",
                    "Path": "/Trade-Me-Motors/Cars/Riley",
                    "HasClassifieds": true
                },
                {
                    "Name": "Rolls-Royce",
                    "Number": "0001-0268-0326-",
                    "Path": "/Trade-Me-Motors/Cars/RollsRoyce",
                    "HasClassifieds": true
                },
                {
                    "Name": "Rover",
                    "Number": "0001-0268-0327-",
                    "Path": "/Trade-Me-Motors/Cars/Rover",
                    "HasClassifieds": true
                },
                {
                    "Name": "Saab",
                    "Number": "0001-0268-0328-",
                    "Path": "/Trade-Me-Motors/Cars/Saab",
                    "HasClassifieds": true
                },
                {
                    "Name": "Seat",
                    "Number": "0001-0268-9977-",
                    "Path": "/Trade-Me-Motors/Cars/Seat",
                    "HasClassifieds": true
                },
                {
                    "Name": "Skoda",
                    "Number": "0001-0268-5583-",
                    "Path": "/Trade-Me-Motors/Cars/Skoda",
                    "HasClassifieds": true
                },
                {
                    "Name": "Smart",
                    "Number": "0001-0268-5584-",
                    "Path": "/Trade-Me-Motors/Cars/Smart",
                    "HasClassifieds": true
                },
                {
                    "Name": "Ssangyong",
                    "Number": "0001-0268-0331-",
                    "Path": "/Trade-Me-Motors/Cars/Ssangyong",
                    "HasClassifieds": true
                },
                {
                    "Name": "Subaru",
                    "Number": "0001-0268-0332-",
                    "Path": "/Trade-Me-Motors/Cars/Subaru",
                    "HasClassifieds": true
                },
                {
                    "Name": "Suzuki",
                    "Number": "0001-0268-0333-",
                    "Path": "/Trade-Me-Motors/Cars/Suzuki",
                    "HasClassifieds": true
                },
                {
                    "Name": "Tesla",
                    "Number": "0001-0268-5607-",
                    "Path": "/Trade-Me-Motors/Cars/Tesla",
                    "HasClassifieds": true
                },
                {
                    "Name": "Toyota",
                    "Number": "0001-0268-0334-",
                    "Path": "/Trade-Me-Motors/Cars/Toyota",
                    "HasClassifieds": true
                },
                {
                    "Name": "Triumph",
                    "Number": "0001-0268-0335-",
                    "Path": "/Trade-Me-Motors/Cars/Triumph",
                    "HasClassifieds": true
                },
                {
                    "Name": "TVR",
                    "Number": "0001-0268-5678-",
                    "Path": "/Trade-Me-Motors/Cars/TVR",
                    "HasClassifieds": true
                },
                {
                    "Name": "Vauxhall",
                    "Number": "0001-0268-9972-",
                    "Path": "/Trade-Me-Motors/Cars/Vauxhall",
                    "HasClassifieds": true
                },
                {
                    "Name": "Volkswagen",
                    "Number": "0001-0268-0336-",
                    "Path": "/Trade-Me-Motors/Cars/Volkswagen",
                    "HasClassifieds": true
                },
                {
                    "Name": "Volvo",
                    "Number": "0001-0268-0337-",
                    "Path": "/Trade-Me-Motors/Cars/Volvo",
                    "HasClassifieds": true
                },
                {
                    "Name": "Other",
                    "Number": "0001-0268-1492-",
                    "Path": "/Trade-Me-Motors/Cars/Other",
                    "HasClassifieds": true
                }
            ],
            "HasClassifieds": true
        };
        this.models = [{
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
    FormComponent = __decorate([
        core_1.Component({
            selector: 'assessor-form',
            templateUrl: 'assessor-form.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map