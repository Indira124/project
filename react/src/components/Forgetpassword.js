import React, { Component } from 'react';
import './forgetpassword.css';

class Forgetpassword extends Component {
    render() {
        return (
            <div>
               <h1 className="centertitle"> Contact Admin ! </h1>

                <table className="admintable">

                <tr>

                <th></th>

                <th></th>

                </tr>

                <tr>

                <td>Email : </td>

                <td className="secondcolumn">peoplesmartadmin@gmail.com</td>

                </tr>

                <tr>

                <td>Contact No : </td>

                <td className="secondcolumn">+14090302830, +91-021308009</td>

                </tr>

                <tr>

                <td>Admin Office Address: </td>

                <td className="secondcolumn">Road no 14, 3-D Block 4th Floor, Madhapur</td>

                </tr>

                </table>
            </div>
        );
    }
}

export default Forgetpassword;