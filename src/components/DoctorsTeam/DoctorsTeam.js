import React from 'react';
import useFetch from '../../hooks/useFetch';
import Doctor from '../Doctor/Doctor';
import UnderLine from '../UnderLine/UnderLine';

//Doctor team component
// this component gets data from doctors.json file use useFetch Hook
// this component renders all the single doctor

const DoctorsTeam = () => {
    
    const {data} = useFetch('/doctors.json')

    return (
        <section id="doctors" className="md:w-5/6 md:mx-auto mx-5 my-10">
            <h1 className="text-5xl font-medium text-center">Meet Our Doctors And  Book Appointments</h1>
            <UnderLine/>
            <p className="text-center text-xl">You can book their appointment from this site !</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    data.map(doctor => <Doctor data={doctor} key={doctor.id}/>)
                }
            </div>
        </section>
    );
};

export default DoctorsTeam;