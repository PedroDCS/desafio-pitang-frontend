
import './SchedulingTable.scss'
import CostumTable from '../../components/Table/Table'
import { Button } from '@mantine/core';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { Input } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ButtonGoHome from '../../components/ButtonGoHome/ButtonGoHome';

function SchedulingTable(props) {
    const location = useLocation();
    let day
    try {
        day = location.state.dayProp
    } catch (error) {
        day = new Date()
    }
    const [startDate, setStartDate] = useState(day);
    const navigate = useNavigate()


    const navigateTomarcarConsultas = () => {
        navigate('/marcarconsulta')
    }

    return (<div className='tabela'>
        <h1>Agendamento do Dia</h1>
        <DatePicker className='DatePicker'
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
            customInput={<Input />} />

        <CostumTable day={startDate} />
        <div>
            <Button className='button' onClick={navigateTomarcarConsultas} >Marcar Consulta</Button>
            <ButtonGoHome />
        </div>
    </div>)
}

export default SchedulingTable;