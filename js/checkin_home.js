document.getElementById("move_home").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./home.html";
};

document.getElementById("move_checkin_comfirm").onclick = function() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    // const userId = params.get("id");
    // location.href = "./money.html?id=" + userId;
    location.href = "./checkin_comfirm.html";
};