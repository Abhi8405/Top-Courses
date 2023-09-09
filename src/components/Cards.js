import React from 'react'; 
import Card from "./Card";
import { useState } from 'react';

const Cards = (props) =>{
    let Courses=props.Courses;
    let category= props.category;
    const [likedCourses,setLikedCourses]=useState([]); 

    function getCourses(){
        if(category==='All'){
        let allCourses=[];
        Object.values(Courses).forEach(array => {
            array.forEach(CourseData => {
                allCourses.push(CourseData);
            })
        })
        return allCourses;
    }
    else{
         return Courses[category];
    } 
         
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mp-4'>
             {
                getCourses().map( (Course) =>  (
                    <Card key={Course.id} 
                    Course = {Course}
                    likedCourses={likedCourses}
                    setLikedCourses= {setLikedCourses}
                    /> 
                
                 ) )
             }
        </div>
    );
};

export default Cards;