import React from "react";

import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@backyard/react'
import { Button } from '@backyard/react'
import { Link } from '@backyard/react'





export default function Status() {
    return (


        <div className="statuspage">
            <center>
            <h1> Check Status Page </h1>
            </center>
          



            <Table>

                <TableHead>
                    <TableRow>
                        <TableHeader>Tag_Name </TableHeader>
                        <TableHeader width={15}> NewsLetter_Id</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Reviewer</TableHeader>
                        <TableHeader>Edit Button</TableHeader>
                        <TableHeader>Reviews</TableHeader>
                    </TableRow>
                </TableHead>



                <TableBody>

                    <TableRow>

                        <TableCell>Lowes </TableCell>
                        <TableCell>  1</TableCell>
                        <TableCell> In Progress</TableCell>
                        <TableCell> Approved</TableCell>
                        <TableCell><Button color="green" variant="tertiary">Button</Button> </TableCell>
                        <TableCell>
                             <Link
                            onClick={() => alert('Clicked!')}
                            bold
                            underline="hover"
                        > Click Me!
                       </Link>

                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell> leep</TableCell>
                        <TableCell> 2</TableCell>
                        <TableCell> Progress</TableCell>
                        <TableCell> Approved</TableCell>
                        <TableCell><Button color="green" variant="tertiary">Button</Button> </TableCell>
                        <TableCell> <Link
                            onClick={() => alert('Clicked!')}
                            bold
                            underline="hover"
                        >
                            Click Me!
</Link>
                        </TableCell>

                    </TableRow>


                    <TableRow>
                        <TableCell>
                            leep
            </TableCell>
                        <TableCell>
                            3
            </TableCell>
                        <TableCell>
                            Draft
            </TableCell>
                        <TableCell>
                            pending
            </TableCell>

                        <TableCell><Button variant="tertiary" color="red"> Button</Button></TableCell>
                        <TableCell> <Link
                            onClick={() => alert('Clicked!')}
                            bold
                            underline="hover"
                        >
                            Click Me!
</Link>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Bootcamp
            </TableCell>
                        <TableCell>
                            4
            </TableCell>
                        <TableCell>
                            Draft
            </TableCell>
                        <TableCell>
                            Decline
            </TableCell>

                        <TableCell>
                            <Button color="neutral" variant="primary">
                                Button
</Button>
                        </TableCell>
                        <TableCell> <Link
                            onClick={() => alert('Clicked!')}
                            bold
                            underline="hover"
                        >
                            Click Me!
</Link>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Lowes
            </TableCell>
                        <TableCell>
                            1
            </TableCell>
                        <TableCell>
                            In Progress
            </TableCell>
                        <TableCell>
                            Pending
            </TableCell>
                        <TableCell>
                            <Button variant="tertiary" color="red"> Button</Button></TableCell>
                        <TableCell> <Link
                            onClick={() => alert('Clicked!')}
                            bold
                            underline="hover"
                        >
                            Click Me!
</Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    )
}
