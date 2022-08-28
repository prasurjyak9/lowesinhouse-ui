import { useState, useEffect } from "react";
import NewsLetter from "../Newsletter/Newsletter";

function ReaderFeed() {
    const urlList = ["http://localhost:8080/v1/events/lionjson/", "http://localhost:8080/v1/events/shinchanjson/"]

    const newsFeed = [
        {
            "newsletterId": 1,
            "status": 0,
            "content": '{"version":"5.1.0","objects":[{"type":"i-text","version":"5.1.0","originX":"left","originY":"top","left":100,"top":100,"width":79.98,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":40,"text":"hello","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":{},"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","pathAlign":"baseline"},{"type":"image","version":"5.1.0","originX":"left","originY":"top","left":254.57,"top":119.83,"width":1000,"height":667,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":0.51,"scaleY":0.51,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"https://images.unsplash.com/photo-1605398187824-10dc2e9b8237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80","crossOrigin":null,"filters":[]}]}',
            "tag": "Leap",
            "reviewerId": null,
            "approverId": null,
            "logs": [
                {
                    "logId": 1,
                    "reviewerId": null,
                    "reviews": null
                }
            ],
            "remarks": [
                {
                    "remarkId": 1,
                    "remark": "Nice newsletter"
                },
                {
                    "remarkId": 2,
                    "remark": "Loved it!"
                }
            ]
        },
        {
            "newsletterId": 2,
            "status": 0,
            "content": '{"version":"5.2.4","objects":[{"type":"i-text","version":"5.2.4","originX":"left","originY":"top","left":35,"top":86,"width":95.53,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":40,"text":"LION","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":[],"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","pathAlign":"baseline"},{"type":"image","version":"5.2.4","originX":"left","originY":"top","left":494.29,"top":206.41,"width":1902,"height":1363,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":0.14,"scaleY":0.14,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"https://upload.wikimedia.org/wikipedia/commons/a/a0/African_Elephant_%28188286877%29.jpeg","crossOrigin":null,"filters":[]},{"type":"image","version":"5.2.4","originX":"left","originY":"top","left":15.49,"top":163.51,"width":1000,"height":667,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":0.33,"scaleY":0.33,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"cropX":0,"cropY":0,"src":"https://images.unsplash.com/photo-1605398187824-10dc2e9b8237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80","crossOrigin":null,"filters":[]},{"type":"i-text","version":"5.2.4","originX":"left","originY":"top","left":484,"top":80,"width":206.64,"height":45.2,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"fontFamily":"Times New Roman","fontWeight":"normal","fontSize":40,"text":"ELEPHANT","underline":false,"overline":false,"linethrough":false,"textAlign":"left","fontStyle":"normal","lineHeight":1.16,"textBackgroundColor":"","charSpacing":0,"styles":[],"direction":"ltr","path":null,"pathStartOffset":0,"pathSide":"left","pathAlign":"baseline"}],"background":"pink"}',
            "tag": "Comm",
            "reviewerId": null,
            "approverId": null,
            "logs": [],
            "remarks": [
                {
                    "remarkId": 1,
                    "remark": "Could be better"
                },
                {
                    "remarkId": 2,
                    "remark": "I like it"
                }
            ]
        }
    ]
    
    return (
        <div>
            {/* {urlList.map((url, idx) => <NewsLetter key={idx} url={url} id={"canvas" + idx}/>)} */}

            {newsFeed.map((nl, idx) => <NewsLetter key={idx} content={nl.content} id={"canvas" + idx} comments={nl.remarks}/>)}
        </div>
    )
}

export default ReaderFeed;
