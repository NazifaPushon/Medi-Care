import React from 'react';
import useFetch from '../../hooks/useFetch';
import Doctor from '../Doctor/Doctor';
import UnderLine from '../UnderLine/UnderLine';

const DoctorsTeam = () => {
    const {data} = useFetch('/doctors.json')
    console.log(data)
    return (
        <div id="doctors">
            <h1 className="text-5xl font-medium text-center">Meet The Team of Health Care</h1>
            <UnderLine/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                {
                    data.map(doctor => <Doctor data={doctor} key={doctor.id}/>)
                }
            </div>
        </div>
    );
};

export default DoctorsTeam;