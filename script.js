// slider
let sliderItems = document.querySelectorAll('.slider-cover');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + sliderItems.length) % sliderItems.length;
}

function hideItem(direction) {
	isEnabled = false;
	sliderItems[currentItem].classList.add(direction);
	sliderItems[currentItem].addEventListener('animationend', function() {
		this.classList.remove('js-slide-active', direction);
	});
}

function showItem(direction) {
	sliderItems[currentItem].classList.add('js-slide-next', direction);
	sliderItems[currentItem].addEventListener('animationend', function() {
		this.classList.remove('js-slide-next', direction);
		this.classList.add('js-slide-active');
    changeArrowColor();
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function changeArrowColor(direction) {
  switch (currentItem) {
    case 0:
      document.querySelector('.slider-button-back').classList.remove('slider-button-back-bg-2');
      document.querySelector('.slider-button-forward').classList.remove('slider-button-forward-bg-2');
      document.querySelector('.slider-button-back').classList.add('slider-button-back-bg-1');
      document.querySelector('.slider-button-forward').classList.add('slider-button-forward-bg-1');
      break;
    case 1:
      document.querySelector('.slider-button-back').classList.remove('slider-button-back-bg-1');
      document.querySelector('.slider-button-forward').classList.remove('slider-button-forward-bg-1');
      document.querySelector('.slider-button-back').classList.add('slider-button-back-bg-2');
      document.querySelector('.slider-button-forward').classList.add('slider-button-forward-bg-2');
      break;
  }
}

document.querySelector('.slider-button-back').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.slider-button-forward').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//phone button
let isVerticalPhoneOn = true;
let isHorizontalPhoneOn = true;

const verticalPhoneScreen = document.querySelector('.phone-screen-vertical');
const horizontalPhoneScreen = document.querySelector('.phone-screen-horizontal');

document.querySelector('.js-vertical-phone-button').addEventListener('click', function() {
	if (isVerticalPhoneOn) {
    isVerticalPhoneOn = false;
    verticalPhoneScreen.classList.remove('phone-img-vertical-bg');
	}
  else {
    isVerticalPhoneOn = true;
    verticalPhoneScreen.classList.add('phone-img-vertical-bg');
  }
});

document.querySelector('.js-horizontal-phone-button').addEventListener('click', function() {
  if (isHorizontalPhoneOn) {
    isHorizontalPhoneOn = false;
    horizontalPhoneScreen.classList.remove('phone-img-horizontal-bg');
	}
  else {
    isHorizontalPhoneOn = true;
    horizontalPhoneScreen.classList.add('phone-img-horizontal-bg');
  }
});

//navigation
const navMenuItems = document.querySelectorAll('.nav-menu-item-link');

function removeSelectedNavMenuItems() {
  navMenuItems.forEach((item, i) => {
    item.classList.remove('js-nav-menu-item-selected');
  });
}

function addSelectedNavMenuItem(clickedItem) {
  clickedItem.classList.add('js-nav-menu-item-selected');
}

document.querySelector('.nav-menu').addEventListener('click', (e) => {
  let clickedNavMenuItem = e.target;
  if (clickedNavMenuItem.classList.contains('nav-menu-item-link')) {
    removeSelectedNavMenuItems();
    addSelectedNavMenuItem(clickedNavMenuItem);
  }
})

//portfolio images
const portfolioImagesList = document.querySelector('.portfolio-images-list');
const portfolioImages = document.querySelectorAll('.portfolio-images-list-item-link');

function removeSelectedPortfolioImage() {
  portfolioImages.forEach((item, i) => {
    item.classList.remove('js-portfolio-image-selected');
  });
}

function addSelectedPortfolioImage(clickedPortfolioImage) {
  clickedPortfolioImage.classList.add('js-portfolio-image-selected');
}

document.querySelector('.portfolio-images-list').addEventListener('click', (e) => {
  let clickedPortfolioImage = e.target;
  if (clickedPortfolioImage.classList.contains('portfolio-images-list-item-link')) {
    if (clickedPortfolioImage.classList.contains('js-portfolio-image-selected')) {
        removeSelectedPortfolioImage();
    }
    else {
      removeSelectedPortfolioImage();
      addSelectedPortfolioImage(clickedPortfolioImage);
    }
  }
})

//portfolio tags
const portfolioTags = document.querySelectorAll('.portfolio-tags-list-item-link');
const portfolioImagesListItems = document.querySelectorAll('.portfolio-images-list-item');
const portfolioAllTag = document.getElementById('portfolio-tag-all');
const portfolioWebDesignTag = document.getElementById('portfolio-tag-web-design');
const portfolioGraphicDesignTag = document.getElementById('portfolio-tag-graphic-design');
const portfolioArtworkTag = document.getElementById('portfolio-tag-artwork');

function removePortfolioTagSelected() {
  portfolioTags.forEach((item, i) => {
    item.classList.remove('js-portfolio-tag-selected');
  });
}

function addPortfolioTagSelected(clickedItem) {
  clickedItem.classList.add('js-portfolio-tag-selected');
}

document.querySelector('.portfolio-tags-list').addEventListener('click', (e) => {
  let clickedPortfolioTag = e.target;
  let portfolioImagesOld = document.querySelectorAll('.portfolio-images-list-item');

  if (clickedPortfolioTag.classList.contains('portfolio-tags-list-item-link')) {
    removePortfolioTagSelected();
    addPortfolioTagSelected(clickedPortfolioTag);
  }
  switch (clickedPortfolioTag) {
    case portfolioAllTag:
      portfolioImagesOld.forEach((item, i) => {
        portfolioImagesList.removeChild(item);
      });
      portfolioImagesListItems.forEach((item, i) => {
        portfolioImagesList.appendChild(portfolioImagesListItems[i]);
      });
      break;
    case portfolioWebDesignTag:
      portfolioImagesOld.forEach((item, i) => {
        portfolioImagesList.removeChild(item);
      });
      portfolioImagesListItems.forEach((item, i) => {
        portfolioImagesList.appendChild(portfolioImagesListItems[(i + 1) % portfolioImagesListItems.length]);
      });
      break;
    case portfolioGraphicDesignTag:
      portfolioImagesOld.forEach((item, i) => {
        portfolioImagesList.removeChild(item);
      });
      portfolioImagesListItems.forEach((item, i) => {
        portfolioImagesList.appendChild(portfolioImagesListItems[(i + 5) % portfolioImagesListItems.length]);
      });
      break;
    case portfolioArtworkTag:
      portfolioImagesOld.forEach((item, i) => {
        portfolioImagesList.removeChild(item);
      });
      portfolioImagesListItems.forEach((item, i) => {
        portfolioImagesList.appendChild(portfolioImagesListItems[(i + 9) % portfolioImagesListItems.length]);
      });
      break;
  }
})

// quote form
document.querySelector('.quote-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const formGetAQouteSubjectText = document.getElementById('form-quote-subject').value || "Без темы";
  const formGetAQouteDescriptionText = document.getElementById('form-quote-description').value || "Без описания";

  let messageText = 'Письмо отправлено';

  if (formGetAQouteSubjectText !== "Без темы") {
    messageText += `\n\rТема: ${formGetAQouteSubjectText}`
  }
  else messageText += `\n\r${formGetAQouteSubjectText}`;

  if (formGetAQouteDescriptionText !== "Без описания") {
    messageText += `\n\rТема: ${formGetAQouteDescriptionText}`
  }
  else messageText += `\n\r${formGetAQouteDescriptionText}`;

  alert(messageText);
});
