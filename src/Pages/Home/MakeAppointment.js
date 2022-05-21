import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ 
            background: `url(${appointment})`
        }} 
        className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-110px]" src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an Appointment Today</h2>
                <p className="text-white">When making an appointment you should give the person your name and the reason for wanting an appointment. You should also ask the amount of time the appointment will take and if you should expect a wait time prior to the appointment. Be sure to ask about cancellation policies and procedures, some businesses impose penalties for cancellations that occur less than 24 hours before the appointment.</p>
                <PrimaryButton>Click Here</PrimaryButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;