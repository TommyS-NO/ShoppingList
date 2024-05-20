document.addEventListener("DOMContentLoaded", () => {
	showWelcomeModal();
});

const showWelcomeModal = () => {
	const modal = document.getElementById("welcome-modal");
	const closeButton = document.getElementById("close-welcome");

	modal.style.display = "block";

	closeButton.onclick = () => {
		modal.style.display = "none";
	};
};

const lists = [
	{
		inputId: "product-one",
		countId: "count-one",
		listElementId: "product-one-list",
		array: [],
		type: "simple",
	},
	{
		inputId: "product-two",
		countId: "count-two",
		listElementId: "product-two-list",
		array: [],
		type: "simple",
	},
	{
		inputId: "product-three",
		countId: "count-three",
		listElementId: "product-three-list",
		array: [],
		type: "priced",
		priceId: "product-price",
	},
];

const totSum = document.getElementById("sumProductThree");

const isPositiveNumber = (value) => {
	return /^\d+(\.\d+)?$/.test(value) && Number(value) > 0;
};

const addToList = (listIndex) => {
	const list = lists[listIndex];
	const inputElement = document.getElementById(list.inputId);
	const countElement = document.getElementById(list.countId);
	const inputValue = inputElement.value.trim();
	const countValue = parseInt(countElement.value.trim(), 10);

	if (!inputValue || !countValue || countValue <= 0) {
		showAlert("Mangler innhold eller ugyldig antall");
		return;
	}

	if (list.type === "priced") {
		const priceElement = document.getElementById(list.priceId);
		const priceValue = priceElement.value.trim();

		if (!isPositiveNumber(priceValue)) {
			showAlert("Ukjent Pris. Må være høyere enn 0");
			return;
		}

		list.array.push({
			item: inputValue,
			count: countValue,
			price: Number(priceValue),
		});
		priceElement.value = "";
	} else {
		list.array.push({ item: inputValue, count: countValue });
	}

	inputElement.value = "";
	countElement.value = "";
	viewList(listIndex);
};

const viewList = (listIndex) => {
	const list = lists[listIndex];
	const listElement = document.getElementById(list.listElementId);
	listElement.innerHTML = "";

	list.array.forEach((entry, i) => {
		if (list.type === "priced") {
			listElement.innerHTML += `
        <div class="three">
          ${i + 1}. ${entry.item} (Antall: ${entry.count}) - Pris: ${
						entry.price
					} kr
          <button class="delete-btn" onclick="showDeleteModal(${listIndex}, ${i})">Slett</button>
        </div>`;
		} else {
			listElement.innerHTML += `
        <div class="item">
          ${i + 1}. ${entry.item} (Antall: ${entry.count})
          <button class="delete-btn" onclick="showDeleteModal(${listIndex}, ${i})">Slett</button>
        </div>`;
		}
	});

	if (list.type === "priced") {
		sumAllList();
	}
};

const showAlert = (message) => {
	const alertModal = document.getElementById("alert-modal");
	const alertMessage = document.getElementById("alert-message");
	const closeAlertButton = document.getElementById("close-alert");

	alertMessage.textContent = message;
	alertModal.style.display = "block";

	closeAlertButton.onclick = () => {
		alertModal.style.display = "none";
	};
};

const showDeleteModal = (listIndex, itemIndex) => {
	const modal = document.getElementById("delete-modal");
	const confirmButton = document.getElementById("confirm-delete");
	const cancelButton = document.getElementById("cancel-delete");

	modal.style.display = "block";

	confirmButton.onclick = () => {
		deleteItem(listIndex, itemIndex);
		modal.style.display = "none";
	};

	cancelButton.onclick = () => {
		modal.style.display = "none";
	};
};

const deleteItem = (listIndex, itemIndex) => {
	const list = lists[listIndex];
	list.array.splice(itemIndex, 1);
	showAlert("Poff Borte");
	viewList(listIndex);
};

const sumAllList = () => {
	const list = lists.find((l) => l.type === "priced");
	const total = list.array.reduce(
		(sum, entry) => sum + entry.price * entry.count,
		0,
	);
	totSum.textContent = total;
};
