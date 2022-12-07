import {AppBar, Toolbar, Typography, Box} from "@mui/material";
import {GetServerSideProps} from "next";

type HomeProps = {
    data: string;
};

export default function Home(props: HomeProps) {
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

        <p>
            SSRデータ: {props.data}
        </p>
      </Box>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {

    const props: HomeProps = {
        data: Math.random().toString(32).substring(2),
    };

    return {
        props,
    };
};