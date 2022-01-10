import React, { useState } from 'react';
import Data from './data.json';
import { nanoid } from "nanoid";

export default function Table() {
   
    const [contacts, setContacts] = useState(Data);
    const [addFormData, setAddFormData] = useState({
      Name:'',
      email:'',
      msg:'',
    });
    
    const handleAddFormChange = (event) => {
      event.preventDefault();
      
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
   
   const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id:nanoid(),
      name:addFormData.Name,
      email:addFormData.email,
      msg:addFormData.msg,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

    return (
        <div className="container">
            
            <div className="container">
                    <h1>contact</h1>
                    <div className="card p-5">
                    <form onSubmit={handleAddFormSubmit}>
                        <div className="row">
                        <div className="col-md-6">
                            <h4> Name</h4>
                            <input type="text" onChange={handleAddFormChange} className="form-control" id="Name" placeholder="Name" name="Name"/>
                        </div>
                        <div className="col-md-6">
                            <h4>Email</h4>
                            <input type="text" onChange={handleAddFormChange} className="form-control" id="email"  placeholder="Enter email" name="email"/>
                        </div>
                        <div className="col-md-12">
                            <h4>Message</h4>
                            <textarea className="form-control"  onChange={handleAddFormChange} rows="5" name="msg" id="Message"></textarea>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                    </div>
            </div>
            <div>
                <table className="table mt-5 border">
                  <thead>
                    <tr>
                      <th>First-Name</th>
                      <th>email</th>
                      <th>msg</th>
                    </tr>
                  </thead>
                  <tbody>
                      {contacts.map((contact)=>(
                          <tr>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.msg}</td>
                      </tr>
                      ))}
                      
                  </tbody>
                </table>
            </div>
        </div>
    )
}
