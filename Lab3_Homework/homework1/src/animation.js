import React from 'react'

export default function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");
    
    setTimeout(function() {
        activeButton.classList.remove("animation");
    }, 100);
}
