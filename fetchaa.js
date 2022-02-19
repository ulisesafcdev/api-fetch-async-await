const $container = document.querySelector('.container');
const $template = document.getElementById('datosList').content;
const $fragment = document.createDocumentFragment();

async function getData () {

    try {

        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();

        if (!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        data.forEach((el) => {

            $template.querySelector('h3').textContent = el.id;
            $template.querySelector('#name').textContent = `Nombre: ${el.name}`;
            $template.querySelector('#user').textContent = `Usuario: ${el.username}`;
            $template.querySelector('#email').textContent = `Email: ${el.email}`;
            $template.querySelector('#phone').textContent = `Telefono: ${el.phone}`;
            $template.querySelector('#website').textContent = `Sitio Web: ${el.website}`;
        
            let $clone = document.importNode($template, true);

            $fragment.appendChild($clone);

        })

        $container.appendChild($fragment);
        
    } catch (err) {

        let message = err.statusText || 'Error al traer datos';
        $template.innerHtml = `Error ${err.status} ${message}`;
        
    }

}

getData();