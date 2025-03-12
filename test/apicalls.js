option = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Test 4",
        description: "If it works AGAIN you will be seeing this ALSO on Atlas",
        status: "Pls Workx2!"
    })
}

fetch("http://localhost:3000/tasks", option)
    .then(res => res.text())
    .then(js => console.log(js))