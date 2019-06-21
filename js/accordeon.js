const element = document.querySelector("#accord");

// [].forEach.call(element.querySelectorAll('li'), function (item) {
//     item.addEventListener('click', function (e) {
//         if (item.classList.contains('active')) {
//             item.classList.remove('active');
//         } else {
//             let active = element.querySelector('li.active');

//             if (active) {
//                 active.classList.remove('active');
//             }

//             item.classList.add('active');
//         }
//     })
// });

function createAccordeon(element) {
    let lastActive;

    element.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'a') {
            let self = e.target.parentNode;

            if (self.classList.contains('active')) {
                self.classList.remove('active')
            } else {
                if (lastActive) {
                    lastActive.classList.remove('active');
                }
    
                lastActive = e.target.parentNode;
                lastActive.classList.add('active');
            }
        }
    });
}

createAccordeon(element);