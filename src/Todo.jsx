// export default function Todo({task}) {
//     return (
//         <li>Task: {task} </li>
//     )
// }

// conditional rendering option: 1
export default function Todo({task, isDone}) {
    
        if(isDone == true){
            return <li>Finished: {task}</li>
        }
        else {
            return <li>Work on:{task} </li>
        }
}