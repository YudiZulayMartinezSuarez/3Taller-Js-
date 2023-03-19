let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioTeams = document.querySelector("#myFormularioTeams");
let myFormularioPersonas = document.querySelector("#myFormularioPersonas");
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap");
let myFormularioTrainers  = document.querySelector("#myFormularioTrainers");
let myFormulariocampers  = document.querySelector("#myFormulariocampers");
let myFormularioNiveles  = document.querySelector("#myFormularioNiveles");
let myFormularioTecnologia  = document.querySelector("#myFormularioTecnologia");
let campus = {};



myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], Niveles:[], Roadmap:[], Teams:[], Tecnologia:[]};
    listaSedes("[name='sede']");
    listaSedes("[name='sedeTrainers']");
    listaSedes("[name='sedeRoadmap']");
    listaSedes("[name='sedeNiveles']");
    listaSedes("[name='sedeTeams']");
    listaSedes("[name='sedeTecnologia']");
    myFormularioCampus.reset();

});

let listaSedes = (ubicacion)=>{
    let opciones = document.querySelector(ubicacion);
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
        <option value="${val}">${val}</option>
        `);
        
    }
}




myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
});

myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTrainers;
    delete data.sede;
    campus[`${sede}`]["Trainers"].unshift(data);
    console.log(campus);
    myFormularioTrainers.reset();
});

myFormularioTeams.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTeams;
    delete data.sede;
    campus[`${sede}`]["Teams"].unshift(data);
    console.log(campus);
    myFormularioTeams.reset();
})

myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeNiveles;
    delete data.sede;
    campus[`${sede}`]["Niveles"].unshift(data);
    console.log(campus);
    myFormularioNiveles.reset();
});
myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeRoadmap;
    delete data.sede;
    campus[`${sede}`]["Roadmap"].unshift(data);
    console.log(campus);
    myFormularioRoadmap.reset();
});

myFormularioTecnologia.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTecnologia;
    delete data.sede;
    campus[`${sede}`]["Tecnologia"].unshift(data);
    console.log(campus);
    myFormularioTecnologia.reset();
});
