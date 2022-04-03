const form = document.getElementById("form");
const username = document.getElementById("uname");
const password = document.getElementById("password");

var map = new Map();

map.set('aaa', 111);
map.set('bbb', 222);
map.set('ccc', 333);


if (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            form.classList.add('was-validated')
            return
        }



        if (map.has(username.value)) {
            console.log(username.value)
            console.log(map.get(username.value))
            if (map.get(username.value) == password.value) {
                event.preventDefault()
                event.stopPropagation()
                window.location.href = "home.html"
                return;
            } else {
                alert("password is wrong");
                event.preventDefault()
                event.stopPropagation()
                return;
            }
        } else {
            alert("wrong username")
            event.preventDefault()
            event.stopPropagation()
            return
        }

    }, false)

    // function submit() {
    //     var username = document.getElementById("uname").value;
    //     var password = document.getElementById("password").value;

    //     if (map.has(username)) {
    //         if (map.get(username) === password) {
    //             alert("Welcome!");
    //         }
    //     }
    // }

    // $('form').on('submit', event => {
    //     event.preventDefault();
    //     var username = document.getElementById("uname").value;
    //     var password = document.getElementById("password").value;

    //     if (map.has(username)) {
    //         if (map.get(username) === password) {
    //             alert("Welcome!");
    //         }
    //     }
    // });


    // (function() {
    //     'use strict'

    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.querySelectorAll('.needs-validation')
    //         // Loop over them and prevent submission
    //     Array.prototype.slice.call(forms)
    //         .forEach(function(form) {
    //             form.addEventListener('submit', function(event) {
    //                 if (!form.checkValidity()) {
    //                     event.preventDefault()
    //                     event.stopPropagation()
    //                 }

    //                 form.classList.add('was-validated')
    //             }, false)
    //         })
    // })()
}
