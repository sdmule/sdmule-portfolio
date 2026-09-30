import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

function hasCaseStudyDetails(caseStudy) {
  return Object.values(caseStudy || {}).some((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value),
  );
}

function ProjectCard({ project, index }) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const hasDetails = hasCaseStudyDetails(project.caseStudy);
  const caseStudySections = [
    ["Problem", project.caseStudy.problem],
    ["Solution", project.caseStudy.solution],
    ["Architecture", project.caseStudy.architecture],
    ["Technologies", project.caseStudy.technologies?.join(", ")],
    ["Key features", project.caseStudy.keyFeatures?.join(", ")],
    ["Technical decisions", project.caseStudy.technicalDecisions?.join(", ")],
    ["Challenges", project.caseStudy.challenges?.join(", ")],
    ["Outcome", project.caseStudy.outcome],
  ];

  return (
    <>
      <Card className="project-card" component="article">
        <CardContent className="project-card-content">
          <div className="project-card-topline">
            <FolderOpenRoundedIcon aria-hidden="true" />
            {project.category && (
              <span className="project-category">{project.category}</span>
            )}
            <span>0{index + 1}</span>
          </div>
          <Typography className="project-name" component="h3" variant="h5">
            {project.name}
          </Typography>
          <Typography className="project-description" color="text.secondary">
            {project.description}
          </Typography>
          {project.technologies.length > 0 && (
            <div className="project-tech-list" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          )}
          {project.features.length > 0 && (
            <ul className="project-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          <Stack className="project-card-links" direction="row" spacing={1}>
            {hasDetails && (
              <Button size="small" onClick={() => setCaseStudyOpen(true)}>
                Case study
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="small"
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                endIcon={<ArrowOutwardRoundedIcon />}
              >
                GitHub
              </Button>
            )}
            {project.frontendUrl && (
              <Button
                size="small"
                component="a"
                href={project.frontendUrl}
                target="_blank"
                rel="noreferrer"
                endIcon={<ArrowOutwardRoundedIcon />}
              >
                Frontend
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="small"
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                endIcon={<ArrowOutwardRoundedIcon />}
              >
                Live demo
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
      <Dialog
        open={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
        fullWidth
        maxWidth="sm"
        aria-labelledby={`case-study-${index}-title`}
      >
        <DialogTitle id={`case-study-${index}-title`}>
          {project.name}
          <IconButton
            aria-label="Close case study"
            onClick={() => setCaseStudyOpen(false)}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className="case-study-content">
            {caseStudySections
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <Typography component="h3" variant="subtitle2">
                    {label}
                  </Typography>
                  <Typography color="text.secondary">{value}</Typography>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectCard;
