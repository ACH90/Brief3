let url = per_page=12
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)) 