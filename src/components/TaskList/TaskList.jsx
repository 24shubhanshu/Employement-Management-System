import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap h-[54%] overflow-x-auto w-full py-5  mt-10'>
   

   {data.tasks.map((elem,idx)=>{
    if(elem.active){
        return<AcceptTask key={idx} data={elem}/>
    }

     if(elem.newTask){
        return<NewTask key={idx} data={elem}/>
    }

     if(elem.Completed){
        return<CompleteTask key={idx} data={elem}/>
    }

     if(elem.failed){
        return<FailedTask key={idx} data={elem}/>
    }
   })}
      {/* <AcceptTask/>
      <CompleteTask/>
      <NewTask/>
      <FailedTask/> */}

       


      


  
    </div>
  )
}

export default TaskList