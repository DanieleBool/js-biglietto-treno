// dati utente
let km = parseFloat(prompt('numero di chilometri da percorrere'));
let age = parseInt(prompt('Inserisci la tua età'));

// prezzo biglietto senza sconti
let kmPrice = km * 0.21;

// calcolo sconti
if(isNaN(age) || isNaN(km))
{
    alert('Errore inserimento dati, ricaricare la pagina.')
}
else
{
    if(age < 18)
    {
        price = (kmPrice * 20 / 100) - kmPrice; // devo dichiarare price?
    }
    else if(age > 65)
    {
        price = (kmPrice * 40 / 100) - kmPrice;
    }
    else
    {
        price = kmPrice;
    }
}

// rendo visibile il prezzo del biglietto
let result = Math.abs(price.toFixed(2)) + ' ' + 'euro';
document.getElementById('result').innerHTML = result;