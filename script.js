
let imgBox = document.getElementById('imgBox');
let qrCode = document.getElementById('qrCode');
let qrText = document.getElementById('qrText');

function generateQRCode() {
    if (qrText.value.length > 0) {
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        imgBox.style.display = "none";
        qrText.classList.add("error");
        qrText.style.borderColor = "red";
        qrText.value = "Enter Valid URL or Text";
        qrText.style.color = "red";
        setTimeout(() => {
            qrText.style.borderColor = "#000";
            qrText.value = "";
            qrText.style.color = "#000";
        }, 1500);

        // refresh webpage
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}
    