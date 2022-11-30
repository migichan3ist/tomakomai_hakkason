document.getElementById("move_point_home").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./point_home.html";
};

document.getElementById("move_exchange").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./exchange.html";
};

document.getElementById("move_skill").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./skill.html"
};

document.getElementById("move_checkin").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./checkin_home.html";
};