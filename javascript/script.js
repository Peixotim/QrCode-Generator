const all = document.querySelector(".all");
const genBtn = document.querySelector("#generate-btn");
const qrInput = document.querySelector("#qr-input");
const qrImage = document.querySelector("#qr-image");
const qrContainer = document.querySelector(".qr-code");

genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // Obtém o valor do input sem espaços extras

    if (!qrValue) {
        alert("Por favor, insira um texto ou URL.");
        return;
    }

    // API do QuickChart para gerar QR Code
    let qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrValue)}&size=200`;

    qrImage.src = qrUrl;

    qrImage.onload = () => {
        all.classList.add("active");
        qrContainer.style.opacity = "1";
        qrContainer.style.pointerEvents = "auto";
    };

    qrImage.onerror = () => {
        alert("Erro ao carregar QR Code. Tente novamente.");
    };
});
