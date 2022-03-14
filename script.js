document
.querySelector("#word")
.addEventListener("input", function countWord() {
    let res = [];
    let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    str.map((s) => {
        let trimStr = s.trim() ;
        if (trimStr.length > 0 ) {
            res.push(trimStr);
        }
    });
    document.querySelector("#words").innerText = res.length;
    document.querySelector("#characters").innerText = this.value.length
})
