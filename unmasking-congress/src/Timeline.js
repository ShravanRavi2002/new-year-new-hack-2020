import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


  
export default function OurTimeline(){
    var months=["December", "November", "October", "September", "August", "July", "June", "May" , "April", "March"]
    const useStyles ={
        timeline: {
          transform: "rotate(90deg)"
        },
        timelineContentContainer: {
          textAlign: "left"
        },
        timelineContent: {
          display: "inline-block",
          transform: "rotate(-90deg)",
          textAlign: "center",
          minWidth: 50
        },
        timelineIcon: {
          transform: "rotate(-90deg)"
        }
      };
      console.log(useStyles.timeline)
  return (
    <Timeline style={useStyles.timeline}>
        {months.map(month => {
            return(
                <div key={month}>
                    <TimelineItem >
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={useStyles.timelineContentContainer}>
                            <div className="timelineContent" style={useStyles.timelineContent}>{month}</div>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            )
        })}
    </Timeline>
  );
}