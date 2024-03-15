function calculateLove() {
    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (name1 === '' || name2 === '') {
        alert("Please enter both names.");
        return;
    }

    var letters = (name1 + name2).split("");
    var uniqueLetters = [...new Set(letters)];
    var compatibility = (uniqueLetters.length % 10) * 10;

    document.getElementById("result").innerText = "Love Compatibility: " + compatibility + "%";
}
