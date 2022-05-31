// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( userObj  => {
//             // do something with the username login
//             console.log(userObj.login);
//         });
//     });
// });







fetch('https://api.github.com/users',
    {
        headers: {'Authorization': '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'}}).then( response => {
            response.json().then( users => {
                users.forEach( userObj  => {
                    // do something with the username login
                    console.log(userObj.login);
                });
            });
        });
