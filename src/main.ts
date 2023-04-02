import './style.css'

(document.querySelector("#isGay") as HTMLDivElement).addEventListener("onmouseenter", (e) => {
    (e.target as HTMLDivElement).innerText = 'Yes, as all things should be.';
});

(document.querySelector("#isGay") as HTMLDivElement).addEventListener("onmouseleave", (e) => {
    (e.target as HTMLDivElement).innerText = 'Am I gay too?';
});