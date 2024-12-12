
window.onload = function () {
    var form = document.querySelector('.elementor-form');
    if (form) {
        form.onsubmit = function (event) {
            // Field selectors
            var phoneField = form.querySelector('.iti__tel-input');
            var hiddenField = form.querySelector('#form-field-form_formatted_phone'); 
            var selectedCountry = form.querySelector('.iti__selected-country');

            console.log('Phone Field:', phoneField);
            console.log('Hidden Field:', hiddenField);
            console.log('Selected Country:', selectedCountry);

            // If selectedCountry exists, retrieve data-dial-code
            var ddiCode = selectedCountry ? selectedCountry.getAttribute('title') : '';
            ddiCode = ddiCode.split('+')[1]
            console.log('DDI Code:', ddiCode);

            if (phoneField && hiddenField && ddiCode) {
                var phone = phoneField.value.replace(/[^0-9]/g, '');
								phone = phone.split(ddiCode)[1]
                var formattedValue = ddiCode + '-' + phone;

                console.log('Formatted Value:', formattedValue);

                // Assign the value to the hidden field
                hiddenField.value = formattedValue;

                console.log('Hidden Field Value After Assignment:', hiddenField.value);
            } else {
                console.error('One of the fields is missing or invalid.');
            }
        };
    } else {
        console.error('Form not found.');
    }
};
