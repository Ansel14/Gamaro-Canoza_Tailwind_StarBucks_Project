const tabs = document.querySelectorAll(".menu__items");
const items = document.querySelectorAll(".menu__details");
const backs = document.querySelectorAll(".menu__back");
const menu = document.getElementById("menu__all");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeBackActive();
    removeActiveTab();
    tab.classList.add("active");
    const activeItems = document.querySelector(`#${tab.id}-content`);
    activeItems.scroll(0, 0);
    removeActiveItems();
    activeItems.classList.add("active");
  });
});

function removeBackActive() {
  backs.forEach((back) => {
    menu.classList.remove("active");
  });
}

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveItems() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

backs.forEach((back) => {
  back.addEventListener("click", () => {
    removeActiveTab();
    removeActiveItems();
    const menu = document.getElementById("menu__all");
    menu.classList.add("active");
  });
});
