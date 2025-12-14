import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../styles/App.css";

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

          <input name="fname" onChange={e => setProfile({ ...profile, fname: e.target.value })} />
          <input name="lname" onChange={e => setProfile({ ...profile, lname: e.target.value })} />
          <input name="phone" onChange={e => setProfile({ ...profile, phone: e.target.value })} />
          <input name="address" onChange={e => setProfile({ ...profile, address: e.target.value })} />
          <input name="url" onChange={e => setProfile({ ...profile, url: e.target.value })} />

          <button onClick={() => dispatch({ type: "SAVE_PROFILE", payload: profile })}>Save Profile</button>
        </div>
      )}

      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input name="courseName" onChange={e => setEducation({ ...education, courseName: e.target.value })} />
          <input name="completionYear" onChange={e => setEducation({ ...education, completionYear: e.target.value })} />
          <input name="college" onChange={e => setEducation({ ...education, college: e.target.value })} />
          <input name="percentage" onChange={e => setEducation({ ...education, percentage: e.target.value })} />

          <button id="add_education" onClick={() => dispatch({ type: "ADD_EDU", payload: education })}>Add</button>

          <div>{state.education.length}</div>

          {state.education.map((_, i) => (
            <button key={i} id="delete" onClick={() => dispatch({ type: "DEL_EDU", payload: i })}>Delete</button>
          ))}
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Skills</h2>

          <input name="skill" onChange={e => setSkill(e.target.value)} />
          <div>{skill}</div>

          <button id="add_skill" onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}>Add</button>

          <div>{state.skills.length}</div>

          {state.skills.map((_, i) => (
            <button key={i} id="delete_skill" onClick={() => dispatch({ type: "DEL_SKILL", payload: i })}>Delete</button>
          ))}
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Add your Mini Projects</h2>

          <input name="projectName" onChange={e => setProject({ ...project, projectName: e.target.value })} />
          <input name="techStack" onChange={e => setProject({ ...project, techStack: e.target.value })} />
          <textarea name="description" onChange={e => setProject({ ...project, description: e.target.value })} />
          <div>{project.description}</div>

          <button id="add_project" onClick={() => dispatch({ type: "ADD_PROJECT", payload: project })}>Add</button>

          <div>{state.projects.length}</div>

          {state.projects.map((_, i) => (
            <button key={i} id="delete" onClick={() => dispatch({ type: "DEL_PROJECT", payload: i })}>Delete</button>
          ))}
        </div>
      )}

      {page === 4 && (
        <div>
          <h2>Social Media Links</h2>

          <input name="Social" onChange={e => setSocial(e.target.value)} />
          <div>{social}</div>

          <button id="add_social" onClick={() => dispatch({ type: "ADD_SOCIAL", payload: social })}>Add</button>

          <div>{state.social.length}</div>
        </div>
      )}

      {page === 5 && (
        <div>
          <h2>Final Resume</h2>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}

      <div className="makeStyles-footer-15">
        <button className="MuiButton-contained" id="back" onClick={() => dispatch({ type: "BACK" })}>Back</button>
        <button className="MuiButton-contained" id="save_continue" onClick={() => dispatch({ type: "NEXT" })}>Save</button>
        <button className="MuiButton-contained" id="next" onClick={() => dispatch({ type: "NEXT" })}>Next</button>
      </div>
    </div>
  );
};

export default App;
