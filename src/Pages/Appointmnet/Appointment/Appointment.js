import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AbleableAppointment from '../AbleableAppointment/AbleableAppointment';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date ,setDate]=React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AbleableAppointment date={date}></AbleableAppointment>
        </div>
    );
};

export default Appointment;