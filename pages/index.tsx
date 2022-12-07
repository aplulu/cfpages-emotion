import {AppBar, Toolbar, Typography, Box} from "@mui/material";

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
          >
            ヘッダータイトル
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          mt: 3,
          mx: 3,
        }}
      >
        コンテンツ
      </Box>
    </>
  )
}
