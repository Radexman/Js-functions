// ========================================================== Functions ================================================================= //
// Functions can take arguments and parameters do make calculations
// If we want to use function output we need to return it's value

function calculateSizes(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}

let areaOne = calculateSizes(10, 5, 2)[0];
let volumeOne = calculateSizes(10, 5, 2)[1];
console.log(areaOne);
console.log(volumeOne);

// ============================================================ Objects ================================================================ //
// Objects are groupings of variables and functions
// In Objects Variables are called Proprieties and Functions are called Methods


// DOM Elements
const hotelNameEl = document.querySelector('#hotelNameEl');
const hotelRoomsEl = document.querySelector('#hotelRoomsEl');
const hotelBookedRoomsEl = document.querySelector('#hotelBookedRoomsEl');
const hotelRoomTypesEl = document.querySelector('#hotelRoomTypesEl');
const hotelAvialableRoomsEl = document.querySelector('#hotelAvialableRoomsEl');

// Object Hotel
const hotel = {
    name: 'Quay',
    rooms: 150,
    booked: 132,
    gym: true,
    pool: false,
    roomTypes: [
        'single',
        'double',
        'triple',
        'suite'
    ],
    checkAvialability: function() {
        return hotel.rooms - hotel.booked;
    }
};

function Car(brand, power, year, ABS){
    this.brand = brand;
    this.power = power;
    this.year = year;
    this.ABS = ABS;
};

let BMW = new Car('BMW', '340KM', 1996, false);
let Bugatti = new Car('Bugatti', '900KM', 2016, true);

// Hotel Object Proprieties
let hotelName = hotel.name;
let hotelRooms = hotel.rooms;
let hotelBookedRooms = hotel.booked;
let hotelRoomTypes = hotel.roomTypes;
let aviability = 'Rooms avialable in ' + hotel.name + ': ';

// Displaying Proprieties in DOM
hotelNameEl.textContent+= hotelName;
hotelRoomsEl.textContent+= hotelRooms;
hotelBookedRoomsEl.textContent+= hotelBookedRooms;
hotelRoomTypesEl.textContent+= hotelRoomTypes;
hotelAvialableRoomsEl.textContent = aviability + hotel.checkAvialability();