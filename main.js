let isOnline = true;

window.onload = function () {
  //   console.table(this);
  //   console.table(ev);

  isOnline = "onLine" in navigator ? navigator.onLine : true;

  let onlineStatusElement = document.getElementById("online-status");

  if (isOnline) {
    onlineStatusElement.classList.remove("offline");
    onlineStatusElement.classList.add("online");
    onlineStatusElement.innerHTML = "Online";
  } else {
    onlineStatusElement.classList.remove("online");
    onlineStatusElement.classList.add("offline");
    onlineStatusElement.innerHTML = "Offline";
  }

  window.addEventListener("online", function () {
    onlineStatusElement.classList.remove("offline");
    onlineStatusElement.classList.add("online");
    onlineStatusElement.innerHTML = "Online changed";
  });

  window.addEventListener("offline", function () {
    onlineStatusElement.classList.remove("online");
    onlineStatusElement.classList.add("offline");
    onlineStatusElement.innerHTML = "Offline change";
  });
};
