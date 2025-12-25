import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  backPage,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial
} from "../actions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const state = useSelector(state => state);

  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState({});
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({ projectName: "", techStack: "", description: "" });
  const [social, setSocial] = useState("");

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 0 && (
        <div>
          <h2>Add your profile details</h2>

          <input name="fname" value={profile.fname || ""} onChange={e => setProfile({ ...profile, fname: e.target.value })} />
          <input name="lname" value={profile.lname || ""} onChange={e => setProfile({ ...profile, lname: e.target.value })} />
          <input name="phone" value={profile.phone || ""} onChange={e => setProfile({ ...profile, phone: e.target.value })} />
          <input name="address" value={profile.address || ""} onChange={e => setProfile({ ...profile, address: e.target.value })} />
          <input name="url" value={profile.url || ""} onChange={e => setProfile({ ...profile, url: e.target.value })} />

          <button id="save_continue" onClick={() => {
            dispatch(saveProfile(profile));
            dispatch(nextPage());
          }}>Save & Continue</button>
        </div>
      )}

      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input name="courseName" value={education.courseName || ""} onChange={e => setEducation({ ...education, courseName: e.target.value })} />
          <input name="completionYear" value={education.completionYear || ""} onChange={e => setEducation({ ...education, completionYear: e.target.value })} />
          <input name="college" value={education.college || ""} onChange={e => setEducation({ ...education, college: e.target.value })} />
          <input name="percentage" value={education.percentage || ""} onChange={e => setEducation({ ...education, percentage: e.target.value })} />

          <button id="add_education" onClick={() => {
            dispatch(addEducation(education));
            setEducation({});
          }}>Add</button>

          <div>
            {state.education.map((edu, index) => (
              <div key={index} className="entry-item">
                <span>{edu.courseName} - {edu.college}</span>
                <button id={`delete_education_${index}`} onClick={() => dispatch(deleteEducation(index))}>Delete</button>
              </div>
            ))}
          </div>

          <span id="education_count">{state.education.length}</span>
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Skills</h2>

          <input name="skill" value={skill} onChange={e => setSkill(e.target.value)} />

          <button id="add_skill" onClick={() => {
            dispatch(addSkill(skill));
            setSkill("");
          }}>Add</button>

          <div>
            {state.skills.map((s, index) => (
              <div key={index} className="entry-item">
                <span>{s}</span>
                <button id={`delete_skill_${index}`} onClick={() => dispatch(deleteSkill(index))}>Delete</button>
              </div>
            ))}
          </div>

          <span id="skills_count">{state.skills.length}</span>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Add your Mini Projects</h2>

          <input name="projectName" value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value })} />
          <input name="techStack" value={project.techStack} onChange={e => setProject({ ...project, techStack: e.target.value })} />
          <textarea name="description" value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} />

          <button id="add_project" onClick={() => {
            dispatch(addProject(project));
            setProject({ projectName: "", techStack: "", description: "" });
          }}>Add</button>

          <div>
            {state.projects.map((proj, index) => (
              <div key={index} className="entry-item">
                <span>{proj.projectName} - {proj.techStack}</span>
                <button id={`delete_project_${index}`} onClick={() => dispatch(deleteProject(index))}>Delete</button>
              </div>
            ))}
          </div>

          <span id="projects_count">{state.projects.length}</span>
        </div>
      )}

      {page === 4 && (
        <div>
          <h2>Social Media Links</h2>

          <input name="Social" value={social} onChange={e => setSocial(e.target.value)} />

          <button id="add_social" onClick={() => {
            dispatch(addSocial(social));
            setSocial("");
          }}>Add</button>

          <span id="social_count">{state.social.length}</span>
        </div>
      )}

      {page === 5 && (
        <div>
          <h2>Final Resume</h2>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}

      <div className="makeStyles-footer-15">
        {page > 0 && <button id="back" className="MuiButton-contained" onClick={() => dispatch(backPage())}>Back</button>}
        {page < 5 && <button id="next" className="MuiButton-contained" onClick={() => dispatch(nextPage())}>Next</button>}
      </div>
    </div>
  );
};

export default App;
