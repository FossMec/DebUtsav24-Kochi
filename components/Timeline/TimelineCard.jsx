"use client"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimelineCard = ({item, mobile, index}) => {
  return (
    <TimelineItem>
      {!mobile && (
        <TimelineOppositeContent color="text.secondary" className='text-gray-light text-base' sx={{ m: "auto 0" }}>
          {item.time}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        {index==0 ? 
          <TimelineConnector style={{backgroundColor: 'transparent'}} />
        : <TimelineConnector style={{backgroundColor: 'rgb(204,24,72)'}} />
        }
        <TimelineDot style={{backgroundColor: 'rgb(204,24,72)'}} className='bg-opacity-30'>
            <div style={{backgroundColor: '#CC1848'}} className='size-[8px] rounded-full'/>
        </TimelineDot>
        {index==5 ? 
          <TimelineConnector style={{backgroundColor: 'transparent'}} />
        : <TimelineConnector style={{backgroundColor: 'rgb(204,24,72)'}} />
        }
      </TimelineSeparator>
      <TimelineContent sx={{ m: "auto 0" }}>
        <div
          className='relative rounded-3xl bg-red/[.1] md:my-[40px] p-2 text-left border-[2px] border-red flex flex-col overflow-hidden '
          data-aos="fade-up"
        >
          <span className='font-generalSans text-gray-light text-base font-[500] ml-2'>{item.title}</span>
          {mobile && (
            <span className='ml-2 font-generalSans text-base text-gray-light font-[500]'>{item.time}</span>
          )}
          <span className='mt-2 bg-zinc-900 p-2 rounded-2xl'>
            {item.text}
          </span>
        </div>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard