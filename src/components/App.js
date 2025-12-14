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

      {page === 0 && (
        <div>
          <input name="fname" onChange={e => setProfile({ ...profile, fname: e.target.value })} />
          <input name="lname" onChange={e => setProfile({ ...profile, lname: e.target.value })} />
          <input name="phone" onChange={e => setProfile({ ...profile, phone: e.target.value })} />
          <input name="address" onChange={e => setProfile({ ...profile, address: e.target.value })} />
          <input name="url" onChange={e => setProfile({ ...profile, url: e.target.value })} />
          <button onClick={() => dispatch({ type: "SAVE_PROFILE", payload: profile })}>
            Save Profile
          </button>
        </div>
      )}

      {page === 1 && (
        <div>
          <input name="courseName" onChange={e => setEducation({ ...education, courseName: e.target.value })} />
          <input name="completionYear" onChange={e => setEducation({ ...education, completionYear: e.target.value })} />
          <input name="college" onChange={e => setEducation({ ...education, college: e.target.value })} />
          <input name="percentage" onChange={e => setEducation({ ...education, percentage: e.target.value })} />

          <button
            id="add_education"
            onClick={() => dispatch({ type: "ADD_EDU", payload: education })}
          >
            Add Education
          </button>

          {state.education.map((_, index) => (
            <button
              key={index}
              id="delete"
              onClick={() => dispatch({ type: "DEL_EDU", payload: index })}
            >
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 2 && (
        <div>
          <input name="skill" onChange={e => setSkill(e.target.value)} />

          <button
            id="add_skill"
            onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}
          >
            Add Skill
          </button>

          {state.skills.map((_, index) => (
            <button
              key={index}
              id="delete_skill"
              onClick={() => dispatch({ type: "DEL_SKILL", payload: index })}
            >
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 3 && (
        <div>
          <input name="projectName" onChange={e => setProject({ ...project, projectName: e.target.value })} />
          <input name="techStack" onChange={e => setProject({ ...project, techStack: e.target.value })} />
          <input name="description" onChange={e => setProject({ ...project, description: e.target.value })} />

          <button
            id="add_project"
            onClick={() => dispatch({ type: "ADD_PROJECT", payload: project })}
          >
            Add Project
          </button>

          {state.projects.map((_, index) => (
            <button
              key={index}
              id="delete"
              onClick={() => dispatch({ type: "DEL_PROJECT", payload: index })}
            >
              Delete
            </button>
          ))}
        </div>
      )}

      {page === 4 && (
        <div>
          <input name="Social" onChange={e => setSocial(e.target.value)} />

          <button
            id="add_social"
            onClick={() => dispatch({ type: "ADD_SOCIAL", payload: social })}
          >
            Add Social
          </button>
        </div>
      )}

      {page === 5 && (
        <div>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}

      <button id="back" onClick={() => dispatch({ type: "BACK" })}>
        Back
      </button>

      <button id="save_continue" onClick={() => dispatch({ type: "NEXT" })}>
        Save
      </button>

      <button id="next" onClick={() => dispatch({ type: "NEXT" })}>
        Next
      </button>
    </div>
  );
};

export default App;

