// ========================================================== Functions ================================================================= //
// Functions can take arguments and parameters do make calculations
// If we want to use function output we need to return it's value

function calculateValues(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}

let areaOne = calculateValues(10, 5, 2)[0];
let volumeOne = calculateValues(10, 5, 2)[1];

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
    name: 'Apart',
    rooms: 150,
    booked: 123,
    gym: true,
    pool: false,
    roomTypes: [
        'single',
        'double',
        'triple',
        'suite'
    ],
    checkAvialability: function() {
        let avialableRooms = hotel.rooms - hotel.booked;
        return avialableRooms;
    }
}

hotel.name = '';

// Hotel Object Proprieties
let hotelName = hotel.name;
let hotelRooms = hotel.rooms;
let hotelBookedRooms = hotel.booked;
let hotelRoomTypes = hotel.roomTypes;
let aviability = hotel.checkAvialability();

// Displaying Proprieties in DOM
hotelNameEl.textContent+= hotelName;
hotelRoomsEl.textContent+= hotelRooms;
hotelBookedRoomsEl.textContent+= hotelBookedRooms;
hotelRoomTypesEl.textContent+= hotelRoomTypes;
hotelAvialableRoomsEl.textContent+= aviability;