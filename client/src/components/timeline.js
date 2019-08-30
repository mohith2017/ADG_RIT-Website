
import React,{useState,useEffect} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
const VALUES = [
  '2019-07-22','2020-08-22','2021-09-22','2024-10-23']
  const text = [
    '2019-07-22','2019-08-22','2019-09-22','2019-10-23']
    export default class Timeline extends React.Component {
      state = { value: 0, previous: 0 };

      render() {
        return (
          <div>
            {/* Bounding box for the Timeline */}
            <div style={{ width: '80%', height: '100px', margin: '30px auto' }}>
              <HorizontalTimeline
                index={this.state.value}
                indexClick={(index) => {
                  this.setState({ value: index, previous: this.state.value });
                }}
                values={ VALUES } />
            </div>
            <div className='text-center' style={{ width: '60%', height: '100px', margin: '30px auto' }}>
              {/* any arbitrary component can go here */}
              <h2>{VALUES[this.state.value]}</h2>
                <p>Lorem epsum ettc Lorem epsum ettcLorem epsum ettcLorem epsum ettc</p>
            </div>
          </div>
        );
      }
    }
