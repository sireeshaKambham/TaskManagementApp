import { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import './App.css'
import AppRoutes from './ui/components/routes/AppRoutes'
import {ContextStore} from './ui/components/context/ContextStore'
import tasks from './ui/data/tasks.json'

function App() {

useEffect(() => {
  // Store initial data in local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, []);

  return (
    <>
    <Grid container>
      <ContextStore>
        <AppRoutes/>
      </ContextStore>
    </Grid>
    </>
  )
}

export default App
