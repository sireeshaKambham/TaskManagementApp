import { useState } from 'react'
import Grid from '@mui/material/Grid';
import './App.css'
import AppRoutes from './ui/components/routes/AppRoutes'
import DataContext from './ui/components/context/Context'
import tasks from './ui/data/tasks.json'

function App() {
const [data,setData] = useState(tasks)
  return (
    <>
    <Grid container>
      <DataContext.Provider value={data}>
        <AppRoutes/>
      </DataContext.Provider>
    </Grid>
    </>
  )
}

export default App
