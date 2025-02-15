function show() {

    // Obter elementos a partir do seu ID
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    // Obter elementos a partir do seu nome
    const listElements = document.getElementsByTagName('li');
    console.log(listElements)

    // Obter elementos a partir da classe
    const contactsInptuts = document.getElementsByClassName('contact-input');
    console.log(contactsInptuts)

    // Obter elementos a partir do seletor CSS
    const contactList2 = document.querySelector('#contact-list');
    console.log(contactList2)

    // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)

    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)

}