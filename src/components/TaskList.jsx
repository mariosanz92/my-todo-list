import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import DeleteIcon from '@material-ui/icons/Delete'
import Button  from '@material-ui/core/Button'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import List from '@material-ui/core/List'

const TaskList = props => {
    const { tasks, setTasks } = props

    const toggleChange = event => {
        const { name, checked } = event.target
        const updateTask = tasks.map(task => ({
            ...task,
            done: task.id === name ? checked: task.done
        }))
        setTasks(updateTask)
    }

    const deleteOneTask = name => {
       setTasks(tasks.filter(task => name !== task.id))
    }
    
    const deleteCheckedTasks = () => {
        const updateTask = tasks.filter(task => !task.done)
        setTasks(updateTask)
      };
    
    const listTask = tasks.map((task) =>
        <ListItem divider key={task.id}>
            <Checkbox  inputProps={{ 'aria-label': "check task"}} name={task.id} onChange={toggleChange}/>
            {task.description}
            <ListItemSecondaryAction >
            <DeleteIcon aria-label='delete task' onClick={() => deleteOneTask(task.id)}></DeleteIcon>
            </ListItemSecondaryAction>
        </ListItem>
    );

    return (
        <div >
        <List>{listTask}</List>
            {tasks.length >= 1 &&
            <div>
            <Button onClick={deleteCheckedTasks} variant="contained" color="secondary" style={{ marginTop: 10}} >Delete completed tasks</Button>
            </div>}
        </div>
    )
}

export default TaskList