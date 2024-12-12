
window.onload = function () {
    var form = document.querySelector('.elementor-form');
    if (form) {
        form.onsubmit = function (event) {
            // Field selectors
            var phoneField = form.querySelector('.iti__tel-input');
            var selectedCountry = form.querySelector('.iti__selected-country');

            console.log('Phone Field:', phoneField);
            console.log('Selected Country:', selectedCountry);

            // If selectedCountry exists, retrieve data-dial-code
            var ddiCode = selectedCountry ? selectedCountry.getAttribute('title') : '';
            ddiCode = ddiCode.split('+')[1]
            console.log('DDI Code:', ddiCode);

            if (phoneField && ddiCode) {
                var phone = phoneField.value.replace(/[^0-9]/g, '');
				phone = phone.split(ddiCode)[1]
                var formattedValue = ddiCode + '-' + phone;

                console.log('Formatted Value:', formattedValue);

                // Assign the value to the hidden field
                phoneField.value = formattedValue;

                console.log('Phone Field Value After Assignment:', phoneField.value);
            } else {
                console.error('One of the fields is missing or invalid.');
            }
        };
    } else {
        console.error('Form not found.');
    }
};
