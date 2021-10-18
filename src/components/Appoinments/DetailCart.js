import React from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { useAppointment } from "../../Context/AppointmentProvider";
import TextField from "../Text-field/TextField";

const DetailCart = ({ data }) => {
  const history = useHistory()
  const {setAppointment} =useAppointment()
  const handleSubmit = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Check Out Complete',
      text: 'All Your appointment is booked',
    })
    setAppointment([])
    history.push('/')

  }
  const { subTotal, tax, total, count } = data;
  return (
    <div className="border-2 border-red-500 rounded-md p-4 my-10">
      <h1 className="text-red-500 font-bold bg-gray-300 text-center py-3 rounded text-2xl">
        Payment Details
      </h1>
      <table className="table-auto w-full mx-auto my-5 text-xl">
          <tbody>
          <tr className="flex  justify-between my-2">
            <td>Appointment</td>
            <td>{count}</td>
          </tr>  
          <tr className="flex  justify-between my-2">
            <td>Sub Total</td>
            <td>$ {subTotal}</td>
          </tr>
          <tr className="flex  justify-between my-2">
            <td>Tax</td>
            <td>$ {tax}</td>
          </tr>
          <tr>
            <td><hr /></td>
          </tr>
          <tr className="flex font-bold justify-between my-2">
            <td>Total Cost</td>
            <td>$ {total}</td>
          </tr>
          
          </tbody>
      </table>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="my-5 text-2xl font-bold text-center">Your Info</h3>
          <TextField placeholder="Contact Number"/>
          <textarea name="" id="" cols="10" rows="3" className="input my-5" placeholder="Your Address"></textarea>
          <input type="submit" value="Check Out" className="btn-3"/>
        </form>
      </div>
    </div>
  );
};

export default DetailCart;
