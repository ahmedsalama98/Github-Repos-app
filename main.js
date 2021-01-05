let input = document.querySelector(".ropo-head input"),
    repobutton = document.querySelector(".ropo-head button"),
    repodatadiv = document.querySelector(".app-data");


repobutton.onclick = function() {

    if (input.value == "") {
        repodatadiv.innerHTML = ` <span> please write your username </span>`
    } else {
        repodatadiv.innerHTML = "";
        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((respond) => {
                return respond.json()
            })
            .then((repos) => {

                repos.forEach(repo => {


                    let div = document.createElement("div");
                    let divhead = document.createElement("h2");
                    let urllink = document.createElement("a");
                    let strs = document.createElement("span");

                    strs.innerHTML = `<span> ${repo["stargazers_count"]}</span> star`;

                    urllink.textContent = "visit";
                    urllink.setAttribute("target", "_blank");
                    urllink.classList.add("ripo-link");

                    urllink.href = repo["html_url"];
                    divhead.textContent = repo.name;
                    div.appendChild(divhead)
                    div.appendChild(strs)
                    div.appendChild(urllink)

                    repodatadiv.appendChild(div);

                    input.value = "";

                });

            })



    }

}