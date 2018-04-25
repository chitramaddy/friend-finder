//dependencies
var uuid = require("uuid/v4");

module.exports = [
  {
    name: "john",
    photo: "../emerald.jpg",
    scores: [
      5, 4, 4, 5, 4, 4, 4, 4, 4, 5
    ],
    id: uuid()
  },
  {
    name: "michelle",
    photo: "../emerald.jpg",
    scores: [
      5, 3, 3, 5, 3, 3, 3, 3, 3, 5
    ],
    id: uuid()
  },
  {
    name: "maya",
    photo: "../emerald.jpg",
    scores: [
      3, 4, 4, 3, 4, 4, 4, 4, 4, 3
    ],
    id: uuid()
  }
]