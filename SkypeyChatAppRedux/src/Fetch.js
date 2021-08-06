import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [tableData, setTableData] = useState([]);
    const url = 'https://jsonblob.com/api/d624ff88-e922-11ea-9b88-79ecfee0f2ef';

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTableData([...json])
            });


    },[tableData])

    return (
        <div>

            <pre>
                {JSON.stringify(tableData,null,4)}
                {tableData.map(i=>i.name)}
            </pre>

            <table class="table table-dark" style={{background:"black", color:"white", padding:"10px", border:"1px solid black"}}>
                    <thead className="bg-primary">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((content) => (
                                <tr>
                                    <td>{content.name}</td>
                                    <td>{content.email}</td>
                                    <td>{content.mobileNumber}</td>
                                    <td> {content.dob}</td>
                                    <td>{content.gender}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

        </div>
    )
}

export default Fetch
