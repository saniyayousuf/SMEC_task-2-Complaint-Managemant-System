import { useEffect, useState } from 'react';
import {  FbGet ,FbGetByID} from '../../../Config/Firebase/FirebaseMethods';
import { Box, Button, Typography, Paper} from "@mui/material"
import BAButton from '../../../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';


export default function CourseList() {
  const [CourseDetail, setcoursedetail] = useState<any>({});
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [studentsData, setstudentsData] = useState<any>([]);
  const { id } = useParams();

  const getdata = () => {
    FbGetByID("courses", `${id}`)
      .then((res: any) => {
        console.log(res);

        setcoursedetail({ ...res });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);


  const navigate = useNavigate()
  useEffect(() => {
    const fetchcourse = async () => {
      try {
        const studentsData = await FbGet('studentsData');
        setstudentsData(studentsData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchcourse();

  }, [])


  const Back = () => {
    window.history.back();
  };
 

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  return (

    <div>
      <div className='d-flex justify-around'>

        <h2 className='font-bold text-3xl'>Student Complaint List</h2>
        <BAButton

          label={'Add More'}
          variant={'outlined'}
          onClick={Back} />
      </div>

      <table className='table  table-striped table-bordered '>
        <thead className='p-2 m-5'>
          <tr >


            <th>Student Name</th>
            <th>Complaint</th>
            <th>Email</th>
            <th>Section</th>


          </tr>
        </thead>
        <tbody

        >
          {studentsData.map((studentsData: any, index: any) => (
            <tr key={index} onClick={() => {
              navigate(`${studentsData.id}`);
              // handleOpen
            }}>
              <td>{studentsData.studentName}</td>
              <td>
                {studentsData.complaint}
              </td>
              <td>{studentsData.email}</td>

              <td>
                {studentsData.section}
              </td>

              
            </tr>
          ))}
        </tbody>
      </table>


    </div>


  );
};