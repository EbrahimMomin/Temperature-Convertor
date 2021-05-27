function CelsiusToFahrenheit() {
    const C = CTF.CelsiusInput.value;
    const F = (C * 9/5) + 32;
    document.body.innerHTML = '<h2>' + C + ' Celsius is ' + F + ' Fahrenheit</h2>';
}

CTF.onsubmit = CelsiusToFahrenheit;