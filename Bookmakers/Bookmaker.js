'use strict';

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(stname, surname, dateOfBirth) {
        this.firstName = stname;
        this.lastName = surname;
        this.dateOfBirth = new Date(dateOfBirth).toDateString();
        this.getData = function () {
            var res = '';
            res = this.firstName + ' ' + this.lastName + ' ' + this.playerYears();
            return res;
        }
        //incl
        this.playerYears = function () {
            var current = new Date().getFullYear();
            var year = new Date(dateOfBirth).getFullYear();
            return current - year;
        }
        //incl
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getData = function (betAmount) {
            var res = '';
            var dude = this.person.getData();
            var initial = this.country.name[0] + this.country.name[this.country.name.length - 1].toUpperCase();
            // var dudeAge = Date() - this.person.dateOfBirth;

            var expectedWinAmount = this.betAmount * this.country.odds + 'eur';
            res = initial + ', ' + expectedWinAmount + ', ' + dude;
            return res
        }
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function () {
            var res = '';
            this.street + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country
            return res
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.getData = function () {
            var res = '';
            var totalAmountOfBets = 0;
            for (var i = 0; i < this.listOfPlayers.length; i++) {
                totalAmountOfBets += this.listOfPlayers.betAmount;
            }
            res = this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', sum of all bets: ' + totalAmountOfBets + 'eur';
            return res
        }
        this.addPlayer = function (x) {
            this.listOfPlayers.push(x);
        }
    }
    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayer = 0;
    }

    // object.freeze(Continent);
    var Continent = {
        ASIA: 'AS',
        EUROPE: 'EU',
        AUSTRALIA: 'AU',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA',
        AFRICA: 'AF'
    }
    //countries
    var Nemacka = new Country('Nemacka', 2, Continent.EUROPE);
    //people
    var Mirko = new Person('Mirko', 'Markovic', '5/5/1990');
    //players
    var player1 = new Player(Mirko, 1000, Nemacka);
    //address
    var location1 = new Address('USA', 'LA', 8600, 'Woodward Ave', 36);
    //
    var MollysPlace = new BettingPlace(location1);

    MollysPlace.addPlayer(player1);


    // console.log(player1.getData());
    console.log(MollysPlace.listOfPlayers[0]);



})();