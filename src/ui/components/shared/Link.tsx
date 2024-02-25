// Button link component
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';
import  {useNavigate} from "react-router-dom"
import { routes } from './constants'

export default function ButtonLink() {
    const navigate = useNavigate();
  return (
    <>
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        navigate(routes.list);
      }}
    >
    Task List
    </Link>
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        navigate(routes.edit);
      }}
    >
      Edit Task
    </Link>
    </>
  );
}