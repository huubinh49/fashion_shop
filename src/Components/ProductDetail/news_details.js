function plus_rotate(card_header) {
    let my_plus = card_header.querySelector(".plus");
    let my_status = card_header
        .querySelector("a")
        .getAttribute("class");
        // If not animate anylonger get a solid state
    my_plus.onanimationend = () => {
        if (!my_status.includes("collapsed")) 
            my_plus.style.transform = "rotateZ(0)"
        else 
            my_plus.style.transform = "rotateZ(45deg)"

        my_plus
            .classList
            .remove("plus--rotate");
        my_plus
            .classList
            .remove("plus--rotate--reverse");

    }
    // If 
    if (my_status.includes("collapsed")) {
        my_plus
            .classList
            .add("plus--rotate");
    } else {
        my_plus
            .classList
            .add("plus--rotate--reverse");
    }
}

module.exports.plus_rotate = plus_rotate;

