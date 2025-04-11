document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault()
    alert("Form Submitted")
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpass = document.getElementById('cpass').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;

    if(password != cpass){
        alert("Password doesn't match.")
        return
    }

    if(!fname){
        alert('You need to enter your name First Name.');
        return
    }

    if(!lname){
        alert("You need to enter your Last Name.")
        return
    }
    
    const FormData = {
        fname: fname,
        lname: lname,
        age: age,
        email: email,
        password: password,
        cpass: cpass,
        state: state,
        comments: comments,
    }

    console.log(FormData);

    const xhr = new XMLHttpRequest();
    xhr.open("get", "form.json");
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