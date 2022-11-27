const wallOne = document.querySelector('#wallOne');
const wallTwo = document.querySelector('#wallTwo');

function calculateArea(width, height) {
    area = width * height;
    return area;
}

wallOne.textContent = calculateArea(5, 5);
wallTwo.textContent = calculateArea(10, 5);