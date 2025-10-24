import React from 'react';

const SchoolDetailsPage = () => {
    const documents = [
        { name: 'Transfer Certificate Sample', link: '#' },
        { name: "Teachers' Details 2022-23", link: '#' },
        { name: "From the Chairman's Desk", link: '#' },
        { name: 'NPS Kudlu (CBSE Aff.)', link: '#' },
        { name: 'DETAILS OF TEACHERS', link: '#' },
        { name: 'WRITTEN DECLARATION ABOUT BOOKS', link: '#' },
    ];

    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / School Details</p>
                </div>
            </header>
            <div className="page-content container">
                <table className="school-details-table">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>DOCUMENTS / INFORMATION</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, index) => (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{doc.name}</td>
                                <td><a href={doc.link} target="_blank" rel="noopener noreferrer">PDF</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchoolDetailsPage;
