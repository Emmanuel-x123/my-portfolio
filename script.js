// Targeting the HTML
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.getElementById("side-menu");

// My open tab function
function openTab(event, tabname) {
  // Remove active class from all tab links and contents
  for (let tabLink of tabLinks) {
    tabLink.classList.remove('active');
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }

  // Add active class to selected tab link and content
  event.currentTarget.classList.add('active');
  const selectedTabContent = document.querySelector(`.tab-contents[data-tab-content="${tabname}"]`);
  selectedTabContent.classList.add('active-tab');
}

// my opem and close side-bar function
function openMenu(){
    sideMenu.style.right = '0';
}

function closeMenu(){
    sideMenu.style.right = '-200px';
}






