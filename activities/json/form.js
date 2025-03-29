document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault()
    alert("Form Submitted")
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;

    if(!fname){
        alert('You need to enter your name First Name.');
        return
    }
    
    if (!age || age<18) {
        alert('You need to be 18.');
        return
    }

    const FormData = {
        fname: fname,
        lname: lname,
        email: email,
        age: age,
        password: password,
        state: state,
        comments: comments,
    }

    console.log(FormData);
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader("content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4 && xhr.status === 200){
                const response = JSON.parse(xhr.responseTexxt);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").innerHTML = "";
                alert("Form submitted successfully.");
            }
            else if (xhr.readyState === 4){
                alert ("Error submitting form.");
            }
        }
    xhr.send(JSON.stringify(FormData));
    alert("Success: ${fname} ${lname}")
});