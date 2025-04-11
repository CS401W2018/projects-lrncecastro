document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault()
    alert("Form Submitted")
    const Nname = document.getElementById('Nname').value
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;


    if(!Nname){
        alert('You need to enter your name First Name.');
        return
    }



    const FormData = {
        Nname: Nname,
        age: age,
        email: email,
        state: state,
        comments: comments,
    }

    console.log(FormData);

    const xhr = new XMLHttpRequest();
    xhr.open("get", "submission.json");
    xhr.setRequestHeader("content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = " ";
        }
        else if (xhr.readyState === 4){
            alert ("Error submitting form.");
        }
    }
    xhr.send(JSON.stringify(FormData));
    alert("Success")
});