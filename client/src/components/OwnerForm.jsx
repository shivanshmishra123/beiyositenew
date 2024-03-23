import React from 'react'
import './ownerForm.css'
const OwnerForm = () => {
  return (

    <div>
            <div class="RegistrationForm">
    <form class="Form">
        <div class="OwnerInformations">
            <div class="UserFeildInputs">
                <label for="Name">Name</label>
                <input type="text" id="Name" name="Name" required/>
            </div>
            <div class="UserFeildInputs">
                <label for="OwnerName">Owner Name</label>
                <input type="text" id="OwnerName" name="OwnerName" required/>
            </div>
            <div class="UserFeildInputs">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="UserFeildInputs">
                <label for="MobileNumber">Mobile</label>
                <input type="text" id="MobileNumber" name="MobileNumber" required/>
            </div>
            <div class="UserFeildInputs">
                <label for="Address">Address</label>
                <input type="text" id="Address" name="Address" required/>
            </div>
        </div>
        <button type="submit"  class="button">Submit</button>
    </form>
</div></div>
  )
}

export default OwnerForm