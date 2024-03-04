window.addEventListener("load", function () {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    };
    fetch("/foldery", options).then(response => response.json())
        .then(data => {
            let cialo = this.document.getElementById("body")
            let foldery = Object.keys(data)
            for (const folder of foldery) {
                let folder_div = document.createElement("div")
                folder_div.innerHTML = folder + " \n"
                cialo.appendChild(folder_div)
                for (const pliki of data[folder]) {
                    let pliczek = document.createElement("a")
                    let link = "./" + folder + "/" + pliki
                    pliczek.href = link
                    pliczek.innerHTML = pliki + " \n"
                    folder_div.appendChild(pliczek)
                }
            }
        }
        )
})
