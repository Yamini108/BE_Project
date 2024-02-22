import React, { useState } from "react";
import styled from "styled-components";

const StepForm = ({ currentStep, handleNext, handlePrev }) => {
  const [depMem, setDepMem] = useState(0);
  const [depDetails, setDepDetails] = useState([]);
  const [child, setChild] = useState(0);
  const [childDetails, setChildDetails] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handleDepMemChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setDepMem(parsedValue);
      setDepDetails(Array(parsedValue).fill({}));
    } else {
      <p>Enter Valid number</p>;
    }
  };

  const handleChildChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setChild(parsedValue);
      setChildDetails(Array(parsedValue).fill({}));
    } else {
      <p>Enter Valid number</p>;
    }
  };

  const handleDepDetailsChange = (index, e) => {
    const { name, value } = e.target;
    setDepDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  const handleChildDetailsChange = (index, e) => {
    const { name, value } = e.target;
    setChildDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
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
                <input
                  type="number"
                  step="0.01"
                  id="salary"
                  name="salary"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor=""></label>
              </div>
            </>
          )}

          {/* Form fields for Step 3 */}
          {currentStep === 2 && (
            <>
              <h2>Dependency Details: </h2>
              <br />
              <div className="form-group">
                <label htmlFor="noOfDependentMembers">
                  Number of Dependent Members:{" "}
                </label>
                <input
                  type="number"
                  id="noOfDependentMembers"
                  name="noOfDependentMembers"
                  value={depMem}
                  onChange={handleDepMemChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfChild">Number of Children: </label>
                <input
                  type="number"
                  id="noOfChild"
                  name="noOfChild"
                  value={child}
                  onChange={handleChildChange}
                  required
                />
              </div>
            </>
          )}

          {/* Form fields for Step 4 */}
          {currentStep === 3 && (
            <>
              {depDetails.map((_, index) => (
                <div key={index}>
                  <h3>Dependent Member {index + 1} </h3>
                  <div className="form-group">
                    <label htmlFor={`dependentName${index}`}>Name:</label>
                    <input
                      type="text"
                      id={`dependentName${index}`}
                      name={`dependentName${index}`}
                      // value={depDetails[index].name || ""}
                      onChange={(e) => handleDepDetailsChange(index, e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`dependentAge${index}`}>Age:</label>
                    <input
                      type="number"
                      id={`dependentAge${index}`}
                      name={`dependentAge${index}`}
                      // value={depDetails[index].age || ""}
                      onChange={(e) => handleDepDetailsChange(index, e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`dependentGender${index}`}>Gender:</label>
                    <select
                      id={`dependentGender${index}`}
                      name={`dependentGender${index}`}
                      // value={depDetails[index].gender || ""}
                      onChange={(e) => handleDepDetailsChange(index, e)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Form fields for Step 4 */}
          {currentStep === 4 && (
            <>
              {childDetails.map((_, index) => (
                <div key={index}>
                  <h3>Child {index + 1} </h3>
                  <div className="form-group">
                    <label htmlFor={`childName${index}`}>Name:</label>
                    <input
                      type="text"
                      id={`childName${index}`}
                      name={`childName${index}`}
                      // value={childDetails[index].name || ""}
                      onChange={(e) => handleChildDetailsChange(index, e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`childAge${index}`}>Age:</label>
                    <input
                      type="number"
                      id={`childAge${index}`}
                      name={`childAge${index}`}
                      // value={childDetails[index].name || ""}
                      onChange={(e) => handleChildDetailsChange(index, e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`childGender${index}`}>Gender:</label>
                    <select
                      id={`childGender${index}`}
                      name={`childGender${index}`}
                      // value={childDetails[index].gender || ""}
                      onChange={(e) => handleChildDetailsChange(index, e)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              ))}
            </>
          )}

          {currentStep === 5 && (
            <>
              <h2>Expenditure Details</h2>
              <br />
              
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
