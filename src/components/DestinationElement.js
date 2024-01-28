import React from 'react';
import Grid from '@mui/material/Grid'; 
import './PackagePage.css';

const DestinationElement = (props) => {
  const packageItem = props.packageItem;
  return (
    <>
        <div classname='day-page'>
          <Grid
          container
          spacing={2}
          sx={{
            '--Grid-borderWidth': '4px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'var(--primary)',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'var(--primary)',
              },
              marginBottom: '20px',
              width: '100%',
              marginLeft: '1px', 
            }}
          >
            <Grid xs={6.5}>
                <div class='day-card'>
                  <p className='day'>Day 1</p>
                  <img class='day-img' src={`${process.env.PUBLIC_URL}/${packageItem.srcDay1}`} alt='picture'/>
                  <p className='short'>{packageItem.short1}</p>
                  <p className="package-description">{packageItem.description1}</p>
                </div>
            </Grid>
            <Grid xs={5.5}>
              <div classname='day-card'>
                <p className='day'>Day 2</p>
                <img class='day-img' src={`${process.env.PUBLIC_URL}/${packageItem.srcDay2}`} alt='picture'/>
                <p className='short'>{packageItem.short2}</p>
                <p className="package-description">{packageItem.description2}</p>
              </div>
            </Grid>
            <Grid xs={5.5}>
              <div classname='day-card'>
                <p className='day'>Day 3</p>
                <img class='day-img' src={`${process.env.PUBLIC_URL}/${packageItem.srcDay3}`} alt='picture'/>
                <p className='short'>{packageItem.short3}</p>
                <p className="package-description">{packageItem.description3}</p>
              </div>
            </Grid>
            <Grid xs={6.5}>
              <div classname='day-card'>
                <p className='day'>Day 4</p>
                <img class='day-img' src={`${process.env.PUBLIC_URL}/${packageItem.srcDay4}`} alt='picture'/>
                <p className='short'>{packageItem.short4}</p>
                <p className="package-description">{packageItem.description4}</p>
              </div>
            </Grid>
          </Grid>
        </div>
    </>
  );
};

export default DestinationElement;