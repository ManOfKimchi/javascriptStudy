export default function Clock({ $app, initialState, onFormat }) {
    this.state = initialState;

    this.$clock = document.createElement("h2");
    this.$id = "clock";
    this.$clock.className = "clock";
    this.$clock.dataset.format = "HH:mm:ss";
    $app.appendChild(this.$clock);
    // <h2 id="clock" class="clock">00:00:00</h2>

    this.$clock.addEventListener("click", (e) => {
        const clock = e.target.closest(".clock");
        if (clock) {
            const format =
                clock.dataset.format === "HH:mm:ss" ? "yy-MM-DD" : "HH:mm:ss";
            clock.dataset.format = format;
            onFormat(format);
        }
    });

    this.setState = ({ format, name }) => {
        this.state = {
            ...this.state,
            format,
            name,
        };
        this.render();
    };

    this.printDate = (date, format) => {
        const h = String(date.getHours()).padStart(2, "0");
        const m = String(date.getMinutes()).padStart(2, "0");
        const s = String(date.getSeconds()).padStart(2, "0");
        if (format === "HH:mm:ss") {
            this.$clock.innerText = `${h}:${m}:${s}`;
        } else if (format === "yy-MM-DD") {
            const yy = String(new Date().getFullYear())
                .slice(2)
                .padStart(2, "0");
            const MM = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(new Date().getDate()).padStart(2, "0");
            const day = this.state.day[date.getDay()];
            this.$clock.innerText = `${yy}-${MM}-${dd} ${day} ${h}:${m}:${s}`;
        }
    };

    this.render = () => {
        if (this.timer) clearInterval(this.timer);
        if (!this.state.name) {
            this.$clock.textContent = "";
            return;
        }
        this.printDate(new Date(), this.state.format);
        this.timer = setInterval(
            () => this.printDate(new Date(), this.state.format),
            1000,
        );
    };
    this.render();
}
