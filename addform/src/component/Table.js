import React from 'react';
import "./Table.css";

const Table = () => {
  return (
    <div className='main'>
      <div class="addnew">
        <button id="new" class="new">+ Add</button>
        <div class="searchbox"><input type="search" class="search" id="searchinput" /><button id="searchdata" >Search</button></div>
        <div class="tablestatus">
          <sapn><input type="radio" id="activestatus" name="statusfilter" value="Active" checked="checked"/>Active</sapn>
          <sapn><input type="radio" id="inactivestatus" name="statusfilter" value="Inactive" />Inactive</sapn>
        </div>
      </div>
    <table>
        <thead>
            <tr>
                <th>Sr.no</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>121</td>
            <td>deep</td>
            <td>deep.p@brilworks.com</td>
            <td>21</td>
            <td>2345678901</td>
            <td>active</td>
            <td>view edit delete</td>
            </tr>
        </tbody>
        {/* <tfoot className='footer'></tfoot> */}
    </table>
    </div>
  )
}

export default Table;