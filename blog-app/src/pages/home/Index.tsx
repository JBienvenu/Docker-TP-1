import dockerImage from "../../assets/docker.jpeg";
import Typography from "@mui/material/Typography";

export default function Home(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={dockerImage}
        style={{ width: "50%" }}
        alt="The docker whale badly drawn"
      />
      <Typography variant="h2">Le Blog De Docker Ouais Ouais</Typography>
    </div>
  );
}
