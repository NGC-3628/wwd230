// script.js
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/add.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/bagpipes.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/bay.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/boil.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/boomerang.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/can-tin.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/cave.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/cliff.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/coast.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/cover.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/dip.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/freeze.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/gum.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/iceberg.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/increase.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/jar-crystal.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/leather-case.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/pinata.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/place.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/pour.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/press.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/pull.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/rainforest.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/reduce.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/remove.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/rubber-%20tube.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/silk-bag.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/sneeze.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/solar%20power.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/stir.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/stream.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/the%20environment.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/the%20planet.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/valley.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/volcano.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/waste.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/waterfall.png",
        "https://ngc-3628.github.io/wwd230/other%20projects/images-loteria/jog.png"
    ];

    const lotteryContainer = document.querySelector("#lottery-container");

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function createLoteriaCard() {
        const shuffledImages = shuffle(images).slice(0, 9); // Tomamos 9 imágenes aleatorias
        for (const imgSrc of shuffledImages) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Imagen de la lotería";
            img.width = 150;
            img.height = 150;
            img.style.margin = "10px";
            lotteryContainer.appendChild(img);
        }
    }

    createLoteriaCard();
});