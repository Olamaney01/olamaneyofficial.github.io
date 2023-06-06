const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const date_of_birth = document.getElementById('dob');
const state= document.getElementById('state');
const town = document.getElementById('town');
const parentname = document.getElementById('parentname');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    checkInputs();
    
    
}
);


function checkInputs(){
    const firstnameValue= firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const date_of_birthValue = dob.value.trim();
    const stateValue = state.value.trim();
    const townValue = town.value.trim();
    const parentnameValue = parentname.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    
    if (firstnameValue ===''){
        setErrorFor(firstname, "please key in your name");
    }
    else{
        setSuccessFor(firstname);
    }
    if( lastnameValue===''){
        setErrorFor(lastname, "please key in your name");
    }
    
    else{
        setSuccessFor(lastname);
    }
    if (date_of_birthValue === ''){
        setErrorFor(dob, "please fill in this field");
    }
    else{
        setSuccessFor(dob);
    }
    if (stateValue ===''){
        setErrorFor(state, "please fill in this field");
    }
    else{
        setSuccessFor(state);
    }
    if (townValue ===''){
        setErrorFor(town, "please fill in this field");
    }
    else{
        setSuccessFor(town);
    }
    if (parentnameValue ===''){
        setErrorFor(parentname, "please fill in this field");
    }
    else{
        setSuccessFor(parentname);
    }
    if (phonenumberValue ===''){
        setErrorFor(phonenumber, "please fill in this field");
    }
    else{
        setSuccessFor(phonenumber);
    }

}
function call(){
    alert("First Name: "+ firstnameValue);
    alert("lastname:" + lastnameValue);
    alert("dof:" + date_of_birthValue);    
}


function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className ="form-control error";
    
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
