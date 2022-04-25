import { Table } from '@mantine/core';
import { useEffect, useState } from "react";
import axios from '../../services/api';
import { format } from 'date-fns';

function CostumTable({ day }) {
    const [elements, setElements] = useState([])

    useEffect(() => {
        axios
            .get(`/scheduling/getday/${day}`)
            .then((response) => {
                setElements(response.data.items)
            })
            .catch(console.error);
    }, [day]);

    const rows = elements.map((element) => (
        <tr key={element._id}>
            <td>{element.patientName}</td>
            <td>{format(Date.parse(element.birthDate), 'MM/dd/yyyy')}</td>
            <td>{format(Date.parse(element.schedulingDate), 'MM/dd/yyyy hh:mm')}</td>
        </tr>
    ));
    return (<div>
        <Table className='tabela' highlightOnHover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de nascimento</th>
                    <th>Dia Agendado</th>

                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    </div>);
}

export default CostumTable;