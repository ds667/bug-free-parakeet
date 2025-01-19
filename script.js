//Script.js file

function calculateTrigFun() {
    const angleInput = parseFloat(
        document.getElementById("angleInput").value);

    // ParseFloat() returns first number of the parsed value.
    // If first character cannot convert then NaN is returned.
    if (isNaN(angleInput)) {
        document.getElementById("output").innerText =
            "Please enter a valid angle.";
        return;
    }

    // Convert angleInput(degrees into Radians)
    const angleInRadians = angleInput * (Math.PI / 180);

    // Calculate sine value
    const sine = Math.sin(angleInRadians); 

    // Calculate cosine value
    const cosine = Math.cos(angleInRadians); 

    // Calculate tangent value
    const tangent = Math.tan(angleInRadians); 

    // The toFixed(4) method is roundoff the 
    // value up to 4 decimal places
    const outputText = `Sine: ${sine.toFixed(4)}, 
    Cosine: ${cosine.toFixed(4)}, 
    Tangent: ${tangent.toFixed(4)}, 
    Cosecant: ${(1 / sine).toFixed(4)}, 
    Secant: ${(1 / cosine).toFixed(4)},
    Cotangent: ${(1 / tangent).toFixed(4)}`;

    // Dispaly the output
    document.getElementById("output").innerText = outputText;
}
