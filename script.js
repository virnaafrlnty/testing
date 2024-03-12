let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');

        setInterval(() =>{
            let hari = new Date();
            let hh = hari.getHours() * 30;
            let mm = hari.getMinutes() * 6;
            let ss = hari.getSeconds() * 6;
    
            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
            
            // jam
            let jam = document.getElementById('jam');
            let menit = document.getElementById('menit');
            let detik = document.getElementById('detik');
            let ampm = document.getElementById('ampm');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            // mengubah format 24jam ke 12jam
            let format = h >= 12 ? "PM" : "AM";
            
            if (h > 12){
                h = h - 12;
            }

            // tambahkan 0 didepan jika jumlah angka nya 1
            h = (h < 10) ? "0" + h : h
            m = (m < 10) ? "0" + m : m
            s = (s < 10) ? "0" + s : s

            jam.innerHTML = h;
            menit.innerHTML = m;
            detik.innerHTML = s;
            ampm.innerHTML = format;
            
        })


        let body = document.querySelector("body");
        let modeSwitch = body.querySelector(".toggle");

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("light");
        });