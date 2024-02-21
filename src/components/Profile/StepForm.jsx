import React from "react";
import styled from "styled-components";

const StepForm = ({ currentStep, handleNext, handlePrev }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <StyledStepForm>
      <div className="step-form">
        {/* <h2>{`Step ${currentStep + 1}`}</h2> */}
        <form onSubmit={handleFormSubmit}>
          {/* Form fields for Step 1 */}
          {currentStep === 0 && (
            <>
              <h2>Personal Details</h2>
              <br />
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" required>
                  <option value="select">Select your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {/* Form fields for Step 2 */}
          {currentStep === 1 && (
            <>
              <h2>Income Details</h2>
              <br />
              <div className="form-group">
                <label htmlFor="location">Employment Location: </label>
                <input type="text" id="location" name="location" required />
              </div>
              <div className="form-group">
                <label htmlFor="profession">Your Profession: </label>
                <input type="text" id="profession" name="profession" required />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary (in LPA): </label>
                <input type="number" step="0.01" id="salary" name="salary" required />
              </div>
            </>
          )}

          {/* Form fields for Step 3 */}
          {currentStep === 2 && (
            <>
              <h2>Dependency Details: </h2>
              <br />
              <div className="form-group">
                <label htmlFor="noOfDependentMembers">Number of Dependent Members: </label>
                <input type="number" id="noOfDependentMembers" name="noOfDependentMembers" required />
                
              </div>
            </>
          )}

          <div className="form-buttons">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </StyledStepForm>
  );
};

const StyledStepForm = styled.div`
  // margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: inline-block;
    margin-bottom: 7px;
  }

  input,
  select {
    width: calc(100% - 10px);
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default StepForm;
