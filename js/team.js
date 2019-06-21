// const team = document.querySelector('#team-section');

// function teamList(element) {
//     let lastActive;

//     element.addEventListener('click', function (e) {
//         if (e.target.classList.contains('team__trigger')) {
//             e.preventDefault();

//             if (lastActive) {
//                 lastActive.classList.remove('active');
//             }

//             lastActive = e.target.parentNode;
//             lastActive.classList.add('active');
//         }
//     });
// }

// teamList(team);

const teamListSection = document.querySelectorAll('#team-section li a');

function teamList(nodeList) {
    let lastActive;

    nodeList.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (lastActive) {
                lastActive.classList.remove('active');
            }

            lastActive = item.parentNode;
            lastActive.classList.add('active');
        });
    })
}

teamList(teamListSection);

