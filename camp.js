
function camp() {
    const container = document.createElement("div");
    container.className = "a4-page";
    container.innerHTML = `
        <h1>மேல்நிலை முதலாம் /இரண்டாம் ஆண்டு பொதுத்தேர்வு-மார்ச்-2025</h1>
        <h1 id="certificateName">வருகை சான்றிதழ்</h1>
        <div class="certificate4">
            <div class="certificate4a">
                <div class="b1"><span id="dt"></span> முதன்மைக் கல்வி அலுவலர் அவர்களின் செயல்முறைகள் ந.க.எண்: <span id="nk"></span></div>
                <div class="b2">நாள்:<span id="date"></span>திரு/திருமதி <span id="name"></span><span id="school"></span></div>
                <div class="b3">அறைக்கண்காணிப்பாளராக<span id="school2"></span>  கீழ்க்கண்ட நாட்களில் பணியாற்றினார் என்று சான்றளிக்கிறேன். </div>
                <div class="b4">மொத்த நாட்கள்:<span id="days"></span></div>
                <div class="b5"><span id="date2"></div>
            </div>
            <div class="signature1">
                <div class="b8">Date : <span id="date"></span></div>
                <div class="b9">Place :<span id="place"></span></div>
            </div>
            <div class="signature">
                <div class="b10">Headmaster</div>
            </div>
        </div>

       
    `;
    document.body.appendChild(container);
}