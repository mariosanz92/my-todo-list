import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const AddTask = props => {

    const [description, setDescription] = useState('')
    const [taskNotExists, setTaskNotExists] = useState(true)

    const {handleAddTask} = props

    const handleSubmit = () => {
        handleAddTask({
            done: false,
            id: (+new Date()).toString(),
            description
        })
        setDescription('')
        setTaskNotExists(true)
    }


    return (
        <Grid container justify="space-between" alignItems="flex-end" >
            <TextField 
                style={{ width: 240 }}
                label="Type task"
                inputProps={{ 'aria-label': 'add new task' }}
                type="text" 
                value={description} 
                onChange={event => {setDescription(event.target.value); setTaskNotExists(false)}} />
            <Button onClick={handleSubmit} disabled={taskNotExists} variant="outlined" color="primary">Add task</Button>
        </Grid>
    )
}
export default AddTask