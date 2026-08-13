let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
}
let image = null;
const resetBtn = document.querySelector("#reset-btn")
const addImage = document.querySelector('#addImage')
const canvas = document.createElement('canvas');
canvas.classList.add('image-canvas')
canvas.classList.add('main-image')
const downloadButton = document.querySelector("#download")

const left = document.querySelector(".left")
const canvasCtx = canvas.getContext("2d")

const imageInput = document.querySelector('#image-input')
const filtersDiv = document.querySelector(".filters");

function createFilter(name, value, min, max) {
    const div = document.createElement("div");
    div.innerHTML = `<div style="display: flex;justify-content: space-between;">
            <label for= "${name}" >${name}</label>
            <i><p></p></i>
            </div>
            <input name="${name}" type="range" min="${min}" max="${max}" value="${value}">`
    filtersDiv.appendChild(div);
    const input = div.querySelector('input');
    const pTag = div.querySelector('p');
    input.addEventListener("input", (event) => {
        filters[name].value = input.value;
        pTag.innerText = input.value;
        applyFilters();
    })
}

Object.keys(filters).forEach(filter => {
    name = filter;
    min = filters[filter].min;
    max = filters[filter].max;
    value = filters[filter].value;

    createFilter(name, value, min, max);
})

imageInput.addEventListener("change", e => {
    const file = e.target.files[0];
    console.log(file)
    image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        addImage.innerHTML = "";

        canvas.width = image.width;
        canvas.height = image.height;
        canvasCtx.drawImage(image, 0, 0)
        const dropShadow = document.createElement('canvas');
        dropShadow.classList.add('image-canvas');
        dropShadow.classList.add('blur-shadow')
        const dropShadowCtx = dropShadow.getContext("2d")
        dropShadow.width = image.width;
        dropShadow.height = image.height;
        dropShadowCtx.drawImage(image, 0, 0)
        console.log(canvas, dropShadow)
        left.prepend(dropShadow);
        left.prepend(canvas);

    }
})

function applyFilters() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
    canvasCtx.filter = `
    brightness(${filters.brightness.value}%) 
    contrast(${filters.contrast.value}%)
    saturate(${filters.saturation.value}%)
    hue-rotate(${filters.hueRotation.value}deg)
    grayscale(${filters.grayscale.value}%)
    sepia(${filters.sepia.value}%)
    opacity(${filters.opacity.value}%)
    invert(${filters.invert.value}%)
    `;
    canvasCtx.drawImage(image, 0, 0)
}
resetBtn.addEventListener("click", () => {
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
    }
    applyFilters();
    filtersDiv.innerHTML = "";
    Object.keys(filters).forEach(filter => {
        name = filter;
        min = filters[filter].min;
        max = filters[filter].max;
        value = filters[filter].value;

        createFilter(name, value, min, max);
    })


})
downloadButton.addEventListener("click", () => {
    const link = document.createElement("a")
    link.download = "edited_image.png";
    link.href = canvas.toDataURL();
    link.click()
})