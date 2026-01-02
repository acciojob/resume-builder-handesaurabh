import React, { useState } from "react";
import { connect } from "react-redux";
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
  addSocial,
  deleteSocial
} from "../actions";
import "./../styles/App.css";

const App = (props) => {
  const {
    page,
    education,
    skills,
    projects,
    social,
    profile,
    nextPage,
    backPage,
    saveProfile,
    addEducation,
    deleteEducation,
    addSkill,
    deleteSkill,
    addProject,
    deleteProject,
    addSocial,
    deleteSocial
  } = props;

  const [localProfile, setLocalProfile] = useState({});
  const [localEducation, setLocalEducation] = useState({});
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({
    projectName: "",
    techStack: "",
    description: ""
  });
  const [localSocial, setLocalSocial] = useState("");

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 0 && (
        <div>
          <h2>Add your profile details</h2>

          <input
            id="fname"
            name="fname"
            value={localProfile.fname || ""}
            onChange={(e) =>
              setLocalProfile({ ...localProfile, fname: e.target.value })
            }
          />
          <input
            id="lname"
            name="lname"
            value={localProfile.lname || ""}
            onChange={(e) =>
              setLocalProfile({ ...localProfile, lname: e.target.value })
            }
          />
          <input
            id="phone"
            name="phone"
            value={localProfile.phone || ""}
            onChange={(e) =>
              setLocalProfile({ ...localProfile, phone: e.target.value })
            }
          />
          <input
            id="address"
            name="address"
            value={localProfile.address || ""}
            onChange={(e) =>
              setLocalProfile({ ...localProfile, address: e.target.value })
            }
          />
          <input
            id="url"
            name="url"
            value={localProfile.url || ""}
            onChange={(e) =>
              setLocalProfile({ ...localProfile, url: e.target.value })
            }
          />

          <button
            id="save_continue"
            onClick={() => {
              saveProfile(localProfile);
              nextPage();
            }}
          >
            Save & Continue
          </button>
        </div>
      )}

      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input
            id="courseName"
            name="courseName"
            value={localEducation.courseName || ""}
            onChange={(e) =>
              setLocalEducation({
                ...localEducation,
                courseName: e.target.value
              })
            }
          />
          <input
            id="completionYear"
            name="completionYear"
            value={localEducation.completionYear || ""}
            onChange={(e) =>
              setLocalEducation({
                ...localEducation,
                completionYear: e.target.value
              })
            }
          />
          <input
            id="college"
            name="college"
            value={localEducation.college || ""}
            onChange={(e) =>
              setLocalEducation({
                ...localEducation,
                college: e.target.value
              })
            }
          />
          <input
            id="percentage"
            name="percentage"
            value={localEducation.percentage || ""}
            onChange={(e) =>
              setLocalEducation({
                ...localEducation,
                percentage: e.target.value
              })
            }
          />

          <button
            id="add_education"
            onClick={() => {
              addEducation(localEducation);
              setLocalEducation({});
            }}
          >
            Add Education
          </button>

          <div id="education-list">
            {education.map((edu, index) => (
              <div key={index} className="entry-item" id={`education_${index + 1}`}>
                {edu.courseName}
                <button
                  id={`delete_education_${index + 1}`}
                  onClick={() => deleteEducation(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <span id="education_count">{education.length}</span>
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Skills</h2>

          <input
            id="skillInput"
            name="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

          <div>
            {skills.map((s, index) => (
              <div key={index} id={`skill_${index + 1}`}>
                {index + 1}. {s}
                <button
                  id={`delete_skill_${index + 1}`}
                  onClick={() => deleteSkill(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <button
            id="add_skill"
            onClick={() => {
              addSkill(skill);
              setSkill("");
            }}
          >
            Add
          </button>

          <span id="skills_count">{skills.length}</span>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Add your Mini Projects</h2>

          <input
            id="projectName"
            name="projectName"
            value={project.projectName}
            onChange={(e) =>
              setProject({ ...project, projectName: e.target.value })
            }
          />
          <input
            id="techStack"
            name="techStack"
            value={project.techStack}
            onChange={(e) =>
              setProject({ ...project, techStack: e.target.value })
            }
          />
          <textarea
            id="description"
            name="description"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />

          <div>
            {projects.map((proj, index) => (
              <div key={index} id={`project_${index + 1}`}>
                {index + 1}. {proj.projectName}
                <button
                  id={`delete_project_${index + 1}`}
                  onClick={() => deleteProject(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <button
            id="add_project"
            onClick={() => {
              addProject(project);
              setProject({
                projectName: "",
                techStack: "",
                description: ""
              });
            }}
          >
            Add
          </button>

          <span id="projects_count">{projects.length}</span>
        </div>
      )}

      {page === 4 && (
        <div>
          <h2>Social Media Links</h2>

          <input
            id="socialInput"
            name="Social"
            value={localSocial}
            onChange={(e) => setLocalSocial(e.target.value)}
          />

          <div>
            {social.map((link, index) => (
              <div key={index} id={`social_${index + 1}`}>
                {index + 1}. {link}
                <button
                  id={`delete_social_${index + 1}`}
                  onClick={() => deleteSocial(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <button
            id="add_social"
            onClick={() => {
              addSocial(localSocial);
              setLocalSocial("");
            }}
          >
            Add
          </button>

          <span id="social_count">{social.length}</span>
        </div>
      )}

      <div className="makeStyles-footer-15">
        {page > 0 && (
          <button
            id="back"
            className="MuiButton-contained"
            onClick={backPage}
          >
            Back
          </button>
        )}
        {page < 4 && (
          <button
            id="next"
            className="MuiButton-contained"
            onClick={nextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
  education: state.education,
  skills: state.skills,
  projects: state.projects,
  social: state.social,
  profile: state.profile
});

const mapDispatchToProps = {
  nextPage,
  backPage,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial,
  deleteSocial
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
