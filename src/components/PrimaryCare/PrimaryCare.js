import React, { useState } from 'react';
import Swal from 'sweetalert2';
import BackBtn from '../BackBtn/BackBtn';
import Checkbox from '../Checkbox/Checkbox';
import UnderLine from '../UnderLine/UnderLine';

//this is the component for primary care  route
const PrimaryCare = () => {
    const [isFillUp,setisFillUp] = useState(false)

    //handle the submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setisFillUp(true)
        Swal.fire({
            icon: "success",
            title:"Great Job",
            text:"Info collected Successfully"
        })
    }

    const handleClick = () => {
        setisFillUp(false)
    }
    return (
        <div className="md:w-5/6 w-full mx-auto my-10">
            <h1 className="text-4xl font-semibold text-blue-950 text-center">This is primary care</h1>
            <UnderLine />
            <p className="w-2/3 mx-auto text-center my-10">Here You can describe Your problem and one of our profetional doctor will suggest you the primary medication and further treatment Plane .
                <br />
                <span className="font-bold text-red-950">We will try to help you within 12 Hour</span>
            </p>
            <div className="mx-5 md:w-4/5 border-red-950 border-2 md:mx-auto">
                {
                    !isFillUp ? <form action="" className="p-7  md:w-2/3 mx-auto w-full" onSubmit={handleSubmit}>
                    <h1 className=" text-2xl font-semibold ">Description of You Problem -</h1>
                    <hr />
                    <div className="mt-5">
                        <Checkbox htmlFor="problemName">Your Problem (in short) :</Checkbox>
                        <input type="text" name="" id="problemName" className="input w-1/2" placeholder="Your Problem" />
                    </div>
                    <div className="mt-5">
                        <Checkbox htmlFor="problemDes">Describe Your Problem : </Checkbox>
                        <textarea name="" id="problemDes" cols="30" rows="5" className="input" placeholder="Your description description"></textarea>
                    </div>
                    <div className="mt-5">
                        <p>How Long have you been suffering ?</p>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <input type="text" name="" id="days" placeholder="days" className="input" />
                            <input type="text" name="" id="month" placeholder="month" className="input" />
                            <input type="text" name="" id="year" placeholder="year" className="input" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <hr />
                        <p className="my-3 text-center">Other Diseases (Optional)</p>
                        <hr />
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div>
                                <div>
                                    <Checkbox text="Pregnency" />
                                </div>
                                <div>
                                    <Checkbox text="Diabetes" />
                                </div>
                                <div>
                                    <Checkbox text="Heart Diseases" />
                                </div>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="5" className="input" placeholder="Descripe Other Diseases Or Medication "></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <hr />
                        <p className="my-3 text-center">Gender</p>
                        <hr />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                            <Checkbox text="Male" />
                            <Checkbox text="Female" />
                            <Checkbox text="Other" />
                        </div>
                    </div>
                    <div className="mx-5 md:w-2/3 md:mx-auto mt-10">
                        <input type="submit" value="Sumit" className="btn-3" />
                    </div>
                </form> 
                : <div className="text-center my-10">
                <h1 className="text-2xl font-semibold my-10">Your Information is Collected . We will Try to help you as soon as possibe</h1>
                <button className="btn-1" onClick={handleClick}>
                    Undo
                </button>
                </div>
                }
            </div>
            <BackBtn/>
        </div>
    );
};



export default PrimaryCare;