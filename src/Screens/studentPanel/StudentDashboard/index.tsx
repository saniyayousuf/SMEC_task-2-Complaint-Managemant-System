import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BAButton from '../../../Components/Button';

// ICONS
import { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import { FbAdd, FbDelete, FbGet } from '../../../Config/Firebase/FirebaseMethods';

import CourseList from '../StudentPages/ComplaintList';
import StudentForm from '../StudentPages/ComplaintForm';




const drawerWidth = 240;
interface Props {
    window?: () => Window;
}

export default function StudentDashboard(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    
  const [course, setCourse] = useState<any>([]);

  const Navigate = useNavigate()
    useEffect(() => {
      const fetchcourse = async () => {
        try {
          const CourseData = await FbGet('courses');
          setCourse(CourseData);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      }
      fetchcourse();
  
    }, [])
    const Delete = async (id: string) => {
      try {
        await FbDelete('courses', id);
  
        const updatedCourses = course.filter((course: any) => course.id !== id);
        setCourse(updatedCourses);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    };
   


    const [pagesArr, setPagesArr] = React.useState([
        {
            name: "Complaint List ",
            route: "courselist",
            icon: <ListIcon />,
        },
        {
            name: "Complaint Forms",
            route: "studentform",
            icon: <ListIcon />,
        },



    ]);

    

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();

    const openPage = (route: any) => {
        navigate(`/student-dashboard/${route}`);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {pagesArr.map((x, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => openPage(x.route)}>
                            <ListItemIcon>{x.icon ? x.icon : <IconButton />}</ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className='ps-3  ms-5' >

                <BAButton label={'LOG OUT'} variant={'outlined'} onClick={() => navigate('/login')}

                />
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

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
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Student Complaint Management System
                    </Typography>
                    <Typography variant="h3" noWrap className='ms-5' component="div">
                    <BAButton variant='contained' onClick={()=> navigate('/admin-dashboard')} label={'Go Back'} />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
               
            </Box>
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                  <Route path="courselist" element={<CourseList />} />
                  <Route path="studentform" element={<StudentForm />} />
      

                </Routes>
            </Box>
        </Box>

    );
}
