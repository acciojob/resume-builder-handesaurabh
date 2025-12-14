import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const state = useSelector(state => state);

  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState({});
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({});
  const [social, setSocial] = useState("");

  return (
    <div>
     
      <h1>RESUME GENERATOR</h1>

      {page === 0 && (
        <div>
          <h2>Add your profile details</h2>

          <input name="fname" />
          <input name="lname" />
          <input name="phone" />
          <input name="address" />
          <input name="url" />

          <button onClick={() => dispatch({ type: "SAVE_PROFILE", payload: profile })}>
            Save Profile
          </button>
        </div>
      )}

      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input name="courseName" onChange={e => setEducation({ ...education, courseName: e.target.value })} />
          <input name="completionYear" onChange={e => setEducation({ ...education, completionYear: e.target.value })} />
          <input name="college" onChange={e => setEducation({ ...education, college: e.target.value })} />
          <input name="percentage" onChange={e => setEducation({ ...education, percentage: e.target.value })} />

          <button id="add_education" onClick={() => dispatch({ type: "ADD_EDU", payload: education })}>
            Add
          </button>

          <div>{state.education.length}</div>

          {state.education.map((_, i) => (
            <button key={i} id="delete" onClick={() => dispatch({ type: "DEL_EDU", payload: i })}>
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Skills</h2>

          <input name="skill" onChange={e => setSkill(e.target.value)} />

          <button id="add_skill" onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}>
            Add
          </button>

          <div>{state.skills.length}</div>

          {state.skills.map((_, i) => (
            <button key={i} id="delete_skill" onClick={() => dispatch({ type: "DEL_SKILL", payload: i })}>
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Add your Mini Projects</h2>

          <input name="projectName" onChange={e => setProject({ ...project, projectName: e.target.value })} />
          <input name="techStack" onChange={e => setProject({ ...project, techStack: e.target.value })} />
          <input name="description" onChange={e => setProject({ ...project, description: e.target.value })} />

          <button id="add_project" onClick={() => dispatch({ type: "ADD_PROJECT", payload: project })}>
            Add
          </button>

          <div>{state.projects.length}</div>

          {state.projects.map((_, i) => (
            <button key={i} id="delete" onClick={() => dispatch({ type: "DEL_PROJECT", payload: i })}>
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 4 && (
        <div>
          <h2>Social Media Links</h2>

          <input name="Social" onChange={e => setSocial(e.target.value)} />

          <button id="add_social" onClick={() => dispatch({ type: "ADD_SOCIAL", payload: social })}>
            Add
          </button>

          <div>{state.social.length}</div>
        </div>
      )}

      {page === 5 && (
        <div>
          <h2>Final Resume</h2>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}

      <button id="back" onClick={() => dispatch({ type: "BACK" })}>Back</button>
      <button id="save_continue" onClick={() => dispatch({ type: "NEXT" })}>Save</button>
      <button id="next" onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
};

export default App;
