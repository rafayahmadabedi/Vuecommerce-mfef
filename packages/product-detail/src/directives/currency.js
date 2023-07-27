const currency = {
    mounted: (el, binding) => {
        let amount;
        if (binding.arg === 'USD') {
            amount = `$${binding.value.amount}`;
        }
        else if(binding.arg === 'RS') {
            amount = `Rs. ${binding.value.amount}/-`;
        }
        el.innerText = amount;
    },
    updated: (el, binding) => {
        let amount;
        if (binding.value.currency) {
            amount = `$${binding.value.amount}`;
        }
        else {
            amount = `Rs. ${binding.value.amount}/-`;
        }
        el.innerText = amount;
    }
}

export default currency;