# enum-js
Simple Enum Implementation for Node.js

## Regular Usage
Usage is simple, set up your enum like below:

    var Shape = new Enum([
        "SQUARE",
        "CIRCLE",
        "TRIANGLE"
    ]);

Then use it like you'd expect:

    var myShape = Shape.SQAURE;

You get an extra value for free corresponding to value 0 called **NOT_SET**

You can do comparison and validation like so:

    function isShapeASquare(inputShape) {
        if (!Shape.isValid(inputShape)) {
            return "Invalid Parameter";
        }

        if (inputShape === Shape.SQUARE) {
            return "Yes!";
        }

        return "No...";
    }

You can also add more values to enum on the fly:

    Shape.addValue("CROSS");

Finally, you can turn the value back into the original string by doing:

    Shape.stringify(myShape);

## That's it! Thanks for reading!
