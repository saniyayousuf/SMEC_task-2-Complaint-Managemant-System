import React from 'react'
import { FbAdd } from '../../../Config/Firebase/FirebaseMethods';
import BAButton from '../../../Components/Button';

export default function AddCourse() {

    const [courseData, setCourseData] = React.useState({
        name: '',
        duration: '',
        fees: 0,
        teacher: '',
        teacherinfo: '',
        courseinfo: '',
    });

    const fillmodel = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const AddCourse = async () => {
        try {
            await FbAdd('courses', courseData);
            setCourseData({
                ...courseData,
                name: '',
                duration: '',
                fees: 0,
                teacher: '',
                teacherinfo: '',
                courseinfo: '',
            });
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };
    return (


        <div>

            <div>
                <form className='d-flex flex-col justify-center align-items-center  h-screen w-100 shadow-md  shadow-black '>
                    <h1 className='font-bold text-4xl'>Course Form</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-2 text-center" >

                                <label >Course Name:</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control w-100'

                                    type="text"
                                    name="name"
                                    value={courseData.name}
                                    onChange={fillmodel}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2 text-center">
                                <label>Duration:</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control'
                                    type="text"
                                    name="duration"
                                    value={courseData.duration}
                                    onChange={fillmodel} />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="p-2 text-center">
                                <label>Fees:</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control'
                                    type="number"
                                    name="fees"
                                    value={courseData.fees}
                                    onChange={fillmodel} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2 text-center">
                                <label>Teacher:</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control'
                                    type="text"
                                    name="teacher"
                                    value={courseData.teacher}
                                    onChange={fillmodel} />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2 text-center">
                                <label>About Teacher:</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control'
                                    type="text"
                                    name="teacherinfo"
                                    value={courseData.teacherinfo}
                                    onChange={fillmodel} />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-2 text-center">
                                <label>About Course :</label>
                                <input
                                    className='p-2 m-2 shadow-md form-control'
                                    type="text"
                                    name="courseinfo"
                                    value={courseData.courseinfo}
                                    onChange={fillmodel} />

                            </div>
                        </div>
                    </div>





                    <div className="p-2">
                        <BAButton
                            onClick={AddCourse}
                            variant="outlined"
                            label='ADD COURSE'
                        />

                    </div>
                </form>
            </div>
        </div>
    )
}

