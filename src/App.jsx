import './App.css'
import React from 'react'

import First from './components/First'
import WithParameter from './components/WithParameter'
import WithChildren from './components/WithChildren'
import Card from './components/layout/Card'
import Repetition from './components/Repetition'
import Conditional from './components/Conditional'
import ConditionalWithIf from './components/ConditionalWithIf'


export default (props) => (
    <div className="App">
        
        <Card title="#06 - Conditional v2">
            <ConditionalWithIf number={10}></ConditionalWithIf>
        </Card>

        <Card title="#05 - Conditional v1">
            <Conditional number={11}></Conditional>
        </Card>
        
        <Card title="#04 - Repetition">
            <Repetition></Repetition>
        </Card>

        <Card title="#03 - Component with children"><WithChildren>
            <ul>
                <li>Anna</li>
                <li>Lea</li>
                <li>Charles</li>
                <li>Daniel</li>
            </ul>
        </WithChildren>
        </Card>

        <Card title="#02 - Component with parameter"><WithParameter title="That's the title"
            subtitle="That's the subtitle" />
        </Card>

        <Card title="#01 - 1st Component">
            <First />
        </Card>

        {/* <WithChildren>
            <ul>
                <li>Anna</li>
                <li>Lea</li>
                <li>Charles</li>
                <li>Daniel</li>
            </ul>
        </WithChildren> */}

        {/* <First></First>
        <WithParameter title="That's the title"
            subtitle="That's the subtitle" />
        <WithParameter title="2nd title"
            subtitle="2nd subtitle" /> */}
        
    </div>
);