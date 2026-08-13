const filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    exposure: {
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
        value: 0,
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

const filtersDiv=document.querySelector(".filters");
function createFilter(name,value, min,max){
    const div=document.createElement("div");
    div.innerHTML = `<label for= "${name}" >${name}</label>
            <input name="${name}" type="range" min="${min}" max="${max}" value="${value}">`
    filtersDiv.appendChild(div);
}

Object.keys(filters).forEach(filter=>{
    name=filter;
    min = filters[filter].min;
    max = filters[filter].max;
    value = filters[filter].value;

    createFilter(name,value,min,max);
})