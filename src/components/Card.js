import React from 'react';
import {FcLike ,FcLikePlaceholder} from "react-icons/fc"
import {toast} from 'react-toastify';

const Card = (props) =>{
    let Course = props.Course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
            if(likedCourses.includes(Course.id))
            {
               //Already Liked
               setLikedCourses((prev) => prev.filter((cid) => (cid!==Course.id)) );
               toast.warning("Liked Removed"); 
            }
            else{
                if(likedCourses.length===0)
                {
                    setLikedCourses([Course.id]);
                }
                else {
                   
                    setLikedCourses((prev)=>[...prev, Course.id]);
                }
                toast.success("Liked Success");

            }
    }
    return (
        <div className=' w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
             <div className='relative'>

                <img src={Course.image.url} alt={Course.image.alt}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                   <button onClick={clickHandler}>
                   {
                    !likedCourses.includes(Course.id) ?
                    (<FcLikePlaceholder fontSize="1.75rem"/>) :
                    (<FcLike fontSize="1.75rem"/>)
                   }
                        
                   </button>
                </div> 

             </div>
             
             <div className='p-4'>
                <p className='text-white font-semibold text-lg loading-6'>{Course.title}</p>
                
                <p className='mt-2 text-white'>
                {
                    Course.description.length > 100 ?
                    (Course.description.substr(0,100))+ "..." :
                    (Course.description)
                }
                </p>
             </div>
        </div>
    );
}; 

export default Card;