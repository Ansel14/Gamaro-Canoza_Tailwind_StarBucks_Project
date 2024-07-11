const tabs = document.querySelectorAll(".menu__items");
const items = document.querySelectorAll(".menu__details");
const backs = document.querySelectorAll(".menu__back");
// const menu = document.querySelector("menu__tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeItems = document.querySelector(`#${tab.id}-content`);
    removeActiveItems();
    activeItems.classList.add("active");
  });
});

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
    const menu = document.querySelector("menu__tab");
    menu.classList.add("active");
  });
});
