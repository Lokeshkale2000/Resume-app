import React, { useState, useEffect } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import './CoverletterTemp1.css';
import { useNavigate } from 'react-router-dom';

const CoverletterTemp1 = () => {
  const [contacts, setContacts] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [letterBody, setLetterBody] = useState([]);
  const [conclusion, setConclusion] = useState([]);

  const [loadingState, setLoadingState] = useState({
    contacts: true,
    recipients: true,
    subjects: true,
    letterBody: true,
    conclusion: true,
  });
  const [errorState, setErrorState] = useState({
    contacts: null,
    recipients: null,
    subjects: null,
    letterBody: null,
    conclusion: null,
    global: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsRes, recipientsRes, subjectsRes, letterBodyRes, conclusionRes] = await Promise.all([
          axios.get('https://zety-backend.onrender.com/contacts'),
          axios.get('https://zety-backend.onrender.com/recipient'),
          axios.get('https://zety-backend.onrender.com/subjects'),
          axios.get('https://zety-backend.onrender.com/letters'),
          axios.get('https://zety-backend.onrender.com/conclusion'),
        ]);

        setContacts(contactsRes.data);
        setRecipients(recipientsRes.data);
        setSubjects(subjectsRes.data);
        setLetterBody(letterBodyRes.data[0]?.letterBodyText || '');
        setConclusion(conclusionRes.data[0]?.conclusion || '');

        setLoadingState({
          contacts: false,
          recipients: false,
          subjects: false,
          letterBody: false,
          conclusion: false,
        });
      } catch (error) {
        setErrorState((prevState) => ({
          ...prevState,
          global: error.message || 'Error fetching all data',
        }));
        setLoadingState({
          contacts: false,
          recipients: false,
          subjects: false,
          letterBody: false,
          conclusion: false,
        });
      }
    };

    fetchData();
  }, []);

  const renderSection = (loading, error, data, emptyMessage, renderContent) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (data.length === 0) return <p>{emptyMessage}</p>;
    return renderContent();
  };

  const downloadPDF = async () => {
    const element = document.getElementById('cover-letter-content');

    const options = {
      margin: 10,
      filename: 'cover_letter.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generate PDF
    html2pdf().from(element).set(options).save();

    // After downloading the PDF, delete data using multiple API calls
    try {
      await Promise.all([
        axios.delete('https://zety-backend.onrender.com/contacts'),
        axios.delete('https://zety-backend.onrender.com/recipient'),
        axios.delete('https://zety-backend.onrender.com/subjects'),
        axios.delete('https://zety-backend.onrender.com/letters'),
        axios.delete('https://zety-backend.onrender.com/conclusion'),
      ]);
      console.log('Data deleted successfully.');

      // Redirect to a new page (for example, a "Success" or "Home" page)
      navigate('/'); // Modify this route as needed
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="coverlettermain-container-flex">
          <div className="contacts-section">
            {renderSection(
              loadingState.contacts,
              errorState.contacts,
              contacts,
              'No contacts available',
              () => (
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact._id}>
                      <h1>
                        {contact.firstName}
                      </h1>
                      <h1 className="Coverletter-contact-h2">{contact.lastName}</h1>
                      <div className="contact-details">
                        <h3 style={{ color: 'black' }}>Contact</h3>
                        <hr />
                        <strong>Phone:</strong> {contact.phone} <br />
                        <strong>Email:</strong> {contact.email} <br />
                        <strong>Address:</strong> {contact.city},<br /> {contact.state}
                      </div>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>

          <div className="other-sections">
            <div className="subjects-section" style={{ marginTop: '140px', marginLeft: '60px' }}>
              {renderSection(
                loadingState.subjects,
                errorState.subjects,
                subjects,
                'No subjects available',
                () => (
                  <ul>
                    {subjects.map((subject) => (
                      <li key={subject._id} className="subject-of templ1">
                        <p className="coverlettertemp1">
                          <strong>Subject: </strong>{subject.subjectName}.
                        </p>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>

            <div className="recipients-section recipientcontents-name">
              {renderSection(
                loadingState.recipients,
                errorState.recipients,
                recipients,
                'No recipients available',
                () => (
                  <ul>
                    {recipients.map((recipient) => (
                      <li key={recipient._id}>
                        <p style={{ fontSize: '15px', marginLeft: '40px' }}>
                          <strong>Dear:</strong> <span>{recipient.firstName} {recipient.lastName}, Hiring Manager at {recipient.companyName}.</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>

            <div>
              {loadingState.letterBody ? (
                <div>Loading...</div>
              ) : errorState.letterBody ? (
                <div>{errorState.letterBody}</div>
              ) : (
                <p style={{ padding: '0 70px' }} className="letter-body-section">{letterBody}</p>
              )}
            </div>

            <div>
              {loadingState.conclusion ? (
                <div>Loading...</div>
              ) : errorState.conclusion ? (
                <div>{errorState.conclusion}</div>
              ) : (
                <p style={{ padding: '0 70px' }} className="conclusion-section">{conclusion}</p>
              )}
              <br />
            </div>

            <div className="sincerely-section">
              <h3 style={{ marginLeft: '120px' }}>Sincerely,</h3>
              {contacts.length > 0 && (
                <p style={{ marginLeft: '120px' }}>{contacts[0].firstName} {contacts[0].lastName}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <button onClick={downloadPDF} className="download-button" style={{ margin: '20px 40%', padding: '10px 20px', fontSize: '16px', justifyContent: 'center' }}>
        Download Cover Letter as PDF
      </button>
    </>
  );
};

export default CoverletterTemp1;
