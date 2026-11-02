import { Box, Chip, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function ProjectCard({ p }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "16/9",
        cursor: "pointer",
        border: 1,
        borderColor: "divider",
        "& img": { transition: "transform .8s cubic-bezier(.2,.8,.2,1)" },
        "&:hover img": { transform: "scale(1.08)" },
        "&:hover .play": {
          opacity: 1,
          transform: "translate(-50%,-50%) scale(1)",
        },
      }}
    >
      <Box
        component="img"
        src={p.img}
        alt={p.title}
        loading="lazy"
        width={1280}
        height={720}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(8,9,12,.95), transparent 60%)",
        }}
      />
      <Box
        className="play"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%) scale(.7)",
          opacity: 0,
          transition: ".4s",
          width: 72,
          height: 72,
          borderRadius: "50%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "grid",
          placeItems: "center",
        }}
      >
        <PlayArrowIcon fontSize="large" />
      </Box>
      <Box sx={{ position: "absolute", left: 24, right: 24, bottom: 20 }}>
        <Typography variant="overline" color="primary">
          {p.type} · {p.year}
        </Typography>
        <Typography variant="h4">{p.title}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
            {p.role}
          </Typography>
          {p.tools.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
