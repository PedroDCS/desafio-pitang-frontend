import { Table } from '@mantine/core';
import { useEffect, useState } from "react";
import axios from '../../services/api';
import { format } from 'date-fns';
import { showNotification } from "@mantine/notifications";
import './Table.scss'
function CostumTable({ day }) {
    const [elements, setElements] = useState([])

    try {
        useEffect(() => {
            axios
                .get(`/scheduling/getday/${day}`)
                .then((response) => {
                    setElements(response.data.items)
                })
                .catch(console.error);
        }, [day]);
    } catch (error) {
        console.error()
        showNotification({
            color: "red",
            title: "Error",
            message: `Erro ao Carregar os dados`,
        })
    }

    const rows = elements.map((element) => (
        <tr key={element._id}>
            <td>{element.patientName}</td>
            <td>{format(Date.parse(element.birthDate), 'MM/dd/yyyy')}</td>
            <td>{format(Date.parse(element.schedulingDate), 'MM/dd/yyyy hh:mm')}</td>
        </tr>
    ));
    return (<div className='tabela'>
        <Table >
            <thead>
                <tr>
                    <th className='th'>Nome</th>
                    <th className='th'>Data de nascimento</th>
                    <th className='th'>Dia Agendado</th>

                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    </div>);
}

export default CostumTable;