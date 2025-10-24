import React from 'react';
import { Link } from 'react-router-dom';

const MandatoryDisclosurePage = () => {
  return (
    <div className="mandatory-disclosure-page-container">
      <header className="page-header">
        <div className="container">
          <h1>School Information</h1>
          <p>Mandatory Public Disclosure</p>
        </div>
      </header>

      <div className="mandatory-disclosure-content container">
        {/* General Information Section */}
        <div className="disclosure-section">
          <h2>General Information</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>NAME OF THE SCHOOL</td>
                  <td>National Public School</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>COMPLETE ADDRESS WITH PIN CODE</td>
                  <td>Sy no 148, Kudlu, Singasandra, Bangalore 560068</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>PRINCIPAL NAME</td>
                  <td>Mrs. Vijayashree Samuel</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>PRINCIPAL QUALIFICATION</td>
                  <td>M Sc, B.Ed</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>SCHOOL EMAIL ID</td>
                  <td>
                    principal@npskudlu.com<br />
                    info@npskudlu.com
                  </td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>CONTACT DETAILS (LANDLINE / MOBILE)</td>
                  <td>
                    8904221002<br />
                    8431208535
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Result and Academics Section */}
        <div className="disclosure-section">
          <h2>Result and Academics</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>DOCUMENTS / INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>FEE STRUCTURE OF THE SCHOOL</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>ANNUAL ACADEMIC CALENDAR</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>LIST OF SCHOOL MANAGEMENT COMMITTEE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>LIST OF PARENT TEACHERS ASSOCIATION MEMBERS</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Staff (Teaching) Section */}
        <div className="disclosure-section">
          <h2>Staff (Teaching)</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>PRINCIPAL</td>
                  <td>
                    Mrs. Vijayashree Samuel<br />
                    M.Sc, B.Ed
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>TOTAL NUMBER OF TEACHERS</td>
                  <td>NUMBER-39</td>
                </tr>
                <tr>
                  <td></td>
                  <td>PGT</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td></td>
                  <td>TGT</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td></td>
                  <td>PRT</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td></td>
                  <td>NTT</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>TEACHERS SECTION RATIO</td>
                  <td>1:1.5</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>DETAILS OF SPECIAL EDUCATOR</td>
                  <td>-</td> {/* Assuming no details given in image 2 */}
                </tr>
                <tr>
                  <td>5.</td>
                  <td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                  <td>
                    Mrs. Shilpa Pramod<br />
                    M.Sc(Psy), Diploma in Professional Child Psychology
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* School Infrastructure Section */}
        <div className="disclosure-section">
          <h2>SCHOOL INFRASTRUCTURE</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>DOCUMENTS / INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>TOTAL CAMPUS AREA OF THE SCHOOL (SQ MTR)</td>
                  <td>8,093.70 Sq Mt</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>NUMBER AND SIZE OF THE CLASS ROOMS (SQ MTR)</td>
                  <td>20 – Each<br />67.15 Sq Mt</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>NUMBER AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (SQ MTR)</td>
                  <td>
                    SCIENCE LAB: 1 – 134.30 Sq Mt<br />
                    MATH LAB: 1 – 67.15 SqMt<br />
                    COMPUTER LAB:1 – 67.15 Sq Mt
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>INTERNET FACILITY</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>NUMBER OF GIRLS TOILETS</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>NUMBER OF BOYS TOILETS</td>
                  <td>51</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents and Information Section */}
        <div className="disclosure-section">
          <h2>DOCUMENTS and INFORMATION <br/> (All documents are in PDF Format)</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>DOCUMENTS / INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>COPIES OF SOCIETIES/TRUST REGISTRATION OR RENEWAL CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>COPY OF NOC</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>COPIES OF RECOGNITION CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>COPY OF VALID BUILDING SAFETY CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>COPY OF VALID FIRE SAFETY CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>SELF CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>COPY OF VALID WATER, HEALTH AND SANITATION CERTIFICATE</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>MPD DOCUMENT</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>SELF AFFIDAVIT (Non Proprietary Character)</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>ANNUAL REPORT</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>DETAILS OF CURRICULUM</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>CLASSWISE STUDENT LIST</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>STAFF DETAILS</td>
                  <td><Link to="#!">PDF</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosurePage;