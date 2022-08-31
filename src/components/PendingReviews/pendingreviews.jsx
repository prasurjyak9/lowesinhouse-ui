import React from "react";
import './pendingreviews.css'
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@backyard/react'
import Button from '@backyard/react/Button'


export default function PendingReviews (){
    return(
    
        <div className="page-style">
            <center>
            <h1>Pending Requests page</h1>
            </center>
            <br></br>
            <center>
            <Table>
    <TableHead>
        <TableRow>
            
            <TableHeader>
                NewsLetters
             </TableHeader>
             
            <TableHeader width={45}>
                
              Summary
              
            </TableHeader>
            <TableHeader>Views</TableHeader>
        
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableHeader>
                NewsLetter1  
            </TableHeader>
            <TableCell>
                <span> 1
                    </span>
            </TableCell>
            <TableCell>
            <Button elevation variant="secondary">
    Edit
</Button>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableHeader>
            NewsLetter2 
            </TableHeader>
            <TableCell>
                2
            </TableCell>
            <TableCell>
            <Button elevation variant="secondary">
    Edit
</Button>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableHeader>
            NewsLetter3
            </TableHeader>
            <TableCell>
               3
            </TableCell>
            <TableCell>
            <Button elevation variant="secondary">
    Edit
</Button>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableHeader>
            NewsLetter4
            </TableHeader>
            <TableCell>
               4
            </TableCell>
            <TableCell>
            <Button elevation variant="secondary">
    Edit
</Button>
            </TableCell>
        </TableRow>
    </TableBody>
</Table>
</center>
  </div>
        
    )
}
