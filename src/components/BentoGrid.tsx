import React from "react"
import { Typography, Container, Grid, Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import CardWithHoverEffect from "./CardWithHoverEffect"
import darkTheme from "../components/UI/Theme"

export default function BentoGrid() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "white", p: 4 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Destacado
                  </Typography>
                  <Typography variant="body2">Contenido principal aquí</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Sección 1
                  </Typography>
                  <Typography variant="body2">Breve descripción</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={6}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Info
                  </Typography>
                  <Typography variant="body2">Datos</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Stats
                  </Typography>
                  <Typography variant="body2">Números</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Galería
                  </Typography>
                  <Typography variant="body2">Imágenes o contenido visual</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Sección 2
                  </Typography>
                  <Typography variant="body2">Más información aquí</Typography>
                </CardWithHoverEffect>
              </Box>

            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={6}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>

                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Lateral
                  </Typography>
                  <Typography variant="body2">Contenido extra</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>

                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Sección 3
                  </Typography>
                  <Typography variant="body2">Detalles adicionales</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={6}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>

                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    CTA
                  </Typography>
                  <Typography variant="body2">Acción</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ width: '100%', paddingTop: '100%', position: 'relative' }}>

                <CardWithHoverEffect sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Footer
                  </Typography>
                  <Typography variant="body2">Enlaces y copyright</Typography>
                </CardWithHoverEffect>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}