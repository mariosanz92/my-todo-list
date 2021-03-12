import ToDoContainer from "./ToDoContainer";
import {  render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('TodoContainer', () =>{

    it('adds tasks', () => {
        render(<ToDoContainer />)

        const oneTask = 'Learn Testing'
        addTask(oneTask)

        expect(screen.getByText(oneTask)).toBeVisible()
    });

    it('deletes one task', () => {
        render(<ToDoContainer />)
        const oneTask = 'Learn Testing'
        addTask(oneTask)

        const deleteTaskButton = screen.getByLabelText('delete task')
        userEvent.click(deleteTaskButton)

        expect(screen.queryByText(oneTask)).not.toBeInTheDocument()
    });

    it('deletes all checked tasks', () => {
        render(<ToDoContainer />)
        const oneTask = 'Learn Testing'
        const anotherTask = 'Play Tennis'
        addTask(oneTask)
        addTask(anotherTask)
       
        const taskCheckBoxes = screen.getAllByLabelText('check task')
        userEvent.click(taskCheckBoxes[0])
        const deleteCompletedTasks = screen.getByText('Delete completed tasks')
        userEvent.click(deleteCompletedTasks)

        expect(screen.queryByText(oneTask)).not.toBeInTheDocument()
        expect(screen.queryByText(anotherTask)).toBeVisible()
    });

    const addTask = name =>{
        const addNewTaskInput = screen.getByLabelText('add new task')
        userEvent.type(addNewTaskInput, name)
        
        userEvent.click(addTaskButton())
        
    }

    const addTaskButton = () => screen.getByText('Add task')
    
})