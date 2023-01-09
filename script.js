"use strict";

const btn = document.querySelector(".btn");
const adviceID = document.querySelector(".num");
const advice = document.querySelector(".advice");

const renderAdvice = function (generatedIDid, generatedAdvice) {
    adviceID.textContent = `#${generatedIDid}`;
    advice.textContent = generatedAdvice;
};

const generateAdvice = function () {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((res) => {
            const { slip } = res;
            renderAdvice(slip.id, slip.advice);
        });
};

window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") generateAdvice();
});

btn.addEventListener("click", generateAdvice);
