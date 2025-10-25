import React from 'react';

// Data for the table
const documents = [
  { slNo: 1, name: 'DETAILS OF CURRICULUM', link: '#!' },
  { slNo: 2, name: 'TRANSFER CERTIFICATE SAMPLE', link: '#!' },
  { slNo: 3, name: 'NORMS FOLLOWED FOR FIXING FEE', link: '#!' },
  { slNo: 4, name: 'SELF AFFIDAVIT OF SCHOOL', link: '#!' },
  { slNo: 5, name: 'DETAILS OF TEACHERS', link: '#!' },
  { slNo: 6, name: 'WRITTEN DECLARATION ABOUT BOOKS', link: '#!' },
  { slNo: 7, name: 'BOOK LIST (CLASSWISE AND SUBJECTWISE)', link: '#!' },
  { slNo: 8, name: 'NUMBER OF STUDENT CLASSWISE', link: '#!' },
  { slNo: 9, name: 'ANNUAL REPORT', link: '#!' },
  { slNo: 10, name: 'DETAILS OF TEACHERS TRAINING', link: '#!' },
  { slNo: 11, name: 'EVENT REPORTS - CLUBS AND COMMITTEES', link: '#!' },
  { slNo: 12, name: 'CIRCULARS', link: '#!' },
];

const OtherDocumentsPage = () => {
  return (
    <div className="other-documents-page-container">
      <div className="container">
        <div className="titles-container">
          <h1>School Information</h1>
          <h2>Other Documents</h2>
        </div>

        <div className="documents-table-section">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>DOCUMENTS / INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.slNo}>
                    <td>{doc.slNo}</td>
                    <td>{doc.name}</td>
                    <td>
                      <a href={doc.link} target="_blank" rel="noopener noreferrer">
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDocumentsPage;
