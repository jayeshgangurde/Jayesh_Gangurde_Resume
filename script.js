let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letters) => {
        let span = document.createElement("span");
        span.textContent = letters;
        span.className = "letter";
        word.append(span);
    });
});

let currentwordindex = 0;
let maxwordindex = words.length - 1;
words[currentwordindex].style.opacity = "1";

let changetext = () => {
    let currentword = words[currentwordindex];
    let nextword = currentwordindex === maxwordindex ? words[0] : words[currentwordindex + 1];

    Array.from(currentword.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out"
        }, i * 80);
    });
    nextword.style.opacity = "1";
    Array.from(nextword.children).forEach((letter, i) => {
        letter.className = "letter behind"
        setTimeout(() => {
            letter.className = "letter in";

        }, 340 + i * 80);
    });
    currentwordindex = currentwordindex == maxwordindex ? 0 : currentwordindex + 1;
};

changetext();
setInterval(changetext, 3000)

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
    
});


document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    var a = document.createElement('a');
    a.href = 'https://drive.google.com/file/d/1z9VHRid-frKC_hnq7RIEjdFhbnx7rCUG/view?usp=drive_link';
    a.download = 'Jayesh_Gangurde_Resume.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});