class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // adding new method to class to calculate area of rectangle
  get getArea() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle(20, 10);

// calling method
console.log(rect1.getArea);
