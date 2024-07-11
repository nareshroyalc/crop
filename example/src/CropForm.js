import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CropForm.css';

function CropForm() {
  const [stateName, setStateName] = useState('');
  const [cropSeason, setCropSeason] = useState('');
  const [stateSuggestions, setStateSuggestions] = useState([]);
  const [cropSuggestions, setCropSuggestions] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');
  const [responseArray, setResponseArray] = useState([]);

  const indianStates = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  const cropSeasons = ['Kharif', 'Rabi', 'Zaid','Whole Year '];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await axios.get('/api/get-csrf-token/');
        setCsrfToken(response.data.csrfToken);
        axios.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken;
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    }
    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('State Name:', stateName);
    console.log('Crop Season:', cropSeason);
    try {
      const response = await axios.post('/api/crop-form-submit/', { state: stateName, season: cropSeason });
      console.log('Response from server:', response.data);

      if (response.data.crops && Array.isArray(response.data.crops)) {
        setResponseArray(response.data.crops);
      } else {
        console.error('Expected array but got:', response.data);
        setResponseArray([]);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseArray([]);
    }
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setStateName(value);
    if (value.length > 0) {
      const suggestions = indianStates.filter(state => state.toLowerCase().startsWith(value.toLowerCase()));
      setStateSuggestions(suggestions);
    } else {
      setStateSuggestions([]);
    }
  };

  const handleCropSeasonChange = (e) => {
    const value = e.target.value;
    setCropSeason(value);
    if (value.length > 0) {
      const suggestions = cropSeasons.filter(crop => crop.toLowerCase().startsWith(value.toLowerCase()));
      setCropSuggestions(suggestions);
    } else {
      setCropSuggestions([]);
    }
  };

  const handleSelectState = (state) => {
    setStateName(state);
    setStateSuggestions([]);
  };

  const handleSelectCropSeason = (crop) => {
    setCropSeason(crop);
    setCropSuggestions([]);
  };

  return (
    <div className="centered-form">
      <div className="crop-form-container">
        <div className="crop-form">
          <h2>Crop Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="stateName">State Name:</label>
              <input
                type="text"
                name="state"
                id='stateName'
                value={stateName}
                onChange={handleStateChange}
                onFocus={handleStateChange}
                placeholder="Enter state name"
              />
              {stateSuggestions.length > 0 && (
                <ul className="suggestions">
                  {stateSuggestions.map((state, index) => (
                    <li key={index} onClick={() => handleSelectState(state)}>{state}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="cropSeason">Crop Season:</label>
              <input
                type="text"
                name="season"
                id='season'
                value={cropSeason}
                onChange={handleCropSeasonChange}
                onFocus={handleCropSeasonChange}
                placeholder="Enter crop season"
              />
              {cropSuggestions.length > 0 && (
                <ul className="suggestions">
                  {cropSuggestions.map((crop, index) => (
                    <li key={index} onClick={() => handleSelectCropSeason(crop)}>{crop}</li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="response-container">
            {responseArray.map((crop, index) => (
              <p key={index}  className="crop-item">
                {crop}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropForm;
