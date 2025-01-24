import React from "react";

function SearchBar() {
    return (
        <div className="flex gap-4 my-10 justify-center px-10">
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Título da vaga</option>
                <option value="ios-developer">iOS Developer</option>
                <option value="frontend-developer">Front-end Developer</option>
                <option value="backend-developer">Back-end Developer</option>
                <option value="android-developer">Android Developer</option>
                <option value="developer-advocate">Developer Advocate</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Carga horária</option>
                <option value="full-time">Tempo Integral</option>
                <option value="part-time">Tempo Parcial</option>
                <option value="contract">Contrato PJ</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Local</option>
                <option value="remote">Remoto</option>
                <option value="in-office">Presencial</option>
                <option value="hybrid">Híbrido</option>
            </select>
            <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="" disabled hidden selected>Experiência</option>
                <option value="fresher">Sem Experiência</option>
                <option value="junior-level">Nível Junior</option>
                <option value="mid-level">Nível Intermediário</option>
                <option value="senior-level">Nível Senior</option>
            </select>
            <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md">Buscar</button>
        </div>
    )
}
export default SearchBar;