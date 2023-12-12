const checkboxes = document.querySelectorAll('.check_body input[type="checkbox"]');

let lactChecked;

function handleCheck(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lactChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		})
	}

	lactChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));