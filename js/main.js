const elProductTempalate = document.querySelector("#product-template");
const elProductCardList = document.querySelector("#card-list");
const eladdParrotModal = document.querySelector("#add-parrot-modal");
const elAddModal = new bootstrap.Modal(eladdParrotModal);

const addZero = (date) => {
    if (date < 10) {
        return "0" + date;
    }
    return date;
}

const parrotCard = (parrot) => {

    const elProductCard = elProductTempalate.cloneNode(true).content;

    const elParrotImg = elProductCard.querySelector(".parrot-img")
    elParrotImg.setAttribute("src", parrot.img);

    const elParrotTitle = elProductCard.querySelector(".parrot-title");
    elParrotTitle.textContent = parrot.title;

    const elParrotPrice = elProductCard.querySelector(".parrot-price")
    elParrotPrice.textContent = "$" + parrot.price;

    const elParrotSize = elProductCard.querySelector(".parrot-size");
    elParrotSize.textContent = `${parrot.sizes.width}sm x ${parrot.sizes.height}sm`;



    const elDate = new Date(parrot.birthDate);
    const elBirthDate = elProductCard.querySelector(".birth-date");
    elBirthDate.textContent = `${addZero(elDate.getDate())}.${addZero(elDate.getMonth()+1)}.${addZero(elDate.getFullYear())}`;

    const elFeaturesArray = parrot.features.split(",");
    console.log(elFeaturesArray);
    const elParrotFeatures = elProductCard.querySelector(".features-list");
    elFeaturesArray.forEach((features) => {
        const elNewFeatures = document.createElement("li")
        elNewFeatures.setAttribute("class", "feature-item badge bg-primary me-1 mb-1");
        elNewFeatures.textContent = features;
        elParrotFeatures.append(elNewFeatures)
    })

    const elDeleteBtn = elProductCard.querySelector(".delete-btn");
    elDeleteBtn.setAttribute("data-id", parrot.id);

    const elEditBtnId = elProductCard.querySelector(".edit-btn");
    elEditBtnId.setAttribute("data-id", parrot.id);

    return elProductCard;

}

const elCountWrapper = document.querySelector(".count-wrapper");

const renderFunction = (array = products) => {
    elProductCardList.innerHTML = "";
    elCountWrapper.textContent = `Count: ${ array.length}`;
    array.forEach((parrot) => {
        const elNewCard = parrotCard(parrot)
        elProductCardList.append(elNewCard);
    })
}

renderFunction();

const eladdParrotForm = document.querySelector(".add-modal-form");
eladdParrotForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const elFormElements = evt.target.elements;

    const elPArrotTitle = elFormElements[0].value.trim();
    const elParrotImg = elFormElements[1].value.trim();
    const elParrotPrice = +elFormElements[2].value.trim();
    const elParrotBirthDate = elFormElements[3].value.trim();
    const elParrotWidth = +elFormElements[4].value.trim();
    const elParrotHeigth = +elFormElements[5].value.trim();
    const elParrotFeatures = elFormElements[6].value.trim();

    if (elPArrotTitle && elParrotImg && elParrotBirthDate && elParrotWidth > 0 && elParrotHeigth > 0 && elParrotPrice > 0) {
        const newParrot = {
            id: Math.floor(Math.random() * 10),
            title: elPArrotTitle,
            img: elParrotImg,
            price: elParrotPrice,
            birthDate: elParrotBirthDate,
            sizes: {
                width: elParrotWidth,
                height: elParrotHeigth
            },
            isFavorite: false,
            features: elParrotFeatures
        }
        products.unshift(newParrot);
        const newParrotCard = parrotCard(newParrot);
        elProductCardList.prepend(newParrotCard);
        elCountWrapper.textContent = `Count: ${ products.length}`;
    }
    eladdParrotForm.reset();
    elAddModal.hide();
})

const elEditForm = document.querySelector(".edit-modal-form");
const elEditFormTitle = elEditForm.querySelector("#edit-parrot-title");
const elEditFormImg = elEditForm.querySelector("#edit-parrot-img");
const elEditFormPrice = elEditForm.querySelector("#edit-price");
const elEditFormBirthdate = elEditForm.querySelector("#edit-parrot-date");
const elEditFormWidth = elEditForm.querySelector("#edit-parrot_width");
const elEditFormHeight = elEditForm.querySelector("#edit-parrot_height");
const elEditFormFeatures = elEditForm.querySelector("#edit-features");


const elEditModal = document.querySelector("#edit-parrot-modal");
const editParrotModal = new bootstrap.Modal(elEditModal);

elProductCardList.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (evt.target.matches(".delete-btn")) {
        const clickedBtnId = +evt.target.dataset.id;

        const clickedBtnIndex = products.findIndex((parrot) => {
            return parrot.id === clickedBtnId;
        });

        products.splice(clickedBtnIndex, 1);
        renderFunction();
    } else if (evt.target.matches(".edit-btn")) {
        const clickedBtnId = +evt.target.dataset.id;

        const clickedItem = products.find((parrot) => {
            return parrot.id === clickedBtnId;
        });
        elEditFormTitle.value = clickedItem.title;
        elEditFormImg.value = clickedItem.img;
        elEditFormPrice.value = clickedItem.price;
        elEditFormBirthdate.value = clickedItem.birthDate;
        elEditFormWidth.value = clickedItem.sizes.width;
        elEditFormHeight.value = clickedItem.sizes.height;
        elEditFormFeatures.value = clickedItem.features;
        elEditForm.setAttribute("data-editing-id", clickedItem.id);
    } else

    // yangi 
    if (evt.target.matches(".btn-fovorite")) {
        const clickedBtnId = +evt.target.dataset.id;

        const clickedItem = products.find((parrot) => {
            return parrot.id === clickedBtnId;
        });
    }
})

// Edit
elEditForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const editingId = +evt.target.dataset.editingId;
    const elPArrotTitle = elEditFormTitle.value.trim();
    const elParrotImg = elEditFormImg.value.trim();
    const elParrotPrice = +elEditFormPrice.value.trim();
    const elParrotBirthDate = elEditFormBirthdate.value.trim();
    const elParrotWidth = +elEditFormWidth.value.trim();
    const elParrotHeigth = +elEditFormHeight.value.trim();
    const elParrotFeatures = elEditFormFeatures.value.trim();

    if (elPArrotTitle && elParrotImg && elParrotBirthDate && elParrotWidth > 0 && elParrotHeigth > 0 && elParrotPrice > 0) {
        const newParrot = {
            id: editingId,
            title: elPArrotTitle,
            img: elParrotImg,
            price: elParrotPrice,
            birthDate: elParrotBirthDate,
            sizes: {
                width: elParrotWidth,
                height: elParrotHeigth
            },
            isFavorite: false,
            features: elParrotFeatures
        }

        const editingItemIndex = products.findIndex((parrot) => {
            return parrot.id === editingId;
        });

        products.splice(editingItemIndex, 1, newParrot);

        editParrotModal.hide();
        renderFunction();

    }

})


const elParrotFilter = document.querySelector("#filter");

elParrotFilter.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const elementList = evt.target.elements
    const elParrotSearch = elementList.search.value;
    const elFromValue = +elementList.from.value;
    const elToValue = +elementList.to.value;
    const elParrotWidthValue = +elementList.from_width.value;
    const elWidthValue = +elementList.to_width.value;
    const elHeightValue = +elementList.from_height.value;
    const elToHeightValue = +elementList.to_height.value;
    const elSortValue = elementList.sortby.value;



    const elFiltredCards = products.filter((parrot) => {
        return parrot.title.toLowerCase().includes(elParrotSearch.toLowerCase());
    }).filter(parrot => {
        const parrotPrice = +parrot.price;
        return elFromValue ? parrotPrice >= elFromValue : true;
    }).filter(parrot => {
        const parrotPrice = +parrot.price;
        return elToValue > elFromValue ? parrotPrice <= elToValue : true;
    }).filter(parrot => {
        const parrotwidth = +parrot.sizes.width;
        return elParrotWidthValue ? parrotwidth >= elParrotWidthValue : true;
    }).filter(parrot => {
        const parrotwidth = +parrot.sizes.width;
        return elParrotWidthValue < elWidthValue ? parrotwidth <= elWidthValue : true;
    }).filter(parrot => {
        const parrotHeight = +parrot.sizes.height;
        return elHeightValue ? parrotHeight >= elHeightValue : true;
    }).filter(parrot => {
        const parrotHeight = +parrot.sizes.height;
        return elHeightValue < elToHeightValue ? parrotHeight <= elToHeightValue : true;
    }).sort((a, b) => {
        if (elSortValue === "1") {
            if (a.title > b.title) {
                return 1;
            } else if (a.title === b.title) {
                return 0;
            }
            return -1;
        }
        if (elSortValue === "2") {
            return b.price - a.price;
        } else if (elSortValue === "3") {
            return a.price - b.price;
        } else if (elSortValue === "4") {
            return new Date(b.birthDate).getTime() - new Date(a.birthDate).getTime();
        } else if (elSortValue === "5") {
            return new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime();
        }
    });
    renderFunction(elFiltredCards);
})