// onLoad = () => {
//     addEventListener('message', (event) => {
//         console.log(event);
//         if (event.data.action === 'update') {
//             var gameHour = event.data.gameHour;
//             var irlDate = event.data.irlDate;
//             var irlHour =  event.data.irlHour;
//             var playerCash = event.data.playerCash;
//             let element = `
//                 <p class="ig-infos"><i class="fa-solid fa-location-dot"></i> Los Santos  <i class="fa-solid fa-clock"></i> ${event.data.gameHour}</p>
//                 <p class="irl-infos"><i class="fa-solid fa-calendar"></i> ${event.data.irlDate} <i class="fa-solid fa-clock"></i> ${event.data.irlHour}</p>
//                 <p class="player-money">${event.data.playerCash}</p>
//             `;
//             $('#container').html(element);
//         }
//     });
// };

var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

onload = () => {
    addEventListener('message', (event) => {
        switch (event.data.action) {
            case 'update': // update status
                var date = new Date();
                var dateArray = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
                var dateString = dateArray[0] + ' ' + months[dateArray[1] - 1] + ' ' + dateArray[2];
                var hour = date.getHours();
                var minute = date.getMinutes();
                if (hour < 10) {
                    hour = '0' + hour;
                }
                if (minute < 10) {
                    minute = '0' + minute;
                }
                var hourString = hour + ':' + minute;
                
                var gameHour = event.data.gameHour;
                var irlDate = event.data.irlDate;
                var irlHour =  event.data.irlHour;
                var playerCash = event.data.playerCash;
                let element = `
                    <p class="ig-infos"><i class="fa-solid fa-location-dot"></i> Los Santos  <i class="fa-solid fa-clock"></i> ${event.data.gameHour}</p>
                    <p class="irl-infos"><i class="fa-solid fa-calendar"></i> ${dateString} <i class="fa-solid fa-clock"></i> ${hourString}</p>
                    <p class="player-money">${event.data.playerCash}$</p>
                `;
                $('#container').html(element);
                break;
        }
    });
}