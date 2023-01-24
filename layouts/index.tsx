import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AppMenu from "../components/appMenu/AppMenu";
import { globalStyles } from "./styles"

type Props = {
    title?: string,
    children: JSX.Element,
};

export default function Layout({ children }: Props) {

    const drawerWidth = 240;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton

                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Material ui example
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                    variant="permanent"
                    anchor="left">
                    <AppMenu />
                </Drawer>

                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    {children}
                </Box>


                {<style jsx global>{globalStyles}</style>}

                {/*<style jsx>{styles}</style>*/}
            </Box>
        </>
    )
}
