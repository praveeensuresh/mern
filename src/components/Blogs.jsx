import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Blogs = () => {
   var[blogs,setBlog]=useState([])
   useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
         setBlog(response.data)
         console.log(response)
   })
   .catch(error => {
      console.error(error)
      })
      },[])
  return (
    <div>
      <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Title</strong></TableCell>
                  <TableCell><strong>Body</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell>{blog.id}</TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  )
}

export default Blogs
